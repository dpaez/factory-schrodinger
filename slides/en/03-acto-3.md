<!-- .slide: class="section inv" data-title="Act III — Code" data-deco="axis" -->

<p class="act">Act III</p>

# Bring back *determinism*

<p class="sub">from prose to code: hooks · controller · API · cloud</p>

Note:

I already had the idea of stages and knew how to move between them, but that was prose. Now, code.

---

<!-- .slide: data-title="Puzzle" data-deco="grid" -->

<p class="label">the pieces fall into place (some of them)</p>

## Each stage, *its skill*

<div data-comp="stages">
<ul>
<li><b>plan</b><span>skill: plan</span></li>
<li><b>work</b><span>skill: implement</span></li>
<li><b>review</b><span>skill: adversarial-review</span></li>
<li><b>wrapup</b><span>skill: wraup-up</span></li>
</ul>
</div>

<div data-comp="supervisor" data-name="supervisor.md" data-sub="the skill that orchestrates everything"></div>

<p class="lead"><span class="fragment">The supervisor skill doesn't make much sense.</span> <span class="fragment">Smaller…</span> <span class="fragment"><em>until it doesn't exist. All of that is code.</em></span></p>

Note:

Each step shrinks supervisor.md until it disappears. The stage/skill names are examples: adjust them to the real ones.

---

<!-- .slide: data-title="The controller loop" data-deco="orbit-small" -->

<p class="label">the controller</p>

## Prose inside, *code around*

<div data-comp="loop" data-stages="plan, work, review, wrap-up"></div>

Note:

It runs on its own. Validate fails at random ~40% of the time and goes back to Agent(skill) as a correction. The agent is still non-deterministic, but it is encapsulated: code controls what goes in and what comes out.

---

<!-- .slide: data-title="From controller to API" data-deco="rings" -->

<p class="label">next step</p>

## From factory controller *to API*

<p class="lead muted fragment">The dashboard read the DB directly, the schemas changed fast, we wanted more interaction.</p>
<div class="fragment" data-comp="api" data-hub="API" data-sub="FACTORY">
<ul>
<li class="" data-title="controller">Runs the stages. Just another client.</li>
<li data-title="dashboard">Observes... and now also acts. Another client.</li>
</ul>
</div>

<p class="badge fragment">command center → start tickets from the dashboard</p>

Note:

The idea is more solid. The controller and the dashboard are clients of the API. We can start tickets from the dashboard → command center.

---

<!-- .slide: data-title="Cloud factory" data-deco="diag" -->

<div class="cols" style="grid-template-columns: 640px 1fr">
<div class="col">

<p class="label">next step</p>

## Cloud factory: *many boxes*

<ol class="list">
<li class="fragment">Multiple subagent instances</li>
<li class="fragment">Routing and balancing</li>
<li class="fragment">More CPU power</li>
<li class="fragment u">Shared at the organization level</li>
</ol>

</div>
<div class="col">

<div data-comp="cloud" data-n="40" data-caption="<b>Fig. 5</b> — 40 boxes, 40 cats. ■ busy &nbsp; ▨ error &nbsp; □ idle"></div>

</div>
</div>

Note:

Many boxes, many cats. What used to be one agent on my machine is now a fleet.

---

<!-- .slide: data-title="Recap: new destination" data-deco="axis" -->

<div class="cols" style="grid-template-columns: 1fr 760px">
<div class="col">

<p class="label">recap</p>

## From prose *to code*

<div data-comp="ratio" data-min="22">
<ul>
<li class="fragment">scripts</li>
<li class="fragment">CLI</li>
<li class="fragment">stages</li>
<li class="fragment">state</li>
<li class="fragment">hooks</li>
<li class="fragment">controller</li>
<li class="fragment">API</li>
<li class="fragment">cloud</li>
</ul>
</div>
<p class="lead fragment">New destination: the value is in <u>the work around the agent</u>.</p>


</div>
<div class="col">

<div data-comp="map" data-state="arrived" data-caption="<b>Fig. 2′</b> — The same map, revisited."></div>

</div>
</div>

Note:

Each step moves the bar and moves the point on the map. Prose never reaches zero: the agent is still inside the box. But there is more code around it each time.

The result is a new place on the map: as developers we have a role that makes sense again, which is to design and maintain everything that surrounds the agent. We arrive at a new destination.
