---
title:    "Home"
layout:   "base.njk"
preview:  "social-homepage@2x"
---

<section class="l-section l-concealer">
  <div class="l-concealer__cover v-align">
    <div class="container">
      {%- include './_includes/modules/content-intro.njk' -%}
    </div>
  </div>
  <div class="l-concealer__spill l-banner theme theme:secondary">
    <div class="container">
      {%- set opentowork = true -%}
      {%- include './_includes/modules/id-card.njk' -%}
    </div>
    </div>
</section>

<section class="l-section">
  <div class="container">
    <h2 class="overline">Services</h2>
    <dl style="column-count: 3;">
      <dt>Consultancy</dt>
      <dd>Auditing accessibility, UX or code quality at any stage of production.</dd>
      <dt>Development</dt>
      <dd>Transforming designs into usable interfaces.</dd>
      <dt>UX Research</dt>
      <dd>Usability and accessibility engineering for inclusive components.</dd>
    </dl>
  </div>
</section>

<section class="l-section">
  <div class="container">
    <h2 class="overline">Skills</h2>
    <ul style="column-count: 3;">
      <li>HTML markup proficiency</li>
      <li>ARIA demystification</li>
      <li>Advanced CSS mastery</li>
      <li>Bulletproof responsive design</li>
      <li>WCAG literacy</li>
      <li>Screen readers grasp</li>
      <li>Design systems & pattern libs</li>
      <li>Top-notch consistency focus</li>
      <li>Usability wisdom</li>
      <li>DOM object manipulation JS</li>
      <li>Debugging dexterity</li>
      <li>Version control abilities</li>
    </ul>
  </div>
</section>

<div class="l-concealer">
  <section class="l-concealer__spill l-banner theme theme:primary">
    {%- set reference = "dipan" -%}
    {%- include './_includes/modules/testimonials.njk' -%}

    {%- set reference = "trent" -%}
    {%- include './_includes/modules/testimonials.njk' -%}
  </section>

  <section class="l-section l-concealer__cover">
    <div class="container">
      <h2 class="overline">Tools</h2>
      <p>A non-exhaustive list of tools and systems I recently worked with:</p>
      <ul style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 10px; grid-auto-flow: dense;">
        <li>Sass</li>
        <li>NPM</li>
        <li>Git</li>
        <li>Github</li>
        <li>Storybook</li>
        <li>Figma</li>
        <li>Miro</li>
        <li>jQuery</li>
        <li>Eleventy</li>
        <li>Shopify</li>
        <li>Webflow</li>
        <li>Wordpress</li>
      </ul>
      <div style="column-count: 2">
        <div>
          <p>I have been exposed to several environments, systems and libraries in various languages.</p>
          <p>Understanding of MVC and MVVM concepts allows me to get onboard quickly and work on UI components regardless of the framework used.</p>
        </div>
        {%- set reference = "jordan" -%}
        {%- include './_includes/modules/testimonials.njk' -%}
      </p>
    </div>
  </section>
</div>
