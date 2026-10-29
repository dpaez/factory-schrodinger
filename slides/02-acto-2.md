<!-- .slide: class="section inv" data-title="Acto II — Prosa" data-deco="orbit" -->

<p class="act">Acto II</p>

# El *recorrido*

<p class="sub">o: cómo terminé construyendo una fábrica.</p>

Note:

Pasamos a la parte personal / de experiencia.

---

<!-- .slide: data-title="Crisis existencial" data-deco="rings" -->

<div class="cols" style="grid-template-columns: 1fr 820px">
<div class="col">

<p class="label">crisis existencial</p>

<p class="mid-quote fragment">Ya no escribo más el código.</p>

<p class="mid-quote fragment">No quiero vibecodear.</p>

<p class="mid-quote fragment"><em>¿Dónde me paro?</em></p>

</div>
<div class="col">

<div data-comp="map" data-state="lost" data-caption="<b>Fig. 2</b> — El paisaje se mueve mientras lo miramos."></div>

</div>
</div>

Note:

Momento honesto. Seguro a más de uno en la audiencia le pasa lo mismo.

El mapa: antes estaba arriba a la izquierda (escribía todo, con ingeniería). El vibecoding está abajo a la derecha. Yo estoy en el medio, y el piso se mueve: las curvas de nivel cambian todo el tiempo. Arriba a la derecha: terra incognita.

---

<!-- .slide: data-title="Agent-driven coding" data-deco="grid" -->

<p class="label">cómo trabajaba · dic 2025 → mar 2026</p>

## Agent-driven *coding*

<div data-comp="timeline" data-marks="dic 2025, ene 2026, feb 2026, mar 2026"></div>

<div data-comp="chain">
<ul>
<li class="fragment"><b>Cursor</b><span>IDE agéntico. Yo sigo al volante, el agente me asiste.</span></li>
<li class="fragment dashed"><b>pi</b><span>Harness <em>spec-driven</em>. Le doy un spec, el agente maneja.</span></li>
</ul>
</div>

Note:

Así trabajaba entre diciembre 2025 y marzo 2026. Profesionalizar el prompteo: el salto del IDE agéntico al harness spec-driven.
Es similar a cambiar los roles haciendo pair programming, ahora somos el navegante.

---

<!-- .slide: data-title="Software factory" data-deco="diag" -->

<div class="cols" style="grid-template-columns: 1.15fr 1fr">
<div class="col">

<p class="label">definición</p>

## Software *factory*

<blockquote>
<p>Un sistema de trabajo donde <strong>las sesiones de los agentes las arranca un trigger, no una persona</strong>: un issue, un cron, un CI que falla, otra sesión que termina.<br>La atención humana queda para las decisiones que la necesitan.</p>
</blockquote>

<p class="cite">— <a href="https://www.aihero.dev/ai-coding-dictionary/software-factory" target="_blank" rel="noopener">Matt Pocock, <em>AI Coding Dictionary</em></a></p>

</div>
<div class="col aside fragment factory-dark">

<div data-comp="light-switch"></div>

<p class="label">caso límite</p>

<h3>Dark factory</h3>

<p class="small">Una software factory donde ninguna persona revisa el código. El nombre viene de las fábricas <em>lights-out</em>, completamente automatizadas sin presencia humana en la línea de ensamblaje.</p>

<ol class="list">
<li>Si nadie esta mirando -> ¿a nadie le importa el código?</li>
<li><strong>No necesariamente</strong>, la factory puede producir <strong>métricas</strong> sobre su propia performance. El proceso puede incluir controles de calidad, chequeos de <strong>complejidad ciclomática</strong>, etc.</li>
</ol>

<p class="punch">La caja cerrada… pero llena de instrumentos.</p>

</div>
</div>

Note:

Dark factory (aihero.dev/ai-coding-dictionary/dark-factory): la diferencia que me interesa no es solo que no hay review humana. Conozco dark factories donde nadie revisa, pero los humanos entran al loop cuando el agente lo pide. Y generan una cantidad enorme de estadísticas para analizar cómo rinden. Nadie mira el código; todos miran los números.

Click en la llave para apagar las luces.

---

<!-- .slide: data-title="Todos armando su factory" -->

<p class="label">mientras tanto...</p>

## Todos armando *su* factory

<div data-comp="trend" data-caption="Interés mundial en “software factory”, oct 2025 → oct 2026. 100 = máximo del período." data-source="https://trends.google.com/explore?q=software%2520factory" data-source-label="google trends">
</div>

<div data-comp="videos">
<ul>
<li data-url="https://x.com/DenisLabelle/status/2091337807939706928" data-thumb="/assets/video-pstack.jpg" data-pos="38%">pstack intro (Cursor)</li>
<li data-url="https://www.youtube.com/watch?v=Ib5GBkD555M" data-thumb="/assets/video-factories-fail.jpg" data-pos="78%">why software factories fail (humanlayer)</li>
<li data-url="https://www.youtube.com/watch?v=x-PK3yx_MJg" data-thumb="/assets/video-what-it-takes.jpg" data-pos="12%">what it takes to build a software factory (warp)</li>
</ul>
</div>

Note:

No era el único: hablando con colegas, varios armaban etapas con agentes laburando tickets.

La curva es el interés mundial en “software factory”: pico en mayo (100) y baja a 20 a mediados de octubre.

Las tres tarjetas abren los videos (se pueden clickear en vivo).

---

<!-- .slide: data-title="Formalizo mi factory" data-deco="axis" -->
<p class="label">hipótesis inicial · v0</p>

## Formalizo *mi* factory

<h3 class="">objetivos</h3>
<div class="cols" style="grid-template-columns: 1.15fr 1fr">
<div class="col">
<ol class="list">
<li class="fragment">Que sea económica.</li>
<li class="fragment">Compatible con <code>opencode-go</code>.</li>
<li class="fragment"><em>Adversarial reviews</em> con rondas limitadas.</li>
<li class="fragment">Aprendizaje</li>
</ol>
</div>
<div class="col aside fragment">
<p class="label">Diseño inicial</p>

<h3 class="">Basado en skills</h3>
<p class="muted">supervisor · plan · work · review · wrapup</p>
</div>
</div>

Note:

Spoiler: el primer objetivo no se cumplió. Pausa dramática.

---

<!-- .slide: data-title="Problema 1: tokens" -->

<p class="label">problema #1</p>

## Demasiado cara y *verborrágica*.

<div data-comp="tokens" data-caption="<b>Fig. 3</b> — Consumo de tokens vs. tiempo (escala log). Datos ilustrativos."></div>

Note:

El contador y el gráfico son ilustrativos, no son números reales. Si tenés números reales de antes/después, reemplazar acá.

---

<!-- .slide: data-title="Sesiones como dataset" data-deco="orbit-small" -->

<p class="label">las sesiones son datos</p>

## Un agente que analiza *a otro agente*

<div data-comp="chain" data-caption="menos tokens, más velocidad">
<ul>
<li class="fragment"><b>sesiones de pi</b><span class="">Todo lo que hizo el agente queda registrado.</span></li>
<li class="fragment dashed"><b>codex</b><span>Las analiza y encuentra tareas repetidas.</span></li>
<li class="fragment"><b>scripts</b><span>Lo repetido se vuelve código. La skill usa el script.</span></li>
<li class="fragment"><b>CLI</b><span>Formalizo todo. La skill opera vía el CLI.</span></li>
</ul>
</div>


Note:

Mejora relativa pero concreta. Primera semilla de determinismo: todo lo que se repite, a código.

---

<!-- .slide: data-title="Stages + estado" data-deco="grid" -->

<p class="label">stages · estado · memoria</p>

## Con el CLI nos movemos entre *stages*

<div data-comp="files">
<ul>
<li class="fragment"><b>state.json</b><span>Simple.<br>Se queda corto rápido.</span></li>
<li class="fragment"><b>factory.db</b><span>Enter sqlite.<br>Una base de datos de verdad.</span></li>
<li class="fragment dashed"><b>dashboard</b><span>Side quest: <em>abrir la caja</em>.<br>Lee la sqlite directo.</span></li>
</ul>
</div>

Note:

El dashboard es el momento de "abrir la caja": queremos visibilidad y observabilidad de lo que está pasando adentro. Inicialmente abre y lee el sqlite directamente (esto va a traer fricción más adelante).

---

<!-- .slide: data-title="Problema 2: skills" data-deco="diag" -->

<div class="cols" style="grid-template-columns: 680px 1fr">
<div class="col">

<p class="label">problema #2</p>

<h2>Todo iba bien…<br><em>hasta que no.</em></h2>

<ol class="list">
<li class="fragment">Los agentes siguen bien las skills…</li>
<li class="fragment">…pero hay corner cases, edge cases, diferencias entre modelos.</li>
</ol>

</div>
<div class="col fragment">

<div data-comp="shot" data-src="/assets/skill-alone-not-working.png" data-stamp="lint_exit=1" data-alt="Sesión de agente: el formateo pasa pero lint falla y el error estaba oculto" data-caption="<b>Fig. 4</b> — Evidencia de campo. La skill decía qué hacer. El agente omitió un paso. El CI lo capturo."></div>

</div>
</div>

Note:

Contar la anécdota del screenshot: el formato pasaba, pero el lint fallaba y el error quedaba escondido de la misma forma. La skill decía qué hacer; el agente igual se lo salteó.

---

<!-- .slide: data-title="Es prosa" data-deco="rings" -->

<p class="big-quote">No es código.<br><em>Es prosa.</em></p>

<p class="lead muted fragment">Las skills son buenas intenciones, nada más.</p>

<p class="lead fragment">Tengo un CLI, tengo etapas, sé cómo es el flujo. <u>Hay que chequear más fuerte.</u></p>

Note:

Punto de quiebre de la charla.
