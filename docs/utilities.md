---
layout: base.njk
title: Utilities
order: 5
key: utilities
---

Utility classes are classes that do one thing, and one thing well. They are different _class utilities_, like the one used in
[layouts layer](/layout).

{% include "partials/callout-utilities.njk" %}

Feo.css offers a very limited set of utility classes. Only common utility classes unrelated to design tokens are given, and a limited set of utility classes based on the Feo.css design tokens are included.

{% set items = collections.utilities %}
{% include "partials/sublist.njk" %}
