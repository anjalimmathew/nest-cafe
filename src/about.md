---
layout: layout.njk
title: About
description: "How Nest Cafe hatched from the overlap of what two friends love, what they're good at, and what their community needs."
letterTitle: "Hey there!"
letterButtonText: "Contact us"
letterButtonLink: /contact/
---

<section class="letter">
<div class="wrap letter__row">
<div class="letter__copy">
<p class="kicker">{{ letterTitle }}</p>
<p>Hi! We're {{ site.founders }}, two friends behind Nest Café, a home café built from a simple question: How can we create something meaningful in a world that can often feel overwhelming and disconnected?</p>
<p>We started by sitting down with a Venn diagram, mapping out what we love, what we're good at, and what we believe our community needs most. Nest Café hatched from the overlap.</p>
<p class="pull-quote">Our friendship grew through the little things: workouts planned together, cooking side by side, and long conversations over coffee. Somewhere along the way, we realized we shared the same hope: to create something that gives people a starting point for connection, curiosity, and meaningful change, especially when so much around us feels heavy.</p>
<p>Nest is our way of bringing people back to the table, to share good food, ask better questions, and remind one another that even small acts of connection can be a place to begin.</p>
<a class="link" href="{{ letterButtonLink }}">{{ letterButtonText }}</a>
</div>
<div class="letter__media">
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

<section class="instagram">
<div class="wrap">
<p class="kicker">follow along on</p>
<h2>Instagram</h2>
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
