---
layout: base.njk
title: Margin
parent: utilities
key: margin
github: true
---

The **Margin** utilities provide margin spacing controls using design token values. These utilities offer a comprehensive set of margin classes for all sides and individual sides, enabling consistent spacing throughout your layouts without requiring custom CSS.

## Where are my padding classes?

You might be wondering, where are the padding classes? Well Feo.css is a little opinionated. The layers are build with 'layout' being the most important layer. Layout is about how elements are positioned in relation to eachother. Margin has an impact on that, padding, does not. If you want padding, copy over the [`src/utilities/margin.css`](https://github.com/kpnnkmp/feo-css/blob/main/src/utilities/margin.css) and replace margin with padding.

## Usage

The margin utilities follow a consistent naming pattern where you can apply margin to all sides or specific sides using the design token scale. This provides precise control over spacing while maintaining design system consistency.

```html
<div class="m-2">Margin on all sides</div>

<div class="mt-3 mb-1">Different top and bottom margins</div>

<div class="ml-2 mr-2">Horizontal margins only</div>
```

All margin utilities use the Feo.css design tokens for size values, ensuring consistent spacing that scales appropriately across your design system.

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
      <td><code>.m-*</code></td>
      <td>Applies margin to all sides using Feo.css design tokens for size</td>
    </tr>
    <tr>
      <td><code>.mt-*</code></td>
      <td>Applies margin-top using Feo.css design tokens for size</td>
    </tr>
    <tr>
      <td><code>.mb-*</code></td>
      <td>Applies margin-bottom using Feo.css design tokens for size</td>
    </tr>
    <tr>
      <td><code>.ml-*</code></td>
      <td>Applies margin-left using Feo.css design tokens for size</td>
    </tr>
    <tr>
      <td><code>.mr-*</code></td>
      <td>Applies margin-right using Feo.css design tokens for size</td>
    </tr>
  </tbody>
</table>
</div>
