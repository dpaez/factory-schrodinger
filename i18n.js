const STORAGE_KEY = 'lang';

function readSaved() {
  try { return localStorage.getItem(STORAGE_KEY); }
  catch { return null; }
}

export function resolveLang() {
  const q = new URLSearchParams(location.search).get('lang');
  if (q === 'es' || q === 'en') return q;
  const saved = readSaved();
  if (saved === 'es' || saved === 'en') return saved;
  return 'es';
}

export function applyLang(next) {
  try { localStorage.setItem(STORAGE_KEY, next); }
  catch { /* private mode */ }
  const url = new URL(location.href);
  url.searchParams.set('lang', next);
  const root = document.documentElement;
  if (root.classList.contains('is-leaving')) return;
  root.classList.add('is-leaving');
  const reveal = document.querySelector('.reveal');
  let gone = false;
  const go = () => {
    if (gone) return;
    gone = true;
    location.assign(url);
  };
  reveal?.addEventListener('transitionend', (e) => {
    if (e.target === reveal && e.propertyName === 'opacity') go();
  });
  setTimeout(go, 320);
}

export const lang = resolveLang();

const copy = {
  es: {
    deckTitle: 'La fábrica de Schrödinger',
    catToast: 'gato',
    catKey: 'Cambiar el estilo del gato',
    langLabel: 'Idioma',
    titleObserve: 'Observar',
    boxStencil: 'CAJA · NO ABRIR',
    alive: 'vivo',
    dead: 'muerto',
    boxHint: '[ click para observar ]',
    particle: '(a) partícula',
    geiger: '(b) geiger',
    hammer: '(c) martillo',
    poison: '(d) veneno',
    catLabel: '(e) gato',
    observeBtn: 'observar()',
    before: '(a) antes',
    now: '(b) ahora',
    agentPrompt: 'agent("sumá 2 y 2")',
    agentLines: ['4', '¡4! ¿Querés que agregue tests?', '2 + 2 = 4. De paso refactoricé el módulo de auth.', 'Depende del contexto… ¿base 10?',
      'Listo. Borré node_modules para empezar de cero.', '4. Abrí un PR con 37 archivos cambiados.', "You're absolutely right! Es 5.", 'Creé sum.ts, sum.test.ts y SUM_ARCHITECTURE.md'],
    timeAxis: 'tiempo →',
    tokenLines: ['Let me first explore the codebase…', 'Leyendo 42 archivos para entender el contexto…', 'Voy a resumir lo que hice hasta ahora…',
      'Re-leyendo la skill por las dudas…', 'Verificando que la verificación funcionó…', 'Corriendo los tests de nuevo, por las dudas…',
      'Great question! Let me think step by step…', 'Releyendo el plan que escribí hace 2 minutos…'],
    result: 'Resultado',
    optional: 'opc.',
    asideKicker: 'al margen',
    nondeterministic: 'no-determinístico',
    artifact: 'artefacto',
    correction: 'corrección',
    attempt: 'intento',
    preparing: 'preparando inputs',
    agentWorking: 'el agente labura…',
    outputReady: 'output listo',
    ticketDone: 'ticket completo',
    nextStage: 'siguiente stage',
    prose: 'prosa',
    code: 'código',
    mapWrite: '← escribo el código',
    mapDelegate: 'delego al agente →',
    mapEng: '↑ ingeniería',
    mapVibes: '↓ vibes',
    mapBefore: 'antes · escribía todo',
    mapDest: 'nuevo destino',
    mapFinal: 'el trabajo alrededor del agente',
    mapMe: 'yo, hoy',
    lights: 'Luces',
    trendInterest: 'interés',
    months: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
    trendTicks: ['oct 25', 'ene 26', 'abr', 'jul', 'oct 26'],
  },
  en: {
    deckTitle: "Schrödinger's Factory",
    catToast: 'cat',
    catKey: 'Change the cat style',
    langLabel: 'Language',
    titleObserve: 'Observe',
    boxStencil: 'BOX · DO NOT OPEN',
    alive: 'alive',
    dead: 'dead',
    boxHint: '[ click to observe ]',
    particle: '(a) particle',
    geiger: '(b) geiger',
    hammer: '(c) hammer',
    poison: '(d) poison',
    catLabel: '(e) cat',
    observeBtn: 'observe()',
    before: '(a) before',
    now: '(b) now',
    agentPrompt: 'agent("add 2 and 2")',
    agentLines: ['4', '4! Want me to add tests?', '2 + 2 = 4. I also refactored the auth module.', 'Depends on the context… base 10?',
      'Done. I deleted node_modules to start fresh.', '4. I opened a PR with 37 files changed.', "You're absolutely right! It's 5.", 'I created sum.ts, sum.test.ts, and SUM_ARCHITECTURE.md'],
    timeAxis: 'time →',
    tokenLines: ['Let me first explore the codebase…', 'Reading 42 files to understand the context…', 'Let me summarize what I have done so far…',
      'Re-reading the skill just in case…', 'Checking that the check worked…', 'Running the tests again, just in case…',
      'Great question! Let me think step by step…', 'Re-reading the plan I wrote 2 minutes ago…'],
    result: 'Result',
    optional: 'opt.',
    asideKicker: 'aside',
    nondeterministic: 'non-deterministic',
    artifact: 'artifact',
    correction: 'correction',
    attempt: 'attempt',
    preparing: 'preparing inputs',
    agentWorking: 'the agent is working…',
    outputReady: 'output ready',
    ticketDone: 'ticket complete',
    nextStage: 'next stage',
    prose: 'prose',
    code: 'code',
    mapWrite: '← I write the code',
    mapDelegate: 'hand it to the agent →',
    mapEng: '↑ engineering',
    mapVibes: '↓ vibes',
    mapBefore: 'before · I wrote it all',
    mapDest: 'new destination',
    mapFinal: 'the work around the agent',
    mapMe: 'me, today',
    lights: 'Lights',
    trendInterest: 'interest',
    months: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
    trendTicks: ['oct 25', 'jan 26', 'apr', 'jul', 'oct 26'],
  },
};

export const htmlLang = lang === 'en' ? 'en' : 'es-AR';
export const numberLocale = lang === 'en' ? 'en-US' : 'es-AR';

export function t(key) {
  return copy[lang][key];
}
