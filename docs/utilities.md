---
layout: base.njk
title: Utilities
order: 7
key: utilities
---

Utility classes are classes that do one thing, and one thing well. They are different _class utilities_, like the one used in
[layouts layer](/layout).

{% include "partials/callout-utilities.njk" %}

Feo.css offers a very limited set of utility classes: small, single-purpose helpers that are independent of design tokens. Utilities tied to a design scale — spacing, sizing, and similar — are intentionally left to your own project, since Feo.css ships very few tokens of its own.

{% set items = collections.utilities %}
{% include "partials/sublist.njk" %}
