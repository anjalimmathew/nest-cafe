---
layout: layout.njk
title: Events
description: "Every Nest pop-up pairs a fresh menu with a topic we wanted to learn about together."
connectDescription: "We're cooking up what's next. Follow along, and we'll keep you posted."
connectButtonText: "Get on the list"
connectFormLink: /contact/
extraScript: events-slider.js
issues:
  [
    "Mental Health",
    "Wellness",
    "Nutrition",
    "Community",
    "Belonging",
    "Conversations",
    "Civic Engagement",
  ]
---

<section class="issues">
<div class="wrap">
<p class="kicker">issues we care about</p>
<div class="issues__list">{% for issue in issues %}<div class="issue-item"><p class="issue-item__label">{{ issue }}</p><img class="issue-item__cup" src="/images/decor-steam-cup.png" alt="" aria-hidden="true"></div>{% endfor %}</div>
</div>
</section>

<section class="events-listing">
<div class="wrap">
<div class="events-listing__header">
<div>
<p class="kicker">every gathering</p>
<h2 class="events-listing__title">Every gathering</h2>
<p class="events-listing__intro">Each Nest pop-up pairs a fresh menu with a topic we wanted to learn about together. Here's where we've been so far.</p>
</div>
<div class="events-listing__arrows">
<button type="button" class="events-listing__arrow" data-slider-prev aria-label="Previous event">&larr;</button>
<button type="button" class="events-listing__arrow" data-slider-next aria-label="Next event">&rarr;</button>
</div>
</div>
<div class="events-listing__list" data-slider-track>
{% for event in collections.events %}
<a class="event-row" href="{{ event.url }}">
<div class="photo-frame">
<img src="{{ event.data.image }}" alt="{{ event.data.title }}">
<div class="event-row__hover-tags">{% for theme in event.data.themes %}<span class="tag tag--dark">{{ theme }}</span>{% endfor %}</div>
</div>
<div class="event-row__copy">
<p class="event-row__meta">{{ event.data.number | pad2 }} &middot; {{ event.data.date | readableDate }}</p>
<h2>{{ event.data.title }}</h2>
<p class="event-row__topic">{{ event.data.excerpt }}</p>
<p class="event-row__desc">{{ event.data.listingDescription }}</p>
<span class="link">Step inside</span>
</div>
</a>
{% endfor %}
</div>
</div>
</section>

<section class="connect">
<div class="wrap connect__row">
<div class="connect__copy">
<h2 >more soon!</h2>
<p>{{ connectDescription }}</p>
</div>
<a class="button" href="{{ connectFormLink }}">{{ connectButtonText }}</a>
</div>
</section>
