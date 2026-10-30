// Figuras que se montan desde `<div data-comp="nombre">`.
// Las que llevan lista leen los `<li>`: `<b>` + `<span>`, o `data-name` / `data-url` / `data-thumb` / `data-title`.
// mount(root, slide) puede devolver { enter, leave, update(step) }.
import { CATS } from './cats.js';
import trendCsv from './time_series_Worldwide_20251022-1450_20261022-1450.csv?raw';
import { numberLocale, t } from './i18n.js';

const ARROW = '<svg viewBox="0 0 60 20"><use href="#arrow"/></svg>';
const ket = (s) => `|${s}⟩`;
const fc = (it) => (it.frag ? ' fragment' : '') + (it.cls.length ? ' ' + it.cls.join(' ') : '');

function readItems(el) {
  return [...el.querySelectorAll(':scope > ul > li')].map(li => {
    const b = li.querySelector(':scope > b');
    const span = li.querySelector(':scope > span');
    const small = li.querySelector(':scope > small');
    return {
      frag: li.classList.contains('fragment'),
      cls: [...li.classList].filter(c => c !== 'fragment'),
      title: li.dataset.title || (b ? b.innerHTML : ''),
      name: li.dataset.name || (b ? b.innerHTML : ''),
      url: li.dataset.url || '',
      thumb: li.dataset.thumb || '',
      pos: li.dataset.pos || '',
      layer: li.parentElement?.dataset.layer || '',
      note: small ? small.innerHTML : '',
      text: span ? span.innerHTML : (b ? '' : li.innerHTML.trim()),
      html: b ? (span ? span.innerHTML : '') : li.innerHTML.trim(),
    };
  });
}

const C = {};

  /* ---------- caja del título ---------- */
  C['title-box'] = () => ({
    html: `<div class="c-titlebox">
      <div class="box-wrap" title="${t('titleObserve')}">
        <svg viewBox="0 0 620 560">
          <g class="popcat"><g class="hostcat" transform="translate(160 120) scale(1.5)"></g></g>
          <rect class="ln" x="110" y="270" width="400" height="260"/>
          <line class="hl" x1="110" y1="318" x2="510" y2="318"/>
          <text x="310" y="300" text-anchor="middle" class="stencil">${t('boxStencil')}</text>
          <text x="310" y="462" text-anchor="middle" class="psi">ψ</text>
          <g class="lid"><rect class="ln" x="96" y="242" width="428" height="30"/></g>
        </svg>
      </div>
      <div class="box-state eq">${ket('ψ')} = ${ket(t('alive'))} + ${ket(t('dead'))}</div>
      <div class="box-hint">${t('boxHint')}</div>
    </div>`,
    mount(root) {
      const box = root.querySelector('.box-wrap'), cat = root.querySelector('.hostcat'), st = root.querySelector('.box-state');
      const sup = st.innerHTML;
      CATS.mount(cat);
      box.addEventListener('click', () => {
        if (box.classList.contains('open')) {
          box.classList.remove('open'); st.innerHTML = sup;
          setTimeout(() => CATS.reset(cat), 400);
        } else {
          const alive = CATS.collapse(cat);
          box.classList.add('open');
          st.innerHTML = alive ? `${ket(t('alive'))} · tests passing` : `${ket(t('dead'))} · tests failing`;
        }
      });
    }
  });

  /* ---------- figura del experimento ---------- */
  C['experiment'] = (a) => ({
    html: `<div class="c-experiment fig">
      <svg viewBox="0 0 820 600">
        <rect class="ln" x="20" y="40" width="780" height="520" style="stroke-width:2.5"/>
        <circle class="emit" cx="140" cy="150" r="18"/><circle class="emit e2" cx="140" cy="150" r="18"/>
        <circle class="particle" cx="140" cy="150" r="8"/>
        <rect class="lf" x="250" y="115" width="150" height="72"/>
        <path class="ln" d="M 264 151 h 22 l 8 -20 l 12 40 l 8 -20 h 74" style="stroke-width:1.5"/>
        <line class="leader" x1="150" y1="150" x2="248" y2="151" style="stroke-dasharray:4 6"/>
        <line class="ln" x1="400" y1="151" x2="545" y2="300" style="stroke-width:3"/>
        <rect class="lf" x="520" y="285" width="56" height="30" transform="rotate(45 548 300)"/>
        <path class="hatch" d="M 590 350 v 40 l -34 76 q -6 18 12 18 h 88 q 18 0 12 -18 l -34 -76 v -40 z" style="color:var(--mid)"/>
        <g class="hostcat" transform="translate(110 300) scale(1.25)"></g>
        <polyline class="leader" points="140,166 140,214"/><text x="80" y="240">${t('particle')}</text>
        <polyline class="leader" points="325,115 325,78 355,78"/><text x="361" y="84">${t('geiger')}</text>
        <polyline class="leader" points="470,226 640,226"/><text x="646" y="232">${t('hammer')}</text>
        <polyline class="leader" points="680,440 740,440 740,520"/><text x="604" y="545">${t('poison')}</text>
        <polyline class="leader" points="300,440 360,440"/><text x="366" y="446">${t('catLabel')}</text>
      </svg>
      <div class="caption">${a.caption || ''}</div>
    </div>`,
    mount(root) { CATS.mount(root.querySelector('.hostcat')); }
  });

  /* ---------- gato observable ---------- */
  C['observe'] = () => ({
    html: `<div class="c-observe">
      <svg viewBox="0 0 200 200" style="width:520px;height:520px" class="hostcat"></svg>
      <div class="eq" style="font-size:44px;margin-top:-10px">${ket('ψ')} = 1/√2 (${ket(t('alive'))} + ${ket(t('dead'))})</div>
      <div class="row"><button class="btn">${t('observeBtn')}</button><span class="eq out" style="font-size:44px">${ket('ψ')}</span></div>
    </div>`,
    mount(root) {
      const cat = root.querySelector('.hostcat'), out = root.querySelector('.out');
      CATS.mount(cat);
      root.querySelector('.btn').addEventListener('click', () => { out.textContent = '→ ' + (CATS.collapse(cat) ? ket(t('alive')) : ket(t('dead'))); });
    }
  });

  /* ---------- sum() vs agent() ---------- */
  C['det-demo'] = () => ({
    html: `<div class="c-det">
      <div class="demo"><div class="tag">${t('before')}</div><div class="sig"><span>sum(2, 2)</span><button class="btn">run</button></div><div class="out"></div></div>
      <div class="demo fragment" style="border-style:dashed"><div class="tag">${t('now')}</div><div class="sig"><span>${t('agentPrompt')}</span><button class="btn">run</button></div><div class="out"></div></div>
    </div>`,
    mount(root) {
      const AGENT = t('agentLines');
      const [d, n] = root.querySelectorAll('.demo');
      const push = (o, t) => { const e = document.createElement('div'); e.textContent = t; o.appendChild(e); while (o.children.length > 5) o.firstChild.remove(); };
      let last = -1;
      d.querySelector('.btn').addEventListener('click', () => push(d.querySelector('.out'), '4'));
      n.querySelector('.btn').addEventListener('click', () => {
        let i; do { i = Math.floor(Math.random() * AGENT.length); } while (i === last); last = i;
        push(n.querySelector('.out'), AGENT[i]);
      });
    }
  });

  /* ---------- tokens ---------- */
  C['tokens'] = (a) => {
    const PX0 = 80, PX1 = 840, PY0 = 500, PY1 = 20, LMIN = 3, LMAX = 7;
    let grid = '';
    for (let e = LMIN; e <= LMAX; e++) {
      const y = PY0 - (e - LMIN) / (LMAX - LMIN) * (PY0 - PY1);
      grid += `<line class="grid" x1="${PX0}" x2="${PX1}" y1="${y}" y2="${y}"/><text x="${PX0 - 14}" y="${y + 6}" text-anchor="end">10${'⁰¹²³⁴⁵⁶⁷'[e]}</text>`;
    }
    return {
      html: `<div class="c-tokens">
        <div><div class="tokens"><span class="n">0</span><small>tok</small></div><div class="chatter"></div></div>
        <div class="plot"><svg viewBox="0 0 860 540">${grid}<path class="axis" d="M 80 20 V 500 H 840"/><path class="curve" d=""/>
          <circle class="head" r="7" cx="80" cy="500"/><text x="840" y="536" text-anchor="end">${t('timeAxis')}</text><text x="0" y="8">tokens</text></svg>
          <div class="caption">${a.caption || ''}</div></div>
      </div>`,
      mount(root) {
        const el = root.querySelector('.n'), ch = root.querySelector('.chatter'), curve = root.querySelector('.curve'), head = root.querySelector('.head');
        const lines = t('tokenLines');
        let ta, tc;
        return {
          enter() {
            let n = 1000, k = 0; const pts = []; ch.innerHTML = '';
            ta = setInterval(() => {
              n = Math.min(n * (1.03 + Math.random() * .03), 9.5e6); pts.push(n);
              el.textContent = Math.round(n).toLocaleString(numberLocale);
              const N = Math.max(pts.length, 220);
              const xy = pts.map((v, i) => [PX0 + i / (N - 1) * (PX1 - PX0), PY0 - (Math.log10(v) - LMIN) / (LMAX - LMIN) * (PY0 - PY1)]);
              curve.setAttribute('d', 'M ' + xy.map(p => p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' L '));
              const l = xy[xy.length - 1]; head.setAttribute('cx', l[0]); head.setAttribute('cy', l[1]);
            }, 70);
            tc = setInterval(() => { const d = document.createElement('div'); d.textContent = '› ' + lines[k++ % lines.length]; ch.prepend(d); while (ch.children.length > 7) ch.lastChild.remove(); }, 900);
          },
          leave() { clearInterval(ta); clearInterval(tc); }
        };
      }
    };
  };

  /* ---------- cadena de nodos ---------- */
  C['chain'] = (a, items) => {
    const chain = `<div class="chain">${items.map((it, i) => `${i ? `<div class="arrow${it.frag ? ' fragment' : ''}">${ARROW}</div>` : ''}
      <div class="node${fc(it)}"><div class="idx">${String(i + 1).padStart(2, '0')}</div><div class="t">${it.title}</div><p>${it.text}</p></div>`).join('')}</div>`

    const results = `<div class="caption">${a.caption ? `<p class=" fragment">${t('result')}: ${a.caption}</p>` : ''}</div>`;
    return {
      html: `${chain}${results}`
    };
  };

  /* ---------- línea de tiempo ---------- */
  C['timeline'] = (a) => {
    const marks = (a.marks || '').split(',').map(s => s.trim()).filter(Boolean);
    const n = Math.max(marks.length - 1, 1);
    return {
      html: `<div class="c-timeline"><div class="bar"></div>
        <div class="span" style="left:0;right:0"></div>
        ${marks.map((m, i) => `<div class="tick" style="left:${i / n * 100}%"><span>${m}</span></div>`).join('')}</div>`
    };
  };

  /* ---------- archivos ---------- */
  C['files'] = (a, items) => ({
    html: `<div class="files">${items.map((it, i) => `${i ? `<div class="arrow${it.frag ? ' fragment' : ''}">${ARROW}</div>` : ''}
      <div class="file${fc(it)}"><div class="name">${it.title}</div><div class="meta">${it.text}</div></div>`).join('')}</div>`
  });

  /* ---------- screenshot ---------- */
  C['shot'] = (a) => ({
    html: `<div class="c-shot"><img class="shot" src="${a.src}" alt="${a.alt || ''}">${a.stamp ? `<div class="stamp">${a.stamp}</div>` : ''}<div class="caption">${a.caption || ''}</div></div>`
  });

  /* ---------- lámina de factory-skills ---------- */
  C['anatomy'] = (a, items) => {
    const of = (layer) => items.filter(it => it.layer === layer);
    const stages = of('stages');
    const cols = (row) => stages.map(it => row(it)).join('');
    return {
      html: `<div class="anatomy">
        <div class="anatomy-row fragment" data-fragment-index="0">
          <div class="anatomy-kicker">stack</div>
          <div class="anatomy-stack">${of('stack').map(it => `<span>${it.text || it.title}</span>`).join('')}</div>
        </div>
        <div class="anatomy-row fragment" data-fragment-index="1">
          <div class="anatomy-kicker">src/stages</div>
          <div>
            <div class="anatomy-cols">${cols(it => `<div class="anatomy-stage">${it.title}${it.cls.includes('opt') ? `<i>${t('optional')}</i>` : ''}${it === stages.at(-1) ? '' : `<span class="arr">${ARROW}</span>`}</div>`)}</div>
            <div class="anatomy-mach">${a.machinery || ''}</div>
          </div>
        </div>
        <div class="anatomy-row fragment" data-fragment-index="2">
          <div class="anatomy-kicker">skills/</div>
          <div class="anatomy-cols">${cols(it => `<div class="anatomy-skill"><b>${it.text}</b><span>${it.note}</span></div>`)}</div>
        </div>
        <div class="anatomy-row fragment" data-fragment-index="3">
          <div class="anatomy-kicker">${t('asideKicker')}</div>
          <div class="anatomy-aside">${of('aside').map(it => `<div><b>${it.title}</b><span>${it.text}</span></div>`).join('')}</div>
        </div>
      </div>`
    };
  };

  /* ---------- stages + supervisor ---------- */
  C['stages'] = (a, items) => ({
    html: `<div class="stages">${items.map(it => `<div class="stage-chip${fc(it)}"><b>${it.title}</b><span>${it.text}</span></div>`).join('')}</div>`
  });
  C['supervisor'] = (a) => ({
    html: `<div class="c-supervisor"><div class="supervisor">${a.name || 'supervisor.md'}<small>${a.sub || ''}</small></div></div>`
  });

  /* ---------- loop del controller ---------- */
  C['loop'] = (a) => {
    const stages = (a.stages || 'spec,plan,implement,review,ship').split(',').map(s => s.trim());
    const nodes = [['prepare', 'inputs'], ['Agent(skill)', t('nondeterministic'), 'agent'], ['output', t('artifact')], ['validate', 'hooks · tests · lint'], ['next stage', '✓']];
    return {
      html: `<div class="stagebar"></div><div class="loop">
        ${nodes.map((n, i) => `${i ? `<div class="arr" style="left:${i * 330 - 70}px">${ARROW}</div>` : ''}<div class="node ${n[2] || ''}" style="left:${i * 330}px">${n[0]}<small>${n[1]}</small></div>`).join('')}
        <div class="corr"><span>${t('correction')}</span></div></div><div class="loop-log"></div>`,
      mount(root) {
        const ns = [...root.querySelectorAll('.loop .node')], corr = root.querySelector('.corr'), log = root.querySelector('.loop-log'), bar = root.querySelector('.stagebar');
        const reasons = ['lint ✕', 'tests ✕', 'schema ✕', 'typecheck ✕', 'review: changes requested'];
        const steps = [t('preparing'), t('agentWorking'), t('outputReady')];
        let timer;
        return {
          enter() {
            let si = 0, attempt = 1, ticket = 42 + Math.floor(Math.random() * 50);
            const drawBar = () => bar.innerHTML = stages.map((s, i) => `<div class="${i < si ? 'done' : i === si ? 'cur' : ''}">${s}</div>`).join('');
            const clear = () => { ns.forEach(n => n.classList.remove('on', 'fail')); corr.classList.remove('on'); };
            const setLog = (m) => log.innerHTML = `ticket <b>#${ticket}</b> · stage <b>${stages[si] ?? 'done'}</b> · ${t('attempt')} ${attempt} · ${m}`;
            const run = (from) => {
              let step = from;
              const tick = () => {
                clear();
                if (step <= 2) { ns[step].classList.add('on'); setLog(steps[step]); step++; timer = setTimeout(tick, 900); return; }
                if (step === 3) {
                  if (Math.random() > .4 || attempt >= 3) { ns[3].classList.add('on'); setLog('validate ✓'); step = 4; timer = setTimeout(tick, 800); }
                  else { ns[3].classList.add('fail'); corr.classList.add('on'); setLog(`validate → ${reasons[Math.floor(Math.random() * reasons.length)]} → ${t('correction')}`); attempt++; step = 1; timer = setTimeout(tick, 1400); }
                  return;
                }
                ns[4].classList.add('on'); si++; attempt = 1; drawBar();
                if (si >= stages.length) { setLog(t('ticketDone')); timer = setTimeout(() => { si = 0; ticket++; drawBar(); run(0); }, 2200); }
                else { setLog(t('nextStage')); timer = setTimeout(() => run(0), 900); }
              };
              tick();
            };
            drawBar(); run(0);
          },
          leave() { clearTimeout(timer); }
        };
      }
    };
  };

  /* ---------- API ---------- */
  C['api'] = (a, items) => {
    const [l, r] = items;
    return {
      html: `<div class="api${l && l.frag ? ' fragment' : ''}">
        <div class="client l"><div class="t">${l ? l.title : ''}</div><p>${l ? l.text : ''}</p></div><div class="wire l"></div>
        <div class="hub"><div>${a.hub || 'API'}<small>${a.sub || ''}</small></div></div>
        <div class="wire r"></div><div class="client r"><div class="t">${r ? r.title : ''}</div><p>${r ? r.text : ''}</p></div></div>`
    };
  };

  /* ---------- cloud ---------- */
  C['cloud'] = (a) => {
    const n = +a.n || 40;
    return {
      html: `<div class="cloud-grid">${Array.from({ length: n }, (_, i) => `<div>agent-${String(i + 1).padStart(2, '0')}</div>`).join('')}</div><div class="caption">${a.caption || ''}</div>`,
      mount(root) {
        const cells = [...root.querySelectorAll('.cloud-grid div')]; let iv;
        return {
          enter() { iv = setInterval(() => { const c = cells[Math.floor(Math.random() * cells.length)], r = Math.random(); c.classList.remove('busy', 'err'); if (r < .72) c.classList.add('busy'); else if (r < .8) c.classList.add('err'); }, 120); },
          leave() { clearInterval(iv); }
        };
      }
    };
  };

  /* ---------- prosa vs código ---------- */
  C['ratio'] = (a, items) => ({
    html: `<div class="ratio"><div class="prose"><span>${t('prose')} 100%</span></div><div class="code"></div></div>
      <div class="ratio-axis"><span>0</span><span>25</span><span>50</span><span>75</span><span>100</span></div>
      <div class="steps">${items.map(it => `<div class="s${fc(it)}">${it.html}</div>`).join('')}</div>`,
    mount(root) {
      const p = root.querySelector('.prose'), c = root.querySelector('.code'), fr = [...root.querySelectorAll('.steps .fragment')];
      const min = +(a.min || 22); // la prosa nunca llega a 0: el agente sigue en la caja
      return {
        update() {
          const on = fr.filter(f => f.classList.contains('visible')).length;
          const prose = Math.round(100 - (fr.length ? on / fr.length : 0) * (100 - min));
          p.style.flexBasis = prose + '%'; p.innerHTML = `<span>${t('prose')} ${prose}%</span>`;
          c.textContent = prose < 100 ? `${t('code')} ${100 - prose}%` : '';
        }
      };
    }
  });

  /* ---------- mapa: posicionarse en un paisaje que se mueve ---------- */
  C['map'] = (a) => {
    const arrived = a.state === 'arrived';
    const W = 800, H = 640;
    let ticks = '';
    for (let i = 1; i < 10; i++) { const x = 20 + i * 76; ticks += `<line class="tick" x1="${x}" y1="20" x2="${x}" y2="30"/><line class="tick" x1="${x}" y1="${H - 20}" x2="${x}" y2="${H - 30}"/>`; }
    for (let j = 1; j < 8; j++) { const y = 20 + j * 75; ticks += `<line class="tick" x1="20" y1="${y}" x2="30" y2="${y}"/><line class="tick" x1="${W - 20}" y1="${y}" x2="${W - 30}" y2="${y}"/>`; }
    const ME = [575, 250], DEST = [660, 120];
    const route = `M ${ME[0]} ${ME[1]} C 520 200, 610 170, ${DEST[0]} ${DEST[1]}`;
    return {
      html: `<div class="c-map"><svg viewBox="0 0 ${W} ${H}">
        <rect class="frame" x="20" y="20" width="${W - 40}" height="${H - 40}"/>${ticks}
        <g class="contours"></g>
        <line class="axisl" x1="400" y1="30" x2="400" y2="${H - 30}"/><line class="axisl" x1="30" y1="320" x2="${W - 30}" y2="320"/>
        <text x="40" y="312">${t('mapWrite')}</text><text x="${W - 40}" y="312" text-anchor="end">${t('mapDelegate')}</text>
        <text x="410" y="52">${t('mapEng')}</text><text x="410" y="${H - 38}">${t('mapVibes')}</text>
        <rect class="pt" x="174" y="154" width="16" height="16"/><text class="lbl" x="200" y="168">${t('mapBefore')}</text>
        <circle class="pto" cx="640" cy="520" r="9"/><text class="lbl" x="560" y="556">vibecoding</text>
        <text class="ital terra" x="${DEST[0] - 10}" y="${DEST[1] - 50}" text-anchor="middle" style="${arrived ? 'opacity:0' : ''}">terra incognita</text>
        ${arrived ? `<path class="route" d="${route}"/>
          <g transform="translate(${DEST[0]} ${DEST[1]})"><circle class="dest" r="16"/><circle class="dest" r="6"/><line class="dest" x1="-26" x2="26"/><line class="dest" y1="-26" y2="26"/></g>
          <text class="lbl" x="${DEST[0] - 30}" y="${DEST[1] - 34}" text-anchor="end">${t('mapDest')}</text>
          <text class="ital final" x="${DEST[0] + 4}" y="${DEST[1] + 58}" text-anchor="middle">${t('mapFinal')}</text>` : ''}
        <g class="me" transform="translate(${ME[0]} ${ME[1]})">
          <circle class="ring" r="16"/><circle class="pt" r="9"/>
          ${arrived ? '' : '<text class="qm" x="18" y="-14">?</text>'}
          <text class="lbl" x="-22" y="7" text-anchor="end">${t('mapMe')}</text>
        </g>
      </svg><div class="caption">${a.caption || ''}</div></div>`,
      mount(root, slide) {
        const g = root.querySelector('.contours'), me = root.querySelector('.me'), svg = root.querySelector('svg');
        const rp = arrived ? root.querySelector('.route') : null;
        const centers = [[250, 440, [70, 115, 160, 205], 0], [610, 230, [55, 100, 145], 2.1], [150, 150, [40, 80], 4.2]];
        const paths = [];
        centers.forEach(([, , rs]) => rs.forEach((_, i) => { const p = document.createElementNS('http://www.w3.org/2000/svg', 'path'); p.setAttribute('class', 'contour' + (i === 0 ? ' k' : '')); g.appendChild(p); paths.push(p); }));
        let raf, prog = 0, target = 0;
        const draw = (t) => {
          let k = 0;
          centers.forEach(([cx, cy, rs, ph]) => rs.forEach((R, i) => {
            let d = '';
            for (let s = 0; s <= 72; s++) {
              const th = s / 72 * Math.PI * 2;
              const r = R * (1 + .13 * Math.sin(3 * th + t * .00035 + ph + i * .4) + .07 * Math.sin(5 * th - t * .00022 + ph * 2));
              d += (s ? ' L ' : 'M ') + (cx + r * Math.cos(th)).toFixed(1) + ' ' + (cy + r * Math.sin(th) * .82).toFixed(1);
            }
            paths[k++].setAttribute('d', d + ' Z');
          }));
          if (rp) {
            prog += (target - prog) * .06;
            const L = rp.getTotalLength(), pt = rp.getPointAtLength(L * prog);
            me.setAttribute('transform', `translate(${pt.x} ${pt.y})`);
            root.querySelector('.c-map').classList.toggle('arrived-done', prog > .97);
          } else {
            // el piso se mueve: el "yo" deriva un poco
            me.setAttribute('transform', `translate(${ME[0] + Math.sin(t * .0007) * 14} ${ME[1] + Math.cos(t * .0005) * 10})`);
          }
          raf = requestAnimationFrame(draw);
        };
        draw(0); cancelAnimationFrame(raf);
        return {
          enter() { raf = requestAnimationFrame(draw); },
          leave() { cancelAnimationFrame(raf); },
          update() {
            if (!rp) return;
            const fr = [...slide.querySelectorAll('.fragment')];
            target = fr.length ? fr.filter(f => f.classList.contains('visible')).length / fr.length : 1;
          }
        };
      }
    };
  };

  /* ---------- videos ---------- */
  const PLAY = `<svg viewBox="0 0 68 68" aria-hidden="true"><circle cx="34" cy="34" r="32"/><path d="M28 22 L48 34 L28 46 Z"/></svg>`;
  C['videos'] = (a, items) => ({
    html: `<div class="videos">${items.map(it => {
      const url = it.url.trim();
      return `<a class="video${fc(it)}" href="${url}" target="_blank" rel="noopener"><span class="frame"><img src="${it.thumb}" alt=""${it.pos ? ` style="object-position:center ${it.pos}"` : ''}><span class="play">${PLAY}</span></span><span class="t">${it.text}</span></a>`;
    }).join('')}</div>`
  });

  /* ---------- repos ---------- */
  C['repos'] = (a, items) => ({
    html: `<div class="repos">${items.map(it => {
      const url = it.url.trim();
      return `<a class="repo${fc(it)}" href="${url}" target="_blank" rel="noopener"><div class="name">${it.name}</div><div class="url">${url.replace(/^https?:\/\//, '')}</div><p>${it.text}</p></a>`;
    }).join('')}</div>`
  });

  /* ---------- conclusiones ---------- */
  C['take'] = (a, items) => {
    const start = +(a.start || 1);
    return { html: `<div class="take">${items.map((it, i) => `<div class="${fc(it).trim()}"><div class="n">OBS. ${String(start + i).padStart(2, '0')}</div><b>${it.title}</b><p>${it.text}</p></div>`).join('')}</div>` };
  };

  /* ---------- llave de luz (dark factory) ---------- */
  C['light-switch'] = () => ({
    html: `<button type="button" aria-pressed="true" aria-label="${t('lights')}">
      <svg class="on" viewBox="48 58 60 96" aria-hidden="true"><path fill-rule="evenodd" d="M91.597 148.515L53.048 147.726C53.048 147.726 52.612 75.7392 52.615 72.7712C52.619 67.0482 54.185 62.5142 59.593 62.5142C68.136 62.5142 82.765 63.3042 91.597 63.3042C96.845 63.3042 98.484 66.0482 98.575 71.1942C98.789 83.2382 98.575 104.332 98.575 104.332C98.575 104.332 101.915 126.321 103.226 131.947C104.546 137.609 102.316 138.254 100.125 140.626C96.198 144.875 91.597 148.515 91.597 148.515ZM91.597 105.91L92.372 70.6172L59.81 69.8272L60.026 107.487L63.902 133.524L96.25 134.314L91.597 105.91ZM77.309 109.882C91.142 109.882 93.574 129.503 80.064 129.503C65.272 129.503 63.424 109.882 77.309 109.882ZM79.146 123.965C85.026 123.965 83.968 115.425 77.947 115.425C71.902 115.425 72.707 123.965 79.146 123.965ZM72.632 94.0552L72.373 77.0452L80.139 77.2162L79.9 94.2892L72.632 94.0552Z"/></svg>
      <svg class="off" viewBox="48 58 60 96" aria-hidden="true"><path fill-rule="evenodd" d="M103.226 79.0832C101.914 84.7082 98.575 108.956 98.575 108.956C98.575 108.956 98.788 127.791 98.575 139.835C98.483 144.981 96.846 147.725 91.597 147.725C82.764 147.725 68.137 148.515 59.593 148.515C54.185 148.515 52.619 143.981 52.616 138.258C52.614 135.291 53.048 63.3042 53.048 63.3042L91.597 62.5142C91.597 62.5142 96.199 66.1542 100.125 70.4042C102.315 72.7762 104.546 73.4222 103.226 79.0832ZM77.738 138.144C91.908 138.144 91.819 116.647 77.98 116.647C62.828 116.647 63.514 138.144 77.738 138.144ZM84.435 85.6212L77.419 85.1052L75.009 100.595H81.508L84.435 85.6212ZM89.304 68.3062L59 69.2872L58.804 107.733L60.164 107.877L62.876 76.9372L97.503 76.3062L89.304 68.3062ZM77.796 121.877C84.899 121.877 84.944 132.909 77.671 132.909C70.372 132.909 70.02 121.877 77.796 121.877Z"/></svg>
    </button>`,
    mount(root) {
      const slide = root.closest('section');
      const aside = root.closest('.aside');
      const btn = root.querySelector('button');
      const apply = (on) => {
        slide.classList.toggle('lights-out', !on);
        aside.classList.toggle('factory-dark', on);
        root.classList.toggle('is-off', !on);
        btn.setAttribute('aria-pressed', String(on));
      };
      apply(true);
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        apply(root.classList.contains('is-off'));
      });
      return {
        enter() { apply(true); },
        leave() { apply(true); }
      };
    }
  });

  /* ---------- interés en el tiempo ---------- */
  C['trend'] = (a) => {
    const W = 1580, H = 460, PX0 = 78, PX1 = 1548, PY0 = 392, PY1 = 52;
    const MONTHS = t('months');
    const pts = trendCsv.trim().split(/\r?\n/).slice(1).filter(Boolean).map(line => {
      const [time, value] = line.split(',');
      return { t: Date.parse(time.replaceAll('"', '') + 'T00:00:00Z'), value: +value };
    });
    const t0 = pts[0].t, t1 = pts[pts.length - 1].t;
    const xOf = (t) => PX0 + (t - t0) / (t1 - t0) * (PX1 - PX0);
    const yOf = (v) => PY0 - (v / 100) * (PY0 - PY1);
    const d = pts.map((p, i) => `${i ? 'L' : 'M'}${xOf(p.t).toFixed(1)} ${yOf(p.value).toFixed(1)}`).join(' ');
    const peak = pts.reduce((best, p) => p.value > best.value ? p : best, pts[0]);
    const last = pts[pts.length - 1];
    const px = xOf(peak.t), py = yOf(peak.value), lx = xOf(last.t), ly = yOf(last.value);
    const grid = [0, 50, 100].map(v => {
      const y = yOf(v);
      return `<line class="grid" x1="${PX0}" x2="${PX1}" y1="${y}" y2="${y}"/><text x="${PX0 - 14}" y="${y + 6}" text-anchor="end">${v}</text>`;
    }).join('');
    const [tick0, tick1, tick2, tick3, tick4] = t('trendTicks');
    const quarters = [
      [pts[0].t, tick0, 'start'],
      [Date.parse('2026-01-01T00:00:00Z'), tick1, 'middle'],
      [Date.parse('2026-04-01T00:00:00Z'), tick2, 'middle'],
      [Date.parse('2026-07-01T00:00:00Z'), tick3, 'middle'],
      [pts[pts.length - 1].t, tick4, 'end'],
    ];
    const xticks = quarters.map(([t, label, anchor]) => {
      const x = xOf(t).toFixed(1);
      return `<line class="tick" x1="${x}" y1="${PY0}" x2="${x}" y2="${PY0 + 8}"/><text x="${x}" y="${PY0 + 32}" text-anchor="${anchor}">${label}</text>`;
    }).join('');
    return {
      html: `<div class="c-trend plot"><svg viewBox="0 0 ${W} ${H}">
        <text x="4" y="22">${t('trendInterest')}</text>${grid}
        <path class="axis" d="M ${PX0} ${PY1} V ${PY0} H ${PX1}"/>${xticks}
        <path class="curve" d="${d}" stroke-dasharray="20000" stroke-dashoffset="20000"/>
        <g class="marks">
          <circle class="head" r="7" cx="${px.toFixed(1)}" cy="${py.toFixed(1)}"/>
          <text x="${px.toFixed(1)}" y="${(py - 18).toFixed(1)}" text-anchor="middle">${MONTHS[new Date(peak.t).getUTCMonth()]} · ${peak.value}</text>
          <circle class="head" r="6" cx="${lx.toFixed(1)}" cy="${ly.toFixed(1)}"/>
          <text x="${(lx - 14).toFixed(1)}" y="${(ly - 18).toFixed(1)}" text-anchor="end">${last.value}</text>
        </g>
      </svg><div class="caption">${a.caption || ''} | ${a.source ? `<a target="_blank" href="${a.source}">${a.sourceLabel || ''}<span class="icon" aria-hidden="true">↗</span></a>` : ''}</div></div>`,
      mount(root) {
        const curve = root.querySelector('.curve'), marks = root.querySelector('.marks');
        let raf;
        return {
          enter() {
            cancelAnimationFrame(raf);
            const len = curve.getTotalLength();
            marks.classList.remove('on');
            if (!len) { curve.style.strokeDasharray = 'none'; marks.classList.add('on'); return; }
            curve.style.strokeDasharray = String(len);
            curve.style.strokeDashoffset = String(len);
            const start = performance.now(), dur = 1400;
            const step = (now) => {
              const p = Math.min(1, (now - start) / dur);
              curve.style.strokeDashoffset = String(len * Math.pow(1 - p, 3));
              if (p < 1) raf = requestAnimationFrame(step);
              else marks.classList.add('on');
            };
            raf = requestAnimationFrame(step);
          },
          leave() { cancelAnimationFrame(raf); marks.classList.remove('on'); }
        };
      }
    };
  };

  /* ---------- cierre: gato vivo con mate ---------- */
  C['closing-cat'] = () => ({
    html: `<svg viewBox="0 0 300 260" style="width:440px;height:380px;overflow:visible" class="cat">
      <g class="hostcat" transform="translate(10 40)"></g>
      <g transform="translate(190 150)" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
        <line x1="42" y1="-46" x2="24" y2="16"/>
        <path class="c-fill" d="M0 10 Q -4 76 36 78 Q 76 76 72 10 Z"/>
        <path d="M8 40 Q 36 50 64 40" stroke-width="1.2"/>
        <ellipse class="c-fill" cx="36" cy="10" rx="36" ry="8"/>
      </g>
      <line x1="-40" y1="221" x2="340" y2="221" stroke="currentColor" stroke-width="1.5"/>
    </svg>`,
    mount(root) { CATS.mount(root.querySelector('.hostcat'), 'alive'); }
  });

export function mountComponent(el) {
  const make = C[el.dataset.comp];
  if (!make) { el.innerHTML = `<code>${el.dataset.comp} ?</code>`; return null; }
  const built = make(el.dataset, readItems(el));
  el.classList.add('comp', 'comp-' + el.dataset.comp);
  el.innerHTML = built.html;
  return built.mount ? built.mount(el, el.closest('section')) || null : null;
}
