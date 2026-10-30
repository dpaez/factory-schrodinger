<!-- .slide: class="section inv" data-title="Act II — Prose" data-deco="orbit" -->

<p class="act">Act II</p>

# The *path*

<p class="sub">or: how I ended up building a factory.</p>

Note:

We move to the personal / experience part.

---

<!-- .slide: data-title="Existential crisis" data-deco="rings" -->

<div class="cols" style="grid-template-columns: 1fr 820px">
<div class="col">

<p class="label">existential crisis</p>

<p class="mid-quote fragment">I don't write the code anymore.</p>

<p class="mid-quote fragment">I don't want to vibecode.</p>

<p class="mid-quote fragment"><em>Where do I stand?</em></p>

</div>
<div class="col">

<div data-comp="map" data-state="lost" data-caption="<b>Fig. 2</b> — The landscape moves while we look at it."></div>

</div>
</div>

Note:

Honest moment. More than one person in the audience is going through the same thing.

The map: I used to be up on the left (I wrote everything, with engineering). Vibecoding is down on the right. I'm in the middle, and the ground is moving: the contour lines change all the time. Up on the right: terra incognita.

---

<!-- .slide: data-title="Agent-driven coding" data-deco="grid" -->

<p class="label">how I worked · Dec 2025 → Mar 2026</p>

## Agent-driven *coding*

<div data-comp="timeline" data-marks="Dec 2025, Jan 2026, Feb 2026, Mar 2026"></div>

<div data-comp="chain">
<ul>
<li class="fragment"><b>Cursor</b><span>Agentic IDE. I'm still at the wheel, the agent assists me.</span></li>
<li class="fragment dashed"><b>pi</b><span><em>Spec-driven</em> harness. I give it a spec, the agent drives.</span></li>
</ul>
</div>

Note:

This is how I worked between December 2025 and March 2026. Professionalizing the prompting: the jump from the agentic IDE to the spec-driven harness.
It's like switching roles in pair programming; now we are the navigator.

---

<!-- .slide: data-title="Software factory" data-deco="diag" -->

<div class="cols" style="grid-template-columns: 1.15fr 1fr">
<div class="col">

<p class="label">definition</p>

## Software *factory*

<blockquote>
<p>A way of working where <strong>agent sessions are started by a trigger, not a person</strong>: an issue, a cron, a failing CI, another session that ends.<br>Human attention is saved for the decisions that need it.</p>
</blockquote>

<p class="cite">— <a href="https://www.aihero.dev/ai-coding-dictionary/software-factory" target="_blank" rel="noopener">Matt Pocock, <em>AI Coding Dictionary</em></a></p>

</div>
<div class="col aside fragment factory-dark">

<div data-comp="light-switch"></div>

<p class="label">limit case</p>

<h3>Dark factory</h3>

<p class="small">A software factory where no person reviews the code. The name comes from <em>lights-out</em> factories, fully automated with no human presence on the assembly line.</p>

<ol class="list">
<li>If nobody is looking -> does nobody care about the code?</li>
<li><strong>Not necessarily</strong>, the factory can produce <strong>metrics</strong> about its own performance. The process can include quality controls, <strong>cyclomatic complexity</strong> checks, and so on.</li>
</ol>

<p class="punch">The box is closed… but full of instruments.</p>

</div>
</div>

Note:

Dark factory (aihero.dev/ai-coding-dictionary/dark-factory): the difference I care about is not only that there is no human review. I know dark factories where nobody reviews, but humans enter the loop when the agent asks. And they generate a huge amount of statistics to analyze how they perform. Nobody looks at the code; everyone looks at the numbers.

Click the switch to turn the lights off.

---

<!-- .slide: data-title="Everyone building their factory" -->

<p class="label">meanwhile...</p>

## Everyone building *their* factory

<div data-comp="trend" data-caption="Worldwide interest in “software factory”, Oct 2025 → Oct 2026. 100 = peak for the period." data-source="https://trends.google.com/explore?q=software%2520factory" data-source-label="google trends">
</div>

<div data-comp="videos">
<ul>
<li data-url="https://x.com/DenisLabelle/status/2091337807939706928" data-thumb="/assets/video-pstack.jpg" data-pos="38%">pstack intro (Cursor)</li>
<li data-url="https://www.youtube.com/watch?v=Ib5GBkD555M" data-thumb="/assets/video-factories-fail.jpg" data-pos="78%">why software factories fail (humanlayer)</li>
<li data-url="https://www.youtube.com/watch?v=x-PK3yx_MJg" data-thumb="/assets/video-what-it-takes.jpg" data-pos="12%">what it takes to build a software factory (warp)</li>
</ul>
</div>

Note:

I wasn't the only one: talking with colleagues, several were setting up stages with agents working tickets.

The curve is worldwide interest in “software factory”: a peak in May (100) and down to 20 by mid-October.

The three cards open the videos (they can be clicked live).

---

<!-- .slide: data-title="I formalize my factory" data-deco="axis" -->
<p class="label">initial hypothesis · v0</p>

## I formalize *my* factory

<h3 class="">objectives</h3>
<div class="cols" style="grid-template-columns: 1.15fr 1fr">
<div class="col">
<ol class="list">
<li class="fragment">That it be cheap.</li>
<li class="fragment">Compatible with <code>opencode-go</code>.</li>
<li class="fragment"><em>Adversarial reviews</em> with limited rounds.</li>
<li class="fragment">Learning</li>
</ol>
</div>
<div class="col aside fragment">
<p class="label">Initial design</p>

<h3 class="">Based on skills</h3>
<p class="muted">supervisor · plan · work · review · wrapup</p>
</div>
</div>

Note:

Spoiler: the first goal was not met. Dramatic pause.

---

<!-- .slide: data-title="Problem 1: tokens" -->

<p class="label">problem #1</p>

## Too expensive and *verbose*.

<div data-comp="tokens" data-caption="<b>Fig. 3</b> — Token use vs. time (log scale). Illustrative data."></div>

Note:

The counter and the chart are illustrative, not real numbers. If you have real before/after numbers, replace them here.

---

<!-- .slide: data-title="Sessions as a dataset" data-deco="orbit-small" -->

<p class="label">sessions are data</p>

## An agent that analyzes *another agent*

<div data-comp="chain" data-caption="fewer tokens, more speed">
<ul>
<li class="fragment"><b>pi sessions</b><span class="">Everything the agent did is recorded.</span></li>
<li class="fragment dashed"><b>codex</b><span>It analyzes them and finds repeated tasks.</span></li>
<li class="fragment"><b>scripts</b><span>What repeats becomes code. The skill uses the script.</span></li>
<li class="fragment"><b>CLI</b><span>I formalize all of it. The skill operates through the CLI.</span></li>
</ul>
</div>


Note:

A relative but concrete improvement. First seed of determinism: everything that repeats, into code.

---

<!-- .slide: data-title="Stages + state" data-deco="grid" -->

<p class="label">stages · state · memory</p>

## With the CLI we move between *stages*

<div data-comp="files">
<ul>
<li class="fragment"><b>state.json</b><span>Simple.<br>It falls short fast.</span></li>
<li class="fragment"><b>factory.db</b><span>Enter sqlite.<br>A real database.</span></li>
<li class="fragment dashed"><b>dashboard</b><span>Side quest: <em>open the box</em>.<br>It reads the sqlite directly.</span></li>
</ul>
</div>

Note:

The dashboard is the moment of "opening the box": we want visibility and observability of what is happening inside. At first it opens and reads the sqlite directly (this will cause friction later).

---

<!-- .slide: data-title="Problem 2: skills" data-deco="diag" -->

<div class="cols" style="grid-template-columns: 680px 1fr">
<div class="col">

<p class="label">problem #2</p>

<h2>Everything was fine…<br><em>until it wasn't.</em></h2>

<ol class="list">
<li class="fragment">Agents follow skills well…</li>
<li class="fragment">…but there are corner cases, edge cases, differences between models.</li>
</ol>

</div>
<div class="col fragment">

<div data-comp="shot" data-src="/assets/skill-alone-not-working.png" data-stamp="lint_exit=1" data-alt="Agent session: formatting passes but lint fails and the error was hidden" data-caption="<b>Fig. 4</b> — Field evidence. The skill said what to do. The agent skipped a step. CI caught it."></div>

</div>
</div>

Note:

Tell the screenshot story: formatting passed, but lint failed and the error stayed hidden in the same way. The skill said what to do; the agent skipped it anyway.

---

<!-- .slide: data-title="It's prose" data-deco="rings" -->

<p class="big-quote">It's not code.<br><em>It's prose.</em></p>

<p class="lead muted fragment">Skills are good intentions, nothing more.</p>

<p class="lead fragment">I have a CLI, I have stages, I know the flow. <u>We have to check harder.</u></p>

Note:

The turning point of the talk.
