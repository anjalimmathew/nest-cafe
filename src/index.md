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
<div class="hero__photo">
<div class="photo-frame--sketch">
<img class="hero__lamp" src="/images/ceiling-lamp.png" alt="" aria-hidden="true">
<img class="hero__decor hero__decor--moon" src="/images/decor-moon-new.png" alt="" aria-hidden="true">
<img class="hero__decor hero__decor--constellation" src="/images/decor-constellation-new.png" alt="" aria-hidden="true">
<div class="photo-frame--sketch__mask">
<div class="hero-slideshow">
<img src="/images/welcome.jpg" alt="Fresh bakes at Nest Cafe">
<img src="/images/instagram/photo-1.jpg" alt="">
<img src="/images/instagram/photo-3.jpg" alt="">
<img src="/images/instagram/photo-5.jpg" alt="">
<img src="/images/founding.jpg" alt="">
</div>
</div>
<svg class="photo-frame--sketch__outline" viewBox="0 0 100 120" preserveAspectRatio="none" aria-hidden="true">
<path d="M6,117 L6,46 A44,44 0 0 1 94,46 L94,117" fill="none" stroke="var(--white)" stroke-width="3" stroke-linecap="round"/>
</svg>
</div>
</div>
<div class="hero__copy">
<p class="kicker">welcome to</p>
<img class="hero__wordmark" src="/images/logo-wordmark-trim.png" alt="Nest Cafe">
<p class="hero__message">{{ welcomeMessage }}</p>
<a class="button" href="{{ welcomeButtonLink }}">{{ welcomeButtonText }}</a>
</div>
</div>
</section>

<section class="founding">
<div class="founding__row">
<div class="founding__copy">
<p class="kicker">our story</p>
<h2>Founded by two friends in <span class="script-accent">2025</span></h2>
<p>{{ foundingDescription }}</p>
<p>{{ foundingDescription2 }}</p>
<a class="link" href="{{ foundingButtonLink }}">{{ foundingButtonText }}</a>
<img class="founding__icon-overlap" src="/images/decor-coffee-friends-trim.png" alt="">
</div>
<div class="founding__photo">
<svg class="deco deco-moon" style="top:16px;left:16px;" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 14.5a8.5 8.5 0 1 1-9-13 7 7 0 0 0 9 13z" fill="currentColor"/></svg>
<svg class="deco deco-star deco-star--sm" style="top:20%;left:56px;" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z" fill="currentColor"/></svg>
<img src="{{ foundingImage }}" alt="{{ site.founders }} at Nest Cafe">
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
