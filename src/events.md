---
layout: layout.njk
title: Events
description: "Every Nest pop-up pairs a fresh menu with a topic we wanted to learn about together."
connectDescription: "We're cooking up what's next. Follow along, and we'll keep you posted."
connectButtonText: "Get on the list"
connectFormLink: /contact/
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
<p class="issues__list">{% for issue in issues %}<span class="tag">{{ issue }}</span>{% endfor %}</p>
</div>
</section>

<section class="events-listing">
<div class="wrap">
<p class="kicker">every gathering</p>
<p class="events-listing__intro">Each Nest pop-up pairs a fresh menu with a topic we wanted to learn about together. Here's where we've been so far.</p>
<div class="events-listing__list">
{% for event in collections.events %}
<a class="event-row" href="{{ event.url }}">
<div class="photo-frame"><img src="{{ event.data.image }}" alt="{{ event.data.title }}"></div>
<div class="event-row__copy">
<p class="event-row__meta">{{ event.data.number | pad2 }} &middot; {{ event.data.date | readableDate }}</p>
<h2>{{ event.data.title }}</h2>
<p class="tag-row">{% for theme in event.data.themes %}<span class="tag">{{ theme }}</span>{% endfor %}</p>
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
