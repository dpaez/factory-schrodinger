<!-- .slide: class="section inv" data-title="Acto III — Código" data-deco="axis" -->

<p class="act">Acto III</p>

# Recuperar el *determinismo*

<p class="sub">de prosa a código: hooks · controller · API · cloud</p>

Note:

Ya tenía el concepto de etapas y sabía moverme entre ellas, pero eso era prosa. Ahora, código.

---

<!-- .slide: data-title="Rompecabezas" data-deco="grid" -->

<p class="label">las piezas caen en su lugar (algunas)</p>

## Cada stage, *su skill*

<div data-comp="stages">
<ul>
<li><b>plan</b><span>skill: plan</span></li>
<li><b>work</b><span>skill: implement</span></li>
<li><b>review</b><span>skill: adversarial-review</span></li>
<li><b>wrapup</b><span>skill: wraup-up</span></li>
</ul>
</div>

<div data-comp="supervisor" data-name="supervisor.md" data-sub="la skill que orquesta todo"></div>

<p class="lead"><span class="fragment">La skill supervisor no tiene mucho sentido.</span> <span class="fragment">Más chica…</span> <span class="fragment"><em>hasta que no exista. Todo eso es código.</em></span></p>

Note:

Cada avance achica supervisor.md hasta que desaparece. Los nombres de stages/skills son ejemplo: ajustar a los reales.

---

<!-- .slide: data-title="El loop del controller" data-deco="orbit-small" -->

<p class="label">el controller</p>

## Prosa adentro, *código alrededor*

<div data-comp="loop" data-stages="plan, work, review, wrap-up"></div>

Note:

Corre solo. Validate falla al azar ~40% de las veces y vuelve a Agent(skill) como corrección. El agente sigue siendo no-determinístico, pero queda encapsulado: lo que entra y lo que sale lo controla código.

---

<!-- .slide: data-title="De controller a API" data-deco="rings" -->

<p class="label">siguiente paso</p>

## De factory controller *a API*

<p class="lead muted fragment">El dashboard leía la DB directo, los esquemas cambiaban rápido, queríamos más interacción.</p>
<div class="fragment" data-comp="api" data-hub="API" data-sub="FACTORY">
<ul>
<li class="" data-title="controller">Corre los stages. Es un cliente más.</li>
<li data-title="dashboard">Observa... y ahora también actúa. Otro cliente.</li>
</ul>
</div>

<p class="badge fragment">command center → iniciar tickets desde el dashboard</p>

Note:

La idea está más sólida. El controller y el dashboard son clientes del API. Podemos iniciar tickets desde el dashboard → command center.

---

<!-- .slide: data-title="Cloud factory" data-deco="diag" -->

<div class="cols" style="grid-template-columns: 640px 1fr">
<div class="col">

<p class="label">siguiente paso</p>

## Cloud factory: *muchas cajas*

<ol class="list">
<li class="fragment">Múltiples instancias de subagentes</li>
<li class="fragment">Ruteo y balanceo</li>
<li class="fragment">Más poder de CPU</li>
<li class="fragment u">Compartida a nivel organización</li>
</ol>

</div>
<div class="col">

<div data-comp="cloud" data-n="40" data-caption="<b>Fig. 5</b> — 40 cajas, 40 gatos. ■ ocupado &nbsp; ▨ error &nbsp; □ idle"></div>

</div>
</div>

Note:

Muchas cajas, muchos gatos. Lo que antes era un agente en mi máquina ahora es una flota.

---

<!-- .slide: data-title="Recap: nuevo destino" data-deco="axis" -->

<div class="cols" style="grid-template-columns: 1fr 760px">
<div class="col">

<p class="label">recap</p>

## De prosa *a código*

<div data-comp="ratio" data-min="22">
<ul>
<li class="fragment">scripts</li>
<li class="fragment">CLI</li>
<li class="fragment">stages</li>
<li class="fragment">estado</li>
<li class="fragment">hooks</li>
<li class="fragment">controller</li>
<li class="fragment">API</li>
<li class="fragment">cloud</li>
</ul>
</div>
<p class="lead fragment">Nuevo destino: el valor está en <u>el trabajo alrededor del agente</u>.</p>


</div>
<div class="col">

<div data-comp="map" data-state="arrived" data-caption="<b>Fig. 2′</b> — El mismo mapa, revisitado."></div>

</div>
</div>

Note:

Cada paso mueve la barra y mueve el punto en el mapa. La prosa nunca llega a cero: el agente sigue adentro de la caja. Pero cada vez hay más código alrededor.

El resultado es un lugar nuevo en el mapa: como developers volvemos a tener un rol con sentido, que es diseñar y mantener todo lo que rodea al agente. Llegamos a un destino nuevo.
