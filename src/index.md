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
    <h2 class="overline">Services</h2>
    <dl class="dlist-cols:3">
      <div>
        <dt>Consultancy</dt>
        <dd>Auditing accessibility, UX or code quality at any stage of production.</dd>
      </div>
      <div>
        <dt>Development</dt>
        <dd>Transforming designs into usable interfaces with best practices and standards.</dd>
      </div>
      <div>
        <dt>UX Research</dt>
        <dd>Usability and accessibility engineering for inclusive components.</dd>
      </div>
    </dl>
  </div>
</section>

<section class="l-section">
  <div class="wrapper">
    <h2 class="overline">Skills</h2>
    <ul class="list-cols">
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
  <section class="l-concealer__spill l-section:fill theme theme:primary">
    <h2 class="sr-only">Testimonials</h2>
    <div class="l-slider">
      {%- set reference = "pete" -%}
      {%- include './_includes/modules/testimonials.njk' -%}

      {%- set reference = "simon" -%}
      {%- include './_includes/modules/testimonials.njk' -%}

      {%- set reference = "dipan" -%}
      {%- include './_includes/modules/testimonials.njk' -%}

      {%- set reference = "ludo" -%}
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
    <h2 class="overline">Tools</h2>
    <p>A non-exhaustive list of tools and systems I recently worked with:</p>
    <ul class="list-cols">
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
      <li>Developer Tools</li>
    </ul>
    <div style="column-count: 2">
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
    <h2 class="overline">Interests</h2>
    <p>Currently, I'm particularly focusing on the following topics:</p>
    <ul class="list-cols">
      <li>Usability</li>
      <li>Design systems</li>
      <li>Web vitals</li>
      <li>Web components</li>
      <li>Green web</li>
      <li>Scalable Modern CSS</li>
      <li>Dev flow automation</li>
      <li>Indie web</li>
      <li>React & JS frameworks</li>
    </ul>
  </div>
</section>
