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
