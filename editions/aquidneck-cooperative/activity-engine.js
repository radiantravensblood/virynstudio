(() => {
  "use strict";

  const content = window.PARISH_CONTENT || {};
  const activities = Array.isArray(content.activities) ? content.activities : [];

  const WEEKDAYS = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6
  };

  const dateKey = (date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  };

  const fromDateKey = (iso) => new Date(`${iso}T12:00:00`);

  const activeDate = () => {
    const rhythmDate = window.COOPERATIVE_RHYTHM?.today;
    if (rhythmDate && /^\d{4}-\d{2}-\d{2}$/.test(rhythmDate)) {
      return fromDateKey(rhythmDate);
    }
    return new Date();
  };

  const addDaysKey = (iso, days) => {
    const date = fromDateKey(iso);
    date.setDate(date.getDate() + days);
    return dateKey(date);
  };

  const timingDate = (value) => {
    if (!value || typeof value !== "string") return null;
    const match = value.match(/^(\d{4}-\d{2}-\d{2})/);
    return match ? match[1] : null;
  };

  const lifecycleState = (activity, at = activeDate()) => {
    const today = dateKey(at);
    const lifecycle = activity.lifecycle || {};
    const timing = activity.timing || {};
    const publishOn = lifecycle.publishOn || null;
    const start = timingDate(timing.start);
    const end = timingDate(timing.end) || start;
    const explicitExpires = lifecycle.expiresOn || null;
    const parsedGrace = Number(lifecycle.graceDays);
    const graceDays = Number.isFinite(parsedGrace) ? Math.max(0, parsedGrace) : 1;

    if (publishOn && today < publishOn) return "unpublished";
    if (lifecycle.mode === "perennial" || timing.mode === "perennial") return "active";
    if (!start && lifecycle.mode === "recurring") return "active";
    if (!start) return "active";

    const finalVisibleDate = explicitExpires || addDaysKey(end, graceDays);
    if (today > finalVisibleDate) return "expired";
    if (today > end) return "grace";
    if (today < start) return "upcoming";
    return "active";
  };

  const nthWeekdayOfMonth = (year, monthIndex, weekday, ordinal) => {
    const first = new Date(year, monthIndex, 1, 12, 0, 0);
    const delta = (weekday - first.getDay() + 7) % 7;
    return new Date(year, monthIndex, 1 + delta + ((ordinal - 1) * 7), 12, 0, 0);
  };

  const nextWeekly = (at, weekday) => {
    const target = WEEKDAYS[String(weekday || "").toLowerCase()];
    if (!Number.isInteger(target)) return null;
    const date = new Date(at.getFullYear(), at.getMonth(), at.getDate(), 12, 0, 0);
    const delta = (target - date.getDay() + 7) % 7;
    date.setDate(date.getDate() + delta);
    return date;
  };

  const nextMonthlyOrdinal = (at, recurrence) => {
    const target = WEEKDAYS[String(recurrence.weekday || "").toLowerCase()];
    const ordinal = Number(recurrence.ordinal);
    if (!Number.isInteger(target) || !Number.isInteger(ordinal) || ordinal < 1 || ordinal > 5) return null;

    let candidate = nthWeekdayOfMonth(at.getFullYear(), at.getMonth(), target, ordinal);
    const today = new Date(at.getFullYear(), at.getMonth(), at.getDate(), 12, 0, 0);
    if (candidate < today) {
      const nextMonth = new Date(at.getFullYear(), at.getMonth() + 1, 1, 12, 0, 0);
      candidate = nthWeekdayOfMonth(nextMonth.getFullYear(), nextMonth.getMonth(), target, ordinal);
    }
    return candidate;
  };

  const exceptionFor = (activity, occurrenceDate) => {
    if (!occurrenceDate) return null;
    const key = dateKey(occurrenceDate);
    return (activity.timing?.exceptions || []).find((item) => item.date === key) || null;
  };

  const resolveOccurrence = (activity, at = activeDate()) => {
    const timing = activity.timing || {};
    const recurrence = timing.recurrence || null;
    const lifecycle = lifecycleState(activity, at);

    if (lifecycle === "expired" || lifecycle === "unpublished") {
      return { date: null, state: lifecycle, exception: null };
    }

    if (!recurrence) {
      const start = timingDate(timing.start);
      const occurrenceDate = start ? fromDateKey(start) : null;
      return {
        date: start,
        state: lifecycle,
        exception: exceptionFor(activity, occurrenceDate)
      };
    }

    let candidate = null;
    if (recurrence.frequency === "weekly") {
      candidate = nextWeekly(at, recurrence.weekday);
    } else if (recurrence.frequency === "monthly") {
      candidate = nextMonthlyOrdinal(at, recurrence);
    }

    const exception = exceptionFor(activity, candidate);
    return {
      date: candidate ? dateKey(candidate) : null,
      state: exception?.state || lifecycle,
      exception
    };
  };

  const resolvedStatus = (activity, occurrence) => {
    const override = activity.status?.override || null;
    if (override?.state) return override.state;
    if (occurrence?.exception?.state) return occurrence.exception.state;
    if (activity.status?.state) return activity.status.state;
    return occurrence?.state || "scheduled";
  };

  const toEventView = (activity, at = activeDate()) => {
    const occurrence = resolveOccurrence(activity, at);
    const identity = activity.identity || {};
    const relationships = activity.relationships || {};
    const display = activity.display || {};
    const source = activity.source || {};
    const override = activity.status?.override || null;

    return {
      id: activity.id,
      title: identity.title || "Untitled activity",
      churchId: relationships.churchId || null,
      meta: override?.meta || occurrence.exception?.meta || display.meta || "",
      description: override?.note || occurrence.exception?.note || display.description || "",
      scope: relationships.scope || [],
      type: identity.ministryType || identity.kind || "community",
      kind: identity.kind || "activity",
      badge: identity.badge || "Activity",
      status: resolvedStatus(activity, occurrence),
      override,
      sourceId: source.id || "prototype",
      sourceAuthority: source.authority || "prototype",
      sourceReviewed: Boolean(source.reviewed),
      lifecycleState: lifecycleState(activity, at),
      occurrence,
      timing: activity.timing || {},
      relationships,
      actions: activity.actions || []
    };
  };

  const resolveAll = (at = activeDate()) => activities
    .map((activity) => toEventView(activity, at))
    .filter((activity) => activity.lifecycleState !== "expired" && activity.lifecycleState !== "unpublished");

  const find = (id) => activities.find((activity) => activity.id === id) || null;

  window.COOPERATIVE_ACTIVITY = {
    schema: "viryn.cooperative.activity.v1",
    activities,
    activeDate,
    lifecycleState,
    resolveOccurrence,
    toEventView,
    resolveAll,
    find
  };
})();
