---
layout: layout.njk
title: Contact
description: "Say hello, book a pop-up, or tell us what you'd like to see at the next Nest Cafe."
---
<section class="contact">
<div class="wrap contact__row">
<div class="contact__info">
<h1>We'd love to hear from you, come say hi!</h1>
<ul class="contact-info-list">
<li>
<svg class="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"/></svg>
<a href="mailto:{{ site.email }}">{{ site.email }}</a>
</li>
<li>
<svg class="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
<a href="{{ site.instagramLink }}">{{ site.instagramHandle }}</a>
</li>
<li>
<svg class="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1 0 3 5 9.71C17 12 17 10 17 9a5 5 0 0 0-5-5"/></svg>
<span>{{ site.city }}</span>
</li>
</ul>
</div>

<div class="contact__form-wrap">
<p class="contact__form-tab">leave an order at the counter</p>
<form class="contact__form" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
<input type="hidden" name="form-name" value="contact">
<p class="hidden" hidden>
<label>Don't fill this out if you're human: <input name="bot-field"></label>
</p>
<label for="name">Name</label>
<input type="text" id="name" name="name" required>
<label for="email">Email</label>
<input type="email" id="email" name="email" required>
<label for="reason">What can we get started?</label>
<select id="reason" name="reason">
<option>Book a pop-up</option>
<option>Suggest a topic to spotlight</option>
<option>Collaborate with us</option>
<option>Just saying hi</option>
</select>
<label for="note">Your note</label>
<textarea id="note" name="note" rows="4"></textarea>
<button type="submit" class="button">Send message</button>
</form>
</div>
</div>
</section>
