---
layout: base.njk
title: Dimensions
parent: utilities
key: dimensions
github: true
---

The **Dimensions** utilities provide width, max-width, and height controls for elements. These utilities offer a flexible approach to sizing elements with responsive max-width constraints based on breakpoint tokens, as well as common width and height values for layout purposes.

## Usage

The dimensions utilities include max-width classes that automatically set width to 100% while constraining the maximum width, plus standard width and height utilities for common sizing needs.

```html
<div class="maxw-3">Content constrained to a maximum width</div>

<div class="w-full h-full">Full width and height element</div>
```

The max-width utilities are particularly useful for creating responsive containers that scale with their parent but don't exceed readable widths on larger screens.

## Class Patterns

<div class="scroll">
<table>
  <thead>
    <tr>
      <th>Pattern</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.maxw-*</code></td>
      <td>Sets width to 100% with max-width constraint using Feo.css design tokens for breakpoints</td>
    </tr>
    <tr>
      <td><code>.w-full</code></td>
      <td>Sets width to 100%</td>
    </tr>
    <tr>
      <td><code>.h-full</code></td>
      <td>Sets height to 100%</td>
    </tr>
  </tbody>
</table>
</div>
