<!-- .slide: data-title="Introducing geut factory" data-sec="§ Closing" data-deco="grid" -->

<p class="label">the ecosystem</p>

## Introducing <span class="logo geut" role="img" aria-label="GEUT"></span>/factory

<div data-comp="repos">
<ul>
<li class="fragment" data-name="geut/factory" data-url="https://github.com/geut/factory-skills">The controller, the stages, and the skills.
<p class="extra">Stack: TS, Pi-extension, sqlite.</p></li>
<li class="fragment" data-name="geut/sbx-shell-pi" data-url="https://github.com/geut/sbx-shell-pi">Sandbox shell to run pi, herdr, and geut factory.
<p class="extra">Stack: Docker sbx, pi, herdr, dashboard.</p>
</li>
<li class="fragment" data-name="dpaez/factory-dashboard" data-url="https://github.com/dpaez/factory-dashboard/">The command center: <i>open the box.</i>
<p class="extra">Stack: Svelte, SvelteKit.</p>
</li>
</ul>
</div>

Note:

The cards are links (they can be clicked live). Check each repo's description.

---

<!-- .slide: data-title="factory-skills" data-sec="§ Closing" data-deco="grid" -->

<p class="label">geut/factory-skills</p>

## The box, *from the inside*

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
<li><b>plan</b><span>factory-plan</span><small>plan and tasks</small></li>
<li><b>work</b><span>factory-work</span><small>do the task</small></li>
<li class="opt"><b>qa</b><span>factory-qa</span><small>criteria, from the outside</small></li>
<li><b>review</b><span>factory-review</span><small>another model, read-only</small></li>
<li><b>wrapup</b><span>factory-wrapup</span><small>handoff</small></li>
</ul>
<ul data-layer="aside">
<li><b>prove-it-works</b><span>work uses it</span></li>
<li><b>factory-reflect</b><span>later, with evidence</span></li>
<li><b>create-factory-verification</b><span>custom verifications</span></li>
</ul>
</div>

<p class="caption"><b>Fig. 6</b> — Solid stroke: code (<code>src/stages</code>). Dotted stroke: prose (<code>skills/</code>). The controller moves the ticket; the skill only describes the specialist.</p>

Note:

The stack is TypeScript on Node 24, with Pi as the client, SQLite for state, Zod in the API, and Herdr for the panes. Each column above is a stage in src/stages: code that prepares the input and validates the output. The dotted box is the skill, prose, the specialist's behavior. QA does not run unless FACTORY.json turns on stages.qa. Below, three skills that are not stages: the worker uses prove-it-works, factory-reflect looks at finished tickets, and create-factory-verification builds a verification skill local to the repo.

---

<!-- .slide: data-title="Takeaways I" data-sec="§ Closing" data-deco="rings" -->

<p class="label">takeaways · 1/2</p>

<div data-comp="take" data-start="1">
<ul>
<li class="fragment"><b>Sessions as evals</b><span>Use agents to analyze how your agents work.</span></li>
<li class="fragment"><b>Skills are useful…</b><span>…but they are prose. Good intentions.</span></li>
<li class="fragment"><b>Encapsulate Agent(skill)</b><span>Prepared inputs, validated outputs.</span></li>
<li class="fragment"><b>Surround it with determinism</b><span>Scripts, hooks, code. What repeats, into code.</span></li>
</ul>
</div>

---

<!-- .slide: data-title="Takeaways II" data-sec="§ Closing" data-deco="diag" -->

<p class="label">takeaways · 2/2</p>

<div data-comp="take" data-start="5">
<ul>
<li class="fragment"><b>Efficiency &gt; cost</b><span>It is not cheap. More AI on a problem raises costs; the goal is process efficiency.</span></li>
<li class="fragment"><b>Every factory is its own world</b><span>We do similar things, but every org works differently. Adapt the factory to the org.</span></li>
<li class="fragment"><b>Spec-driven ≠ the only option</b><span>There are other approaches (e.g. domain-driven). And how do we generate the specs? Another problem.</span></li>
<li class="fragment"><b>Double agent checks</b><span>Adversarial reviews: a 2nd agent (another model) checks a small scope. E.g. cloudflare/security-audit-skill.</span></li>
</ul>
</div>

Note:

Efficiency: cite Joe McCann's tweet (x.com/joemccann/status/2111919538388480103) about more AI raising costs.

Double agent checks: the first agent reviews the whole project looking for security issues; when it finds one it hands it to a subagent (usually another model) that verifies the finding.

---

<!-- .slide: class="closing inv" data-title="Questions?" data-sec="§ Closing" data-deco="orbit" -->

<div data-comp="closing-cat"></div>

# *Questions*?

<p class="muted">we open the box: <code>|alive⟩</code>🧉</p>

<a class="hire" href="https://www.agilityio.com/join-our-team" target="_blank" rel="noopener">
  <span class="mark"><img src="assets/agilityio.svg" alt="AgilityIO"></span>
  <span class="line">we are hiring!<span class="go" aria-hidden="true">↗</span></span>
</a>

Note:

Close: the dashboard, the hooks, the controller: all of that is opening the box. Thank you.
