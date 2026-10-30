<!-- .slide: data-title="Introducing geut factory" data-sec="§ Cierre" data-deco="grid" -->

<p class="label">el ecosistema</p>

## Introducing <span class="logo geut" role="img" aria-label="GEUT"></span>/factory

<div data-comp="repos">
<ul>
<li class="fragment" data-name="geut/factory" data-url="https://github.com/geut/factory-skills">El controller, los stages y las skills. 
<p class="extra">Stack: TS, Pi-extension, sqlite.</p></li>
<li class="fragment" data-name="geut/sbx-shell-pi" data-url="https://github.com/geut/sbx-shell-pi">Sandbox shell para correr pi, herdr y geut factory.
<p class="extra">Stack: Docker sbx, pi, herdr, dashboard.</p>
</li>
<li class="fragment" data-name="dpaez/factory-dashboard" data-url="https://github.com/dpaez/factory-dashboard/">El command center: <i>abrir la caja.</i>
<p class="extra">Stack: Svelte, SvelteKit.</p>
</li>
</ul>
</div>

Note:

Las tarjetas son links (se pueden clickear en vivo). Revisar las descripciones de cada repo.

---

<!-- .slide: data-title="factory-skills" data-sec="§ Cierre" data-deco="grid" -->

<p class="label">geut/factory-skills</p>

## La caja, *por dentro*

<div data-comp="anatomy" data-machinery="definition · flow · prompt · output">
<ul data-layer="stack">
<li>TypeScript</li>
<li>Node 24</li>
<li>Pi</li>
<li>Herdr</li>
<li>SQLite</li>
<li>Zod</li>
</ul>
<ul data-layer="stages">
<li><b>plan</b><span>factory-plan</span><small>plan y tareas</small></li>
<li><b>work</b><span>factory-work</span><small>do the task</small></li>
<li class="opt"><b>qa</b><span>factory-qa</span><small>criterios, desde afuera</small></li>
<li><b>review</b><span>factory-review</span><small>otro modelo, solo lectura</small></li>
<li><b>wrapup</b><span>factory-wrapup</span><small>handoff</small></li>
</ul>
<ul data-layer="aside">
<li><b>prove-it-works</b><span>la usa work</span></li>
<li><b>factory-reflect</b><span>después, con evidencia</span></li>
<li><b>create-factory-verification</b><span>verificaciones a medida</span></li>
</ul>
</div>

<p class="caption"><b>Fig. 6</b> — Trazo continuo: código (<code>src/stages</code>). Trazo punteado: prosa (<code>skills/</code>). El controller mueve el ticket; la skill solo describe al especialista.</p>

Note:

El stack es TypeScript sobre Node 24, con Pi como cliente, SQLite para el estado, Zod en el API y Herdr para los panes. Cada columna de arriba es un stage en src/stages: código que prepara la entrada y valida la salida. La caja punteada es la skill, prosa, el comportamiento del especialista. QA no corre salvo que FACTORY.json prenda stages.qa. Abajo, tres skills que no son stages: prove-it-works la usa el worker, factory-reflect mira tickets terminados, y create-factory-verification arma una skill de verificación local al repo.

---

<!-- .slide: data-title="Takeaways I" data-sec="§ Cierre" data-deco="rings" -->

<p class="label">conclusiones · 1/2</p>

<div data-comp="take" data-start="1">
<ul>
<li class="fragment"><b>Sesiones como evals</b><span>Usá agentes para analizar cómo trabajan tus agentes.</span></li>
<li class="fragment"><b>Las skills son útiles…</b><span>…pero son prosa. Buenas intenciones.</span></li>
<li class="fragment"><b>Encapsulá Agent(skill)</b><span>Entradas preparadas, salidas validadas.</span></li>
<li class="fragment"><b>Rodealo de determinismo</b><span>Scripts, hooks, código. Lo repetido, a código.</span></li>
</ul>
</div>

---

<!-- .slide: data-title="Takeaways II" data-sec="§ Cierre" data-deco="diag" -->

<p class="label">conclusiones · 2/2</p>

<div data-comp="take" data-start="5">
<ul>
<li class="fragment"><b>Eficiencia &gt; costo</b><span>No es económico. Más AI sobre un problema aumenta los costos; el objetivo es la eficiencia del proceso.</span></li>
<li class="fragment"><b>Cada factory es un mundo</b><span>Hacemos cosas parecidas, pero cada org funciona distinto. Adaptá la factory a la org.</span></li>
<li class="fragment"><b>Spec-driven ≠ única opción</b><span>Hay otros approaches (ej: domain-driven). ¿Y cómo generamos las specs? Otro problema.</span></li>
<li class="fragment"><b>Double agent checks</b><span>Adversarial reviews: un 2do agente (otro modelo) verifica un scope chico. Ej: cloudflare/security-audit-skill.</span></li>
</ul>
</div>

Note:

Eficiencia: citar el tweet de Joe McCann (x.com/joemccann/status/2111919538388480103) sobre que más AI aumenta los costos.

Double agent checks: el primer agente revisa todo el proyecto buscando security issues; cuando encuentra uno se lo pasa a un subagente (generalmente otro modelo) que verifica el hallazgo.

---

<!-- .slide: class="closing inv" data-title="¿Preguntas?" data-sec="§ Cierre" data-deco="orbit" -->

<div data-comp="closing-cat"></div>

# ¿*Preguntas*?

<p class="muted">abrimos la caja: <code>|vivo⟩</code>🧉</p>

<a class="hire" href="https://www.agilityio.com/join-our-team" target="_blank" rel="noopener">
  <span class="mark"><img src="assets/agilityio.svg" alt="AgilityIO"></span>
  <span class="line">we are hiring!<span class="go" aria-hidden="true">↗</span></span>
</a>

Note:

Cierre: el dashboard, los hooks, el controller: todo eso es abrir la caja. Gracias.
