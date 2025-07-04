---
layout: base.njk
title: Counted
parent: utilities
key: counted
github: true
---

The **Counted** utility automatically sets a CSS custom property with the number of direct children an element has. This enables dynamic styling based on child count without requiring JavaScript, making it useful for adaptive layouts that need to respond to the number of items they contain.

## Usage

Apply the `.counted` class to a parent element, and it will automatically provide a `--count` custom property that contains the number of direct children (up to 10). This count can then be used in CSS calculations or other layout components.

```html
<div class="counted">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <!-- --count will be set to 3 -->
</div>
```

The utility works particularly well with layout components like the switcher layout, where you can use `var(--count)` in calculations to create adaptive behavior based on the number of child elements.

## Custom Properties (Read-only)

<div class="scroll">
<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Range</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--count</code></td>
      <td><code>1-10</code></td>
      <td>The number of direct children</td>
    </tr>
  </tbody>
</table>
</div>
