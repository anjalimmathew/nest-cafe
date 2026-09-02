---
layout: layout.njk
description: "A home cafe where good food gathers us and good conversation gives it purpose."
extraScript: timeline.js
welcomeMessage: "A home cafe where good food gathers us and good conversation gives it purpose. Every pop-up pairs something we baked by hand with a topic worth talking about."
welcomeButtonText: "Explore our pop-ups →"
welcomeButtonLink: /events/
foundingImage: /images/founding.jpg
foundingDescription: "Nest Café is more than a home café. In a world saturated with information, we wanted to create a third space where people can find a starting point for meaningful conversation."
foundingDescription2: "Through food and shared experiences, we hope to bring people together in a space where curiosity grows, perspectives are exchanged, and genuine connections are built around the issues shaping our communities."
foundingButtonText: "Learn More"
foundingButtonLink: /about/
---
<section class="hero">
<div class="wrap hero__row">
<div class="photo-frame hero__logo-frame"><img src="/images/logo-no-text.png" alt="Nest Cafe"></div>
<div class="hero__copy">
<h1>welcome to <span class="script-accent">Nest cafe</span></h1>
<p class="hero__message">{{ welcomeMessage }}</p>
<a class="button" href="{{ welcomeButtonLink }}">{{ welcomeButtonText }}</a>
</div>
</div>
</section>

<section class="founding">
<div class="wrap founding__row">
<div class="photo-frame"><img src="{{ foundingImage }}" alt="{{ site.founders }} at Nest Cafe"></div>
<div class="founding__copy">
<p class="kicker">our story</p>
<h2>Founded by two friends in <span class="script-accent">2026</span></h2>
<p>{{ foundingDescription }}</p>
<p>{{ foundingDescription2 }}</p>
<a class="link" href="{{ foundingButtonLink }}">{{ foundingButtonText }}</a>
</div>
</div>
</section>

<section class="popups">
<div class="wrap">
<p class="kicker">what we've gathered around</p>
<h2>Three pop-ups so far, each with its own menu and its own conversation.</h2>
<div class="timeline">
<div class="timeline__line"></div>
<div class="timeline__track">
{% for event in collections.events %}
{% if event.data.number > (collections.events.length - 3) %}
<div class="timeline__item">
<p class="timeline__date">{{ event.data.date | shortDate }}</p>
<span class="timeline__pin"></span>
<span class="timeline__connector"></span>
<a class="timeline__card" href="{{ event.url }}">
<div class="photo-frame"><img src="{{ event.data.image }}" alt="{{ event.data.title }}"></div>
<h3>{{ event.data.title }}</h3>
<p>{{ event.data.excerpt }}</p>
<span class="link">Step inside</span>
</a>
</div>
{% endif %}
{% endfor %}
</div>
</div>
</div>
</section>
