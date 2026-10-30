import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown';
import Notes from 'reveal.js/plugin/notes';
import 'reveal.js/reveal.css';
import './styles.css';
import { CATS } from './cats.js';
import { mountComponent } from './components.js';
import { applyLang, htmlLang, lang, t } from './i18n.js';
import intro from './slides/00-intro.md?raw';
import acto1 from './slides/01-acto-1.md?raw';
import acto2 from './slides/02-acto-2.md?raw';
import acto3 from './slides/03-acto-3.md?raw';
import cierre from './slides/04-cierre.md?raw';
import introEn from './slides/en/00-intro.md?raw';
import acto1En from './slides/en/01-acto-1.md?raw';
import acto2En from './slides/en/02-acto-2.md?raw';
import acto3En from './slides/en/03-acto-3.md?raw';
import cierreEn from './slides/en/04-cierre.md?raw';

document.documentElement.lang = htmlLang;
document.title = t('deckTitle');

const NS = 'http://www.w3.org/2000/svg';
const DECO = {
  'orbit': `<g class="spin" style="transform-origin:1620px 300px"><circle cx="1620" cy="300" r="520"/><circle class="dot" cx="1100" cy="300" r="6"/></g>
    <ellipse cx="1620" cy="300" rx="760" ry="250" class="dash"/><circle cx="1620" cy="300" r="4" class="dot"/><line x1="1620" y1="0" x2="1620" y2="1080" class="dash"/>`,
  'orbit-small': `<g class="spin" style="transform-origin:1760px 170px"><circle cx="1760" cy="170" r="210"/><circle class="dot" cx="1760" cy="-40" r="5"/></g><circle cx="1760" cy="170" r="120" class="dash"/>`,
  'rings': `<circle cx="1880" cy="1080" r="200"/><circle cx="1880" cy="1080" r="320"/><circle cx="1880" cy="1080" r="440" class="dash"/><line x1="1300" y1="1080" x2="1920" y2="460"/>`,
  'rings-big': `<g class="spin rev" style="transform-origin:1500px 540px"><circle cx="1500" cy="540" r="380"/><circle class="dot" cx="1880" cy="540" r="6"/></g>
    <circle cx="1500" cy="540" r="260" class="dash"/><circle cx="1500" cy="540" r="520"/><circle cx="1500" cy="540" r="4" class="dot"/>
    <line x1="1500" y1="0" x2="1500" y2="1080"/><line x1="900" y1="540" x2="1920" y2="540"/>`,
  'grid': (() => { let s = ''; for (let x = 0; x < 6; x++) for (let y = 0; y < 6; y++) s += `<circle class="gdot" cx="${1580 + x * 44}" cy="${150 + y * 44}" r="2.5"/>`; return s + `<line x1="1540" y1="128" x2="1840" y2="128"/>`; })(),
  'diag': `<line x1="1180" y1="1080" x2="1920" y2="240"/><circle cx="1660" cy="535" r="46"/><circle cx="1660" cy="535" r="4" class="dot"/>`,
  'wave': (() => { let d = 'M 0 960'; for (let x = 0; x <= 1920; x += 8) { const t = x / 1920; d += ` L ${x} ${960 - Math.sin(t * Math.PI * 9) * 70 * Math.exp(-t * 2.2)}`; } return `<path d="${d}"/><line x1="0" y1="960" x2="1920" y2="960" class="dash"/>`; })(),
  'axis': (() => { let s = `<line x1="1500" y1="140" x2="1500" y2="420"/><line x1="1500" y1="420" x2="1820" y2="420"/>`; for (let i = 1; i <= 6; i++) s += `<line x1="${1500 + i * 50}" y1="420" x2="${1500 + i * 50}" y2="410"/><line x1="1500" y1="${420 - i * 44}" x2="1510" y2="${420 - i * 44}"/>`; let d = 'M 1500 400'; for (let x = 0; x <= 300; x += 10) d += ` L ${1500 + x} ${400 - Math.pow(x / 300, 2.4) * 250}`; return s + `<path d="${d}" class="dash"/>`; })(),
};

const decks = {
  es: [intro, acto1, acto2, acto3, cierre],
  en: [introEn, acto1En, acto2En, acto3En, cierreEn],
};
decks[lang].forEach((src, i) => {
  document.getElementById('md-' + i).textContent = src;
});

const lives = new Map();
let current = null;

function livesOf(slide) {
  return lives.get(slide) || [];
}

function sync(slide) {
  if (!slide) return;
  const step = slide.querySelectorAll('.fragment.visible').length;
  slide.dataset.step = String(step);
  livesOf(slide).forEach(l => l.update && l.update(step));
}

function activate(slide) {
  if (!slide || slide === current) return;
  if (current) livesOf(current).forEach(l => l.leave && l.leave());
  current = slide;
  livesOf(slide).forEach(l => l.enter && l.enter());
  sync(slide);
  document.querySelector('.reveal').classList.toggle('inv-on', slide.classList.contains('inv'));
}

function mountAll() {
  document.querySelectorAll('[data-comp]').forEach(el => {
    const slide = el.closest('section');
    const life = mountComponent(el);
    if (!life || !slide) return;
    if (!lives.has(slide)) lives.set(slide, []);
    lives.get(slide).push(life);
  });
}

function injectChrome(deck) {
  const slides = deck.getSlides();
  const roman = ['0', 'I', 'II', 'III', 'IV', 'V'];
  let act = 0, inAct = 0;
  const total = String(slides.length).padStart(2, '0');
  slides.forEach((s, i) => {
    if (s.classList.contains('section')) { act++; inAct = 0; } else inAct++;
    const sec = s.dataset.sec || (i === 0 ? '' : act === 0 ? '§ 0' : `§ ${roman[act]}${inAct ? '.' + inAct : ''}`);
    if (DECO[s.dataset.deco]) {
      const svg = document.createElementNS(NS, 'svg');
      svg.setAttribute('class', 'deco');
      svg.setAttribute('viewBox', '0 0 1920 1080');
      svg.innerHTML = DECO[s.dataset.deco];
      s.prepend(svg);
    }
    const tl = i === 0 ? '' : (sec ? sec + ' — ' : '') + (s.dataset.title || '');
    const c = document.createElement('div');
    c.className = 'chrome';
    c.innerHTML = `<div class="reg r1"></div><div class="reg r2"></div><div class="reg r3"></div><div class="reg r4"></div>
      <div class="tl">${tl}</div><div class="tr">AI4DEVS · OCT 2026</div>
      <div class="bl">${t('deckTitle')}</div><div class="br">${String(i + 1).padStart(2, '0')} / ${total}</div>`;
    s.appendChild(c);
  });
}

function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._h);
  t._h = setTimeout(() => t.classList.remove('show'), 1600);
}

const deck = new Reveal({
  hash: true,
  width: 1920,
  height: 1080,
  margin: 0,
  center: false,
  progress: true,
  controls: false,
  slideNumber: false,
  help: false,
  transition: 'none',
  backgroundTransition: 'slide',
  plugins: [Markdown, Notes],
});

await deck.initialize();
mountAll();
injectChrome(deck);
activate(deck.getCurrentSlide());
document.documentElement.classList.add('is-ready');

deck.on('slidechanged', e => activate(e.currentSlide));
deck.on('fragmentshown', e => sync(e.fragment.closest('section')));
deck.on('fragmenthidden', e => sync(e.fragment.closest('section')));
deck.addKeyBinding({ keyCode: 67, key: 'C', description: t('catKey') }, () => {
  toast(t('catToast') + ': ' + CATS.cycle());
});

const langSwitch = document.getElementById('lang');
langSwitch.setAttribute('aria-label', t('langLabel'));
langSwitch.querySelectorAll('button').forEach(btn => {
  const on = btn.dataset.lang === lang;
  btn.setAttribute('aria-pressed', String(on));
  btn.addEventListener('click', () => {
    if (btn.dataset.lang !== lang) applyLang(btn.dataset.lang);
  });
});
