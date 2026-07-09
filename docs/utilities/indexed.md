---
layout: base.njk
title: Indexed
parent: utilities
key: indexed
github: true
---

The **Indexed** utility automatically assigns index numbers to direct children as CSS custom properties. This enables dynamic styling based on each child's position without requiring JavaScript, making it useful for creating staggered animations, numbered lists, or any layout that needs to differentiate styling based on child position.

## Usage

Apply the `.indexed` class to a parent element, and each direct child will automatically receive an `--index` custom property containing its position number (1-10). This index can then be used in CSS calculations, animations, or other styling rules.

```html
<div class="indexed">
  <div>Item 1 (--index: 1)</div>
  <div>Item 2 (--index: 2)</div>
  <div>Item 3 (--index: 3)</div>
</div>
```

The utility is particularly useful for creating staggered animations where each child element animates with a delay based on its position, or for applying progressive styling changes across a series of elements.

## Browser support

`.indexed` is progressively enhanced:

- **Baseline** — each child gets its `--index` from `:nth-child()` rules, capped at **10** children.
- **Enhanced** — in browsers that support [`sibling-index()`](https://developer.mozilla.org/en-US/docs/Web/CSS/sibling-index), every child receives its **exact** position, with no 10-item cap.

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
      <td><code>--index</code></td>
      <td><code>1-10</code></td>
      <td>The child's position number</td>
    </tr>
  </tbody>
</table>
</div>
