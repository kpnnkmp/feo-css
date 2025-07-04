---
layout: base.njk
title: Pile
parent: layout
key: pile
github: true
---

The **Pile** layout stacks elements on top of each other in the same grid area, creating a layered depth effect. This component places all children in the same grid cell, making it perfect for overlays, layered content, background/foreground compositions, or creating visual depth in your designs.

## Example

```html
<div class="pile --center">
  <img src="background.jpg" alt="Background image" />
  <div class="overlay">Overlay content</div>
  <h2>Foreground text</h2>
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
      <td>Controls positioning of stacked items</td>
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
      <td><code>.--start</code>, <code>.--end</code>, <code>.--center</code>, <code>.--stretch</code></td>
      <td>Controls the positioning of stacked items within the pile</td>
    </tr>
  </tbody>
</table>
</div>
