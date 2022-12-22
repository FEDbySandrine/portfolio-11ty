---
title:    "Home"
layout:   "base"
featured_image:  "social-homepage@2x"
---

<section class="l-section l-concealer">
  <div class="l-concealer__cover l-section:fill v-align">
    <div class="wrapper">
      {%- include 'components/content-intro.njk' -%}
    </div>
  </div>
  <div class="l-concealer__spill l-banner theme theme:secondary">
    <div class="wrapper">
      {%- set opentowork = true -%}
      {%- set icoSize = 'xl' -%}
      {%- include 'components/id-card.njk' -%}
    </div>
    </div>
</section>

<section class="l-section">
  <div class="wrapper">
    {%- include 'components/services.njk' -%}
  </div>
</section>

<section class="l-section">
  <div class="wrapper">
    {%- set reference = "skills" -%}
    {%- include 'components/competences.njk' -%}
  </div>
</section>

<div class="l-concealer">
  <section class="l-concealer__spill l-section:fill theme theme:primary">
    <h2 class="sr-only">Testimonials</h2>
    <div class="l-slider" tabindex="0">
      {%- set reference = ["pete", "simon", "dipan", "ludo", "david"] -%}
      {%- include 'components/testimonials.njk' -%}
    </div>
  </section>

  <section class="l-section l-concealer__cover">
    <div class="wrapper">
      <h2 class="overline">Projects</h2>
        {%- include 'components/projects.njk' -%}
    </div>
  </section>
</div>

<section class="l-section">
  <div class="wrapper">
    {%- set reference = "tools" -%}
    {%- include 'components/competences.njk' -%}
    <div class="l-cols--var">
      <div>
        {{ competences.interests.content | safe }}
      </div>
      {%- set reference = ["jordan"] -%}
      {%- include 'components/testimonials.njk' -%}
    </div>
  </div>
</section>

<section class="l-section">
  <div class="wrapper">
    {%- set reference = "interests" -%}
    {%- include 'components/competences.njk' -%}
  </div>
</section>
