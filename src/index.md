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
      {%- set reference = "pete" -%}
      {%- include './_includes/modules/testimonials.njk' -%}

      {%- set reference = "simon" -%}
      {%- include './_includes/modules/testimonials.njk' -%}

      {%- set reference = "dipan" -%}
      {%- include './_includes/modules/testimonials.njk' -%}

      {%- set reference = "ludo" -%}
      {%- include './_includes/modules/testimonials.njk' -%}

      {%- set reference = "david" -%}
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
        <p>I have been exposed to several environments, systems and libraries in various languages.</p>
        <p>Understanding of MVC and MVVM concepts allows me to get onboard quickly and work on UI components regardless of the framework used.</p>
      </div>
      {%- set reference = "jordan" -%}
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
