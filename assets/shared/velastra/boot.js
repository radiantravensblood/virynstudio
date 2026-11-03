import { VELASTRA_GRAMMAR } from "./core-grammar.js";
import { STUDIO_GRAMMAR } from "./studio-grammar.js";
import {
  applyStudioDocument,
  composeStudioSurface,
  composeStudioDocument,
  evaluateStudioExemplars
} from "./studio.js";

const VERSION = "0018.1";

function apply() {
  const applied = applyStudioDocument({
    document,
    grammar: VELASTRA_GRAMMAR,
    studioGrammar: STUDIO_GRAMMAR
  });

  document.documentElement.dataset.velastraStudio = "active";
  document.documentElement.dataset.velastraStudioVersion = VERSION;

  window.VelastraStudio = Object.freeze({
    version: VERSION,
    inspect: () =>
      composeStudioDocument({
        grammar: VELASTRA_GRAMMAR,
        studioGrammar: STUDIO_GRAMMAR
      }),
    compose: (surfaceId, frameworkId = null) =>
      composeStudioSurface({
        grammar: VELASTRA_GRAMMAR,
        studioGrammar: STUDIO_GRAMMAR,
        surfaceId,
        frameworkId
      }),
    tests: () =>
      evaluateStudioExemplars({
        grammar: VELASTRA_GRAMMAR,
        studioGrammar: STUDIO_GRAMMAR
      }),
    applied: () => applied.map((entry) => ({
      ...entry,
      tokens: { ...entry.tokens },
      attributes: { ...entry.attributes }
    }))
  });
}

function start() {
  window.setTimeout(apply, 0);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start, { once: true });
} else {
  start();
}
