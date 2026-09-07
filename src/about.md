---
layout: layout.njk
title: About
description: "How Nest Cafe grew from Sammy cooking for friends into a home cafe and community, brought to life by the team behind it."
letterButtonText: "Say hello"
letterButtonLink: /contact/
---

<section class="letter-section">
<div class="wrap letter__col letter__col--prose">
<h1 class="script-line">Hey there!</h1>
<p>I'm Samvita, the founder and logistics head of Nest Cafe.</p>
<p>Nest Cafe originally started with cooking for my friends in the Fall of 2025, but soon, it grew to be a community and place I loved and called home. Excited to take you on our journey!</p>
</div>
</section>

<section class="letter-section letter-section--tint">
<div class="wrap letter__col">
<p class="letter-heading">The Founding Idea</p>
<div class="founding-idea">
<div class="founding-idea__text">
<p>From the beginning, Nest was shaped by a simple set of questions:</p>
<ul class="question-list">
<li>What do we love?</li>
<li>What can we bring?</li>
<li>What does our community need?</li>
</ul>
<p class="letter-quote">Nest Café hatched from the overlap.</p>
</div>
<svg class="venn" viewBox="0 0 220 220" role="img" aria-label="A Venn diagram of what we love, what we're good at, and what our community needs, overlapping in Nest">
<circle cx="110" cy="72" r="68" fill="var(--periwinkle)" opacity="0.55" style="mix-blend-mode:multiply"></circle>
<circle cx="78" cy="138" r="68" fill="var(--badge-blue-deep)" opacity="0.55" style="mix-blend-mode:multiply"></circle>
<circle cx="142" cy="138" r="68" fill="var(--periwinkle-deep)" opacity="0.45" style="mix-blend-mode:multiply"></circle>
<text x="110" y="36"><tspan x="110" dy="0">what we</tspan><tspan x="110" dy="9">love</tspan></text>
<text x="46" y="144"><tspan x="46" dy="0">what we're</tspan><tspan x="46" dy="9">good at</tspan></text>
<text x="174" y="140"><tspan x="174" dy="0">what our</tspan><tspan x="174" dy="9">community</tspan><tspan x="174" dy="9">needs</tspan></text>
<text class="venn__center" x="110" y="122">Nest</text>
</svg>
</div>
</div>
</section>

<section class="letter-section letter-section--pb-tight">
<div class="wrap letter__col">
<p class="letter-heading">Meet the Team</p>
<p class="section-lead">Nest has grown quite a bit since those first meals. Today, it's brought to life by a team of people who each bring something different to the table.</p>
<div class="team-grid">
<div class="team-card"><img class="team-card__photo" src="/images/team/sammy.jpeg" alt="Sammy"><p class="team-card__name">Sammy</p><p class="team-card__role">Founder &amp; Logistics Head</p></div>
<div class="team-card"><img class="team-card__photo" src="/images/team/abigail.jpeg" alt="Abigail"><p class="team-card__name">Abigail</p><p class="team-card__role">Operations Head</p></div>
<div class="team-card"><img class="team-card__photo" src="/images/team/harika.jpeg" alt="Harika"><p class="team-card__name">Harika</p><p class="team-card__role">Media Design</p></div>
<div class="team-card"><img class="team-card__photo" src="/images/team/anjali.jpeg" alt="Anjali"><p class="team-card__name">Anjali</p><p class="team-card__role">Website Creation</p></div>
<div class="team-card"><img class="team-card__photo" src="/images/team/shivani.jpeg" alt="Shivani"><p class="team-card__name">Shivani</p><p class="team-card__role">Event Photographer</p></div>
<div class="team-card"><img class="team-card__photo" src="/images/team/shrusti.jpeg" alt="Shrusti"><p class="team-card__name">Shrusti</p><p class="team-card__role">Finance Manager</p></div>
</div>
</div>
</section>

<section class="letter-section letter-section--pt-tight">
<div class="wrap">
<div class="attachment-dialog letter-closing">
<span class="attachment-dialog__pin" aria-hidden="true"></span>
<h2>Connection doesn't have to be complicated</h2>
<p>Come for the coffee and sweet treats, stay for a conversation.</p>
<a class="button" href="{{ letterButtonLink }}">{{ letterButtonText }} &rarr;</a>
</div>
</div>
</section>

<section class="instagram">
<div class="wrap">
<p class="kicker">follow along on</p>
<h2 class="script-line">Instagram</h2>
</div>
<a class="instagram-strip" href="{{ site.instagramLink }}" aria-label="Visit {{ site.instagramHandle }} on Instagram">
<div class="instagram-strip__track">
{% for photo in instagramPhotos %}<div class="instagram-strip__item"><img src="{{ photo.image }}" alt="{{ photo.alt }}"></div>{% endfor %}
{% for photo in instagramPhotos %}<div class="instagram-strip__item"><img src="{{ photo.image }}" alt="{{ photo.alt }}"></div>{% endfor %}
</div>
</a>
<div class="instagram-banner">
<div class="instagram-banner__track">
{% for i in range(0, 8) %}<span>FOLLOW US {{ site.instagramHandle | upper }}</span>{% endfor %}
</div>
</div>
</section>
