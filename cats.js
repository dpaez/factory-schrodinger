// Variantes del gato. Todas dibujan en un viewBox de 200x200 y exponen
// dos grupos: .s-alive y .s-dead (el CSS los alterna según el estado).
// `line` es el gato original de v2: no tocar, es el rollback.
export const CATS = (() => {
  const line = () => `
    <g fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M140 172 C 186 168, 190 122, 163 106"/>
      <path class="c-fill" d="M62 180 C 52 132, 72 104, 100 104 C 128 104, 148 132, 138 180 Z"/>
      <path class="c-fill" d="M72 62 L 76 30 L 95 46"/>
      <path class="c-fill" d="M128 62 L 124 30 L 105 46"/>
      <circle class="c-fill" cx="100" cy="74" r="33"/>
      <path class="c-ink" d="M96 84 L 104 84 L 100 89 Z"/>
      <path d="M70 82 L 52 79 M70 88 L 52 91 M130 82 L 148 79 M130 88 L 148 91" stroke-width="1.5"/>
    </g>
    <g class="s-alive"><ellipse class="c-ink" cx="88" cy="70" rx="4.5" ry="7"/><ellipse class="c-ink" cx="112" cy="70" rx="4.5" ry="7"/>
      <path d="M93 93 Q 100 99 107 93" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></g>
    <g class="s-dead" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none">
      <path d="M83 64 L 93 76 M93 64 L 83 76 M107 64 L 117 76 M117 64 L 107 76"/>
      <path d="M100 92 q 4 10 0 12"/></g>`;

  // Primitivas geométricas + líneas de construcción (compás y regla).
  const geo = () => `
    <g class="c-guide">
      <circle cx="100" cy="76" r="48"/>
      <line x1="40" y1="182" x2="178" y2="182"/>
      <line x1="100" y1="16" x2="100" y2="190"/>
      <line x1="44" y1="76" x2="156" y2="76"/>
      <path d="M140 182 A 26 26 0 0 0 166 156"/>
    </g>
    <g fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round">
      <path d="M140 178 A 30 30 0 0 0 170 148"/>
      <path class="c-fill" d="M60 182 A 40 72 0 0 1 140 182 Z"/>
      <path class="c-fill" d="M72 60 L 76 24 L 98 46 Z"/>
      <path class="c-fill" d="M128 60 L 124 24 L 102 46 Z"/>
      <circle class="c-fill" cx="100" cy="76" r="32"/>
      <path class="c-ink" d="M95 88 L 105 88 L 100 94 Z" stroke-width="1"/>
    </g>
    <circle class="c-ink" cx="100" cy="76" r="1.6"/>
    <g class="s-alive"><circle class="c-ink" cx="87" cy="74" r="5"/><circle class="c-ink" cx="113" cy="74" r="5"/></g>
    <g class="s-dead" stroke="currentColor" stroke-width="3" stroke-linecap="square" fill="none">
      <path d="M81 68 L 93 80 M93 68 L 81 80 M107 68 L 119 80 M119 68 L 107 80"/></g>`;

  // Tipográfico, estilo terminal.
  const ascii = () => `
    <g class="c-txt" font-size="44" text-anchor="middle">
      <text x="100" y="70"> /\\_/\\ </text>
      <text x="100" y="166"> &gt; ^ &lt; </text>
    </g>
    <g class="s-alive"><text class="c-txt" font-size="44" x="100" y="118" text-anchor="middle">( o.o )</text></g>
    <g class="s-dead"><text class="c-txt" font-size="44" x="100" y="118" text-anchor="middle">( x.x )</text></g>`;

  // Retícula de puntos: en superposición cada punto parpadea por su cuenta.
  const inTri = (px, py, a, b, c) => {
    const s = (p1, p2, p3) => (p1[0] - p3[0]) * (p2[1] - p3[1]) - (p2[0] - p3[0]) * (p1[1] - p3[1]);
    const d1 = s([px, py], a, b), d2 = s([px, py], b, c), d3 = s([px, py], c, a);
    return !((d1 < 0 || d2 < 0 || d3 < 0) && (d1 > 0 || d2 > 0 || d3 > 0));
  };
  const inside = (x, y) => {
    if ((x - 100) ** 2 + (y - 76) ** 2 < 32 ** 2) return true;
    if (inTri(x, y, [72, 60], [76, 24], [98, 46]) || inTri(x, y, [128, 60], [124, 24], [102, 46])) return true;
    if (y <= 182 && y >= 110 && ((x - 100) / 40) ** 2 + ((y - 182) / 72) ** 2 <= 1) return true;
    return false;
  };
  const dots = () => {
    let s = '<g>';
    const eye = (x, y) => (x - 87) ** 2 + (y - 74) ** 2 < 49 || (x - 113) ** 2 + (y - 74) ** 2 < 49;
    for (let y = 22; y <= 184; y += 7) for (let x = 54; x <= 146; x += 7) {
      if (!inside(x, y) || eye(x, y)) continue;
      s += `<circle class="c-ink qd" cx="${x}" cy="${y}" r="2.3" style="animation-delay:${(Math.random() * 1.4).toFixed(2)}s;animation-duration:${(0.9 + Math.random()).toFixed(2)}s"/>`;
    }
    for (let a = 0; a <= 1; a += .12) { // cola
      const t = a * Math.PI / 2, x = 140 + 30 * Math.sin(t), y = 178 - 30 * (1 - Math.cos(t)) - 0;
      s += `<circle class="c-ink qd" cx="${(x + 2).toFixed(1)}" cy="${y.toFixed(1)}" r="2.3" style="animation-delay:${(Math.random() * 1.4).toFixed(2)}s"/>`;
    }
    s += '</g>';
    s += `<g class="s-alive"><circle class="c-ink" cx="87" cy="74" r="5.5"/><circle class="c-ink" cx="113" cy="74" r="5.5"/></g>
      <g class="s-dead" stroke="currentColor" stroke-width="3" fill="none"><path d="M81 68 L 93 80 M93 68 L 81 80 M107 68 L 119 80 M119 68 L 107 80"/></g>`;
    return s;
  };

  const variants = { line, geo, ascii, dots };
  const names = Object.keys(variants);
  let current = 'line';
  try {
    const q = new URLSearchParams(location.search).get('cat');
    const saved = localStorage.getItem('schrodinger-cat');
    current = names.includes(q) ? q : names.includes(saved) ? saved : 'line';
  } catch (e) {}

  const hosts = new Set();
  const draw = (el) => { el.innerHTML = variants[current](); };
  return {
    names,
    get current() { return current; },
    // el: <g> o <svg> dentro de un viewBox 200x200; state: super | alive | dead
    mount(el, state = 'super') { el.classList.add('cat', state); hosts.add(el); draw(el); },
    set(name) {
      if (!variants[name]) return;
      current = name;
      try { localStorage.setItem('schrodinger-cat', name); } catch (e) {}
      hosts.forEach(draw);
    },
    cycle() { this.set(names[(names.indexOf(current) + 1) % names.length]); return current; },
    collapse(el) {
      const alive = Math.random() < .5;
      el.classList.remove('super', 'alive', 'dead');
      el.classList.add(alive ? 'alive' : 'dead');
      return alive;
    },
    clear() { hosts.clear(); },
    reset(el) { el.classList.remove('alive', 'dead'); el.classList.add('super'); },
  };
})();
