---
layout: base.njk
title: Layout
order: 5
key: layout
---

Feo.css offers classes for standardized layout patterns that you see on almost every website or application. Many layouts are based on [Every Layout](https://every-layout.dev) by Heydon Pickering and Andy Bell. But the implementation differs. In addition, more layout patterns are added to Feo.css as well.

{% include "partials/callout-utilities.njk" %}

Every layout exposes its configuration through `--layout-*` custom properties (see each layout's _Custom Properties_ table). Feo.css no longer ships a preset size scale, so values like `--layout-gap` and `--layout-threshold` are set directly to whatever value you need — a raw length or, preferably, one of your own project's tokens:

```html
<div class="switcher" style="--layout-gap: 1rem; --layout-threshold: 20rem">
  <!-- ... -->
</div>
```

Non-scale modifiers (alignment, direction, column count, aspect ratio) remain available as `.--*` class utilities.

The available layout classes in Feo.css are listed below.

{% set items = collections.layout %}
{% include "partials/sublist.njk" %}
