---
layout: base.njk
title: Scroll
parent: layout
key: scroll
github: true
---

The **Scroll** layout creates horizontal scrolling containers with optional snap behavior. This component is designed for creating smooth horizontal scrolling experiences with touch-friendly behavior, perfect for image carousels, card sequences, or any content that needs to scroll horizontally while maintaining usability across different devices.

## Example

```html
<div class="scroll --snappable --center">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
</div>
```

## Custom Properties

<div class="scroll">
<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--layout-items</code></td>
      <td><code>center</code></td>
      <td>Snap alignment for children when using --snappable modifier</td>
    </tr>
  </tbody>
</table>
</div>

## Class Utilities

<div class="scroll">
<table>
  <thead>
    <tr>
      <th>Class</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.--snappable</code></td>
      <td>Enables scroll snap with mandatory snapping to each child</td>
    </tr>
    <tr>
      <td><code>.--start</code>, <code>.--end</code>, <code>.--center</code>, <code>.--stretch</code></td>
      <td>Controls snap alignment when using the --snappable modifier</td>
    </tr>
  </tbody>
</table>
</div>
