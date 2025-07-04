---
layout: base.njk
title: Layout
order: 3
key: layout
---

Feo.css offers classes for standardized layout patterns that you see on almost every website or application. Many layouts are based on [Every Layout](https://every-layout.dev) by Heydon Pickering and Andy Bell. But the implementation differs. In addition, more layout patterns are added to Feo.css as well.

{% include "partials/callout-utilities.njk" %}

The available layout classes in Feo.css are listed below.

{% set items = collections.layout %}
{% include "partials/sublist.njk" %}
