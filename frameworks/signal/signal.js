(function () {
  "use strict";

  // Portfolio demonstration only. A code embedded in public static JavaScript is
  // not authentication. Production listening rooms require protected storage,
  // server-side authorization, expiring links, and access logging.
  const DEMO_ACCESS_CODE = "NOBODYKING";
  const SESSION_KEY = "viryn-signal-room-open";

  const tracks = [
    {
      slug: "snp",
      title: "SNP",
      artist: "Ravensblood",
      duration: "05:36",
      description: "These are the effortless flows supposedly.",
      credit: "Produced & mixed by CJ Morse",
      audio: "./assets/audio/snp.mp3",
      artwork: "./assets/artwork/snp.svg",
      artworkAlt: "SNP concept cover with looping gold and plum lines on black",
      downloadName: "Ravensblood - SNP.mp3"
    },
    {
      slug: "i-hate-the-rain",
      title: "I Hate The Rain",
      artist: "Ravensblood",
      duration: "02:43",
      description: "A reflection on petrichor.",
      credit: "Produced by CJ Morse",
      audio: "./assets/audio/i-hate-the-rain.mp3",
      artwork: "./assets/artwork/i-hate-the-rain.svg",
      artworkAlt: "I Hate The Rain concept cover with blue rain, a gold sun, and reflective water",
      downloadName: "Ravensblood - I Hate The Rain.mp3"
    },
    {
      slug: "vintage",
      title: "Vintage",
      artist: "Ravensblood",
      duration: "04:22",
      description: "I am the Nobody King ;P",
      credit: "Produced, performed, and written by CJ Morse",
      audio: "./assets/audio/vintage.mp3",
      artwork: "./assets/artwork/vintage.svg",
      artworkAlt: "Vintage concept cover with a fractured gold crown on black and parchment",
      downloadName: "Ravensblood - Vintage.mp3"
    },
    {
      slug: "devils-and-demons",
      title: "Devils and Demons",
      artist: "Ravensblood",
      duration: "04:46",
      description: "Go on and speak your truth.",
      credit: "Produced, written, and performed by CJ Morse",
      audio: "./assets/audio/devils-and-demons.mp3",
      artwork: "./assets/artwork/devils-and-demons.svg",
      artworkAlt: "Devils and Demons concept cover with mirrored crimson profiles and a gold voice-line",
      downloadName: "Ravensblood - Devils and Demons.mp3"
    },
    {
      slug: "where-r-u-going",
      title: "Where R U Going?",
      artist: "Ravensblood",
      duration: "02:35",
      description: "Where did I go?",
      credit: "Produced, performed, and written by CJ Morse",
      audio: "./assets/audio/where-r-u-going.mp3",
      artwork: "./assets/artwork/where-r-u-going.svg",
      artworkAlt: "Where R U Going? concept cover with a midnight road bending toward a pale blue moon",
      downloadName: "Ravensblood - Where R U Going.mp3"
    }
  ];

  function getTrack(slug) {
    return tracks.find((track) => track.slug === slug) || tracks[0];
  }

  function normalizeCode(value) {
    return String(value || "").trim().replace(/\s+/g, "").toUpperCase();
  }

  function sessionIsOpen() {
    try {
      return sessionStorage.getItem(SESSION_KEY) === "true";
    } catch (error) {
      console.warn("Listening-room session state could not be read.", error);
      return false;
    }
  }

  function saveSession(isOpen) {
    try {
      if (isOpen) sessionStorage.setItem(SESSION_KEY, "true");
      else sessionStorage.removeItem(SESSION_KEY);
    } catch (error) {
      console.warn("Listening-room session state could not be saved.", error);
    }
  }

  function initializeListeningRoom() {
    const gate = document.querySelector("[data-room-gate]");
    const room = document.querySelector("[data-room-content]");
    const form = document.getElementById("room-access-form");
    const codeInput = document.getElementById("room-code");
    const accessStatus = document.getElementById("room-access-status");
    const fillCode = document.querySelector("[data-fill-code]");
    const exitButton = document.querySelector("[data-room-exit]");
    const audio = document.getElementById("signal-audio");
    const artwork = document.getElementById("now-playing-art");
    const title = document.getElementById("now-playing-title");
    const description = document.getElementById("now-playing-description");
    const credit = document.getElementById("now-playing-credit");
    const download = document.getElementById("current-download");
    const audioStatus = document.getElementById("audio-status");
    const noteTrack = document.getElementById("note-track");
    const noteText = document.getElementById("listening-note");
    const noteStatus = document.getElementById("note-status");
    const sendNote = document.querySelector("[data-send-note]");
    const previous = document.querySelector("[data-previous-track]");
    const next = document.querySelector("[data-next-track]");
    const queueButtons = Array.from(document.querySelectorAll("[data-track]"));
    const roomJumps = Array.from(document.querySelectorAll("[data-track-intent]"));

    if (!gate || !room || !form || !codeInput || !audio) return;

    let currentSlug = tracks[0].slug;
    let pendingSlug = tracks[0].slug;

    function setAccessMessage(message, state) {
      if (!accessStatus) return;
      accessStatus.textContent = message;
      accessStatus.classList.toggle("is-error", state === "error");
      accessStatus.classList.toggle("is-success", state === "success");
    }

    function setTrack(slug, shouldPlay) {
      const track = getTrack(slug);
      currentSlug = track.slug;

      audio.pause();
      audio.src = track.audio;
      audio.load();

      if (artwork) {
        artwork.src = track.artwork;
        artwork.alt = track.artworkAlt;
      }
      if (title) title.textContent = track.title;
      if (description) description.textContent = track.description;
      if (credit) credit.textContent = track.credit;
      if (download) {
        download.href = track.audio;
        download.download = track.downloadName;
        download.textContent = `Download ${track.title} MP3`;
      }
      if (noteTrack) noteTrack.value = track.title;

      queueButtons.forEach((button) => {
        const isCurrent = button.dataset.track === track.slug;
        button.classList.toggle("is-current", isCurrent);
        button.setAttribute("aria-pressed", String(isCurrent));
        const action = button.querySelector(".queue-action");
        if (action) action.textContent = isCurrent ? "Selected" : "Play";
      });

      if (audioStatus) {
        audioStatus.textContent = `${track.title} selected. Playback never starts automatically unless you pressed a Play control.`;
      }

      if (shouldPlay) {
        const playAttempt = audio.play();
        if (playAttempt && typeof playAttempt.catch === "function") {
          playAttempt.catch(() => {
            if (audioStatus) audioStatus.textContent = `${track.title} is ready. Press play in the audio controls to begin.`;
          });
        }
      }
    }

    function openRoom(slug) {
      gate.hidden = true;
      room.hidden = false;
      saveSession(true);
      setAccessMessage("Transmission accepted. The listening room is open.", "success");
      setTrack(slug || pendingSlug || currentSlug, false);
      const firstQueue = room.querySelector("[data-track]");
      if (firstQueue) firstQueue.focus({ preventScroll: true });
    }

    function closeRoom() {
      audio.pause();
      audio.removeAttribute("src");
      audio.load();
      room.hidden = true;
      gate.hidden = false;
      saveSession(false);
      codeInput.value = "";
      setAccessMessage("The room is closed. Enter the access phrase to return.", "");
      codeInput.focus({ preventScroll: true });
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (normalizeCode(codeInput.value) !== DEMO_ACCESS_CODE) {
        setAccessMessage("That phrase did not open this transmission. Use the portfolio code shown below.", "error");
        codeInput.select();
        return;
      }
      openRoom(pendingSlug);
    });

    if (fillCode) {
      fillCode.addEventListener("click", () => {
        codeInput.value = DEMO_ACCESS_CODE;
        setAccessMessage("Portfolio code loaded. Activate “Open room” when ready.", "");
        codeInput.focus();
      });
    }

    if (exitButton) exitButton.addEventListener("click", closeRoom);

    queueButtons.forEach((button) => {
      button.setAttribute("aria-pressed", button.classList.contains("is-current") ? "true" : "false");
      button.addEventListener("click", () => setTrack(button.dataset.track, true));
    });

    roomJumps.forEach((link) => {
      link.addEventListener("click", () => {
        pendingSlug = getTrack(link.dataset.trackIntent).slug;
        if (!room.hidden) {
          window.setTimeout(() => setTrack(pendingSlug, false), 120);
        } else {
          window.setTimeout(() => {
            setAccessMessage(`${getTrack(pendingSlug).title} is queued. Enter the portfolio phrase to listen.`, "");
            codeInput.focus({ preventScroll: true });
          }, 220);
        }
      });
    });

    function moveTrack(direction) {
      const currentIndex = tracks.findIndex((track) => track.slug === currentSlug);
      const nextIndex = (currentIndex + direction + tracks.length) % tracks.length;
      setTrack(tracks[nextIndex].slug, true);
    }

    if (previous) previous.addEventListener("click", () => moveTrack(-1));
    if (next) next.addEventListener("click", () => moveTrack(1));

    audio.addEventListener("play", () => {
      const track = getTrack(currentSlug);
      if (audioStatus) audioStatus.textContent = `Playing ${track.title} by ${track.artist}.`;
    });

    audio.addEventListener("pause", () => {
      const track = getTrack(currentSlug);
      if (!audio.ended && audioStatus) audioStatus.textContent = `${track.title} paused.`;
    });

    audio.addEventListener("ended", () => moveTrack(1));

    audio.addEventListener("error", () => {
      if (audioStatus) audioStatus.textContent = "The audio file could not be loaded. The download link remains available.";
    });

    if (sendNote && noteText && noteTrack) {
      sendNote.addEventListener("click", () => {
        const note = noteText.value.trim();
        if (!note) {
          if (noteStatus) noteStatus.textContent = "Write a listening note before opening the email.";
          noteText.focus();
          return;
        }

        const config = window.VIRYN_STUDIO_CONFIG || {};
        const email = config.contact?.email || "hello@virynsystems.online";
        const subject = `Signal listening note — ${noteTrack.value}`;
        const body = [
          "Hello Viryn Studio,",
          "",
          `Listening note for: ${noteTrack.value}`,
          "",
          note,
          "",
          "Sent from the Signal Framework listening-room demonstration."
        ].join("\n");
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        if (noteStatus) noteStatus.textContent = "Your email application should open with the note prepared.";
      });
    }

    if (sessionIsOpen()) openRoom(currentSlug);
    else setTrack(currentSlug, false);
  }

  document.addEventListener("DOMContentLoaded", initializeListeningRoom);
})();
