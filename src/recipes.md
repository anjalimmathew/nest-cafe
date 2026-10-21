---
layout: layout.njk
title: Recipes
description: "Everything we've baked and served at our pop-ups so far."
extraScript: recipes-modal.js
recipePositions:
  - { left: 34.82, top: 8.65 }
  - { left: 65.18, top: 8.65 }
  - { left: 87.5, top: 29.81 }
  - { left: 12.5, top: 29.81 }
  - { left: 5.36, top: 84.62 }
  - { left: 27.68, top: 86.54 }
  - { left: 87.5, top: 56.73 }
  - { left: 12.5, top: 56.73 }
  - { left: 50, top: 84.62 }
  - { left: 72.32, top: 86.54 }
  - { left: 94.64, top: 84.62 }
---
<section class="recipes">
<svg class="deco deco-star" style="top:8%;left:6%;" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z" fill="currentColor"/></svg>
<svg class="deco deco-star deco-star--sm" style="top:28%;right:10%;" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z" fill="currentColor"/></svg>
<svg class="deco deco-star" style="bottom:14%;left:12%;" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z" fill="currentColor"/></svg>
<svg class="deco deco-star deco-star--sm" style="bottom:20%;right:8%;" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z" fill="currentColor"/></svg>
<div class="wrap">
<p class="kicker">recipes worth sharing</p>
<h1>Everything we've baked and served at our pop-ups so far.</h1>
<div class="recipes__grid recipes__grid--constellation">
<img class="recipes__centerpiece" src="/images/logo-no-text.png" alt="" aria-hidden="true">
<svg class="recipes__constellation" viewBox="0 0 1120 1040" preserveAspectRatio="none" aria-hidden="true">
<g class="recipes__constellation-lines">
<line x1="211.3" y1="247.2" x2="318.7" y2="152.8"/>
<line x1="485" y1="90" x2="635" y2="90"/>
<line x1="801.3" y1="152.8" x2="908.7" y2="247.2"/>
<line x1="980" y1="405" x2="980" y2="495"/>
<line x1="140" y1="495" x2="140" y2="405"/>
<line x1="154.7" y1="887.6" x2="215.3" y2="892.4"/>
<line x1="404.7" y1="892.4" x2="465.3" y2="887.6"/>
<line x1="654.7" y1="887.6" x2="715.3" y2="892.4"/>
<line x1="904.7" y1="892.4" x2="965.3" y2="887.6"/>
</g>
<g class="recipes__constellation-bright">
<g transform="translate(45,30) scale(1.6)"><path transform="translate(-12,-10)" d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z"/></g>
<g transform="translate(1080,470) scale(1.6)"><path transform="translate(-12,-10)" d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z"/></g>
<g transform="translate(560,700) scale(1.9)"><path transform="translate(-12,-10)" d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z"/></g>
<g transform="translate(960,760) scale(1.4)"><path transform="translate(-12,-10)" d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z"/></g>
</g>
<g class="recipes__constellation-dots">
<circle cx="1075" cy="25" r="7"/>
<circle cx="1065" cy="170" r="6"/>
<circle cx="55" cy="170" r="6"/>
<circle cx="40" cy="470" r="7"/>
<circle cx="160" cy="760" r="6"/>
</g>
</svg>
{% for recipe in recipes %}
{% set pos = recipePositions[loop.index0] %}
<button type="button" class="recipe-card" style="left:{{ pos.left }}%;top:{{ pos.top }}%;" data-title="{{ recipe.title }}" data-image="{{ recipe.image }}" data-description="{{ recipe.description }}" data-price="{{ recipe.price }}">
<div class="recipe-card__photo">
<svg class="recipe-card__curve" viewBox="0 0 210 56" aria-hidden="true">
<path id="curve-{{ loop.index }}" d="M 10,54 A 175,175 0 0 1 200,54" fill="none"/>
<text><textPath href="#curve-{{ loop.index }}" startOffset="50%" text-anchor="middle">{{ recipe.title }}</textPath></text>
</svg>
<div class="recipe-card__photo-inner"><img src="{{ recipe.image }}" alt="{{ recipe.title }}"></div>
</div>
<p class="recipe-card__price">{{ recipe.price }}</p>
</button>
{% endfor %}
</div>
</div>
</section>

<div class="recipe-modal" id="recipe-modal" hidden>
<div class="recipe-modal__backdrop" data-modal-close></div>
<div class="recipe-modal__frame" id="recipe-modal-frame">
<div class="recipe-modal__panel" role="dialog" aria-modal="true" aria-labelledby="recipe-modal-title">
<div class="recipe-modal__media">
<img class="recipe-modal__image" id="recipe-modal-image" src="" alt="">
</div>
<div class="recipe-modal__body">
<h2 id="recipe-modal-title"></h2>
<p id="recipe-modal-description"></p>
<p class="recipe-modal__price" id="recipe-modal-price"></p>
</div>
</div>
<div class="recipe-modal__tail" id="recipe-modal-tail" aria-hidden="true"></div>
<button type="button" class="recipe-modal__close" data-modal-close aria-label="Close">&times;</button>
</div>
</div>
