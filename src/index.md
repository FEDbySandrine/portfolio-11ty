---
title:    "Home"
layout:   "base.njk"
preview:  "social-homepage@2x"
---

<section class="l-section l-concealer">
  <div class="l-concealer__cover l-section:fill v-align">
    <div class="wrapper">
      {%- include './_includes/modules/content-intro.njk' -%}
    </div>
  </div>
  <div class="l-concealer__spill l-banner theme theme:secondary">
    <div class="wrapper">
      {%- set opentowork = true -%}
      {%- set icoSize = 'xl' -%}
      {%- include './_includes/modules/id-card.njk' -%}
    </div>
    </div>
</section>

<section class="l-section">
  <div class="wrapper">
    {%- include './_includes/modules/services.njk' -%}
  </div>
</section>

<section class="l-section">
  <div class="wrapper">
    {%- set reference = "skills" -%}
    {%- include './_includes/modules/competences.njk' -%}
  </div>
</section>

<div class="l-concealer">
  <section class="l-concealer__spill l-section:fill theme theme:primary">
    <h2 class="sr-only">Testimonials</h2>
    <div class="l-slider" tabindex="0">
      {%- set reference = ["pete", "simon", "dipan", "ludo", "david"] -%}
      {%- include './_includes/modules/testimonials.njk' -%}
    </div>
  </section>

  <section class="l-section l-concealer__cover">
    <div class="wrapper">
      <h2 class="overline">Projects</h2>
        {%- include './_includes/modules/projects.njk' -%}
    </div>
  </section>
</div>

<section class="l-section">
  <div class="wrapper">
    {%- set reference = "tools" -%}
    {%- include './_includes/modules/competences.njk' -%}
    <div class="l-cols--var">
      <div>
        {{ competences.interests.content | safe }}
      </div>
      {%- set reference = ["jordan"] -%}
      {%- include './_includes/modules/testimonials.njk' -%}
    </div>
  </div>
</section>

<section class="l-section">
  <div class="wrapper">
    {%- set reference = "interests" -%}
    {%- include './_includes/modules/competences.njk' -%}
  </div>
</section>
