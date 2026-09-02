---
layout: layout.njk
title: Recipes
description: "Everything we've baked and served at our pop-ups so far."
extraScript: recipes-modal.js
---
<section class="recipes">
<div class="wrap">
<p class="kicker">recipes worth sharing</p>
<h1>Everything we've baked and served at our pop-ups so far.</h1>
<div class="recipes__grid">
{% for recipe in recipes %}
<button type="button" class="recipe-card" data-title="{{ recipe.title }}" data-image="{{ recipe.image }}" data-description="{{ recipe.description }}" data-price="{{ recipe.price }}">
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
<div class="recipe-modal__panel" role="dialog" aria-modal="true" aria-labelledby="recipe-modal-title">
<button type="button" class="recipe-modal__close" data-modal-close aria-label="Close">&times;</button>
<img class="recipe-modal__image" id="recipe-modal-image" src="" alt="">
<h2 id="recipe-modal-title"></h2>
<p id="recipe-modal-description"></p>
<p class="recipe-modal__price" id="recipe-modal-price"></p>
</div>
</div>
