---
layout: base.njk
title: Components
order: 6
key: components
---

Components are reusable UI elements that carry their own context, state, or visual identity. Unlike [layouts](/layout), which only describe how elements relate to each other in space, components style what something _is in a context_. They expose their configuration through component-level custom properties, so you adjust their behaviour without touching internal CSS.

Feo.css ships a minimal set of components; most component styling belongs to your own project.

{% set items = collections.components %}
{% include "partials/sublist.njk" %}
