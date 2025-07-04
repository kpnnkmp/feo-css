---
layout: base.njk
title: Equal
parent: layout
key: equal
github: true
---

The **Equal** layout makes all children equal size within the available space. This component is perfect for creating evenly distributed columns, cards, or any layout where you need all child elements to have the same dimensions regardless of their content.

## Example

```html
<div class="equal --gap-2">
  <div>Column 1</div>
  <div>Column 2 with more content</div>
  <div>Column 3</div>
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
      <td><code>--layout-gap</code></td>
      <td><code>0</code></td>
      <td>Gap between child elements</td>
    </tr>
    <tr>
      <td><code>--layout-items</code></td>
      <td><code>stretch</code></td>
      <td>Align items on cross axis</td>
    </tr>
    <tr>
      <td><code>--layout-justify</code></td>
      <td><code>start</code></td>
      <td>Justify content on main axis</td>
    </tr>
    <tr>
      <td><code>--layout-direction</code></td>
      <td><code>row</code></td>
      <td>Flex direction</td>
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
      <td><code>.--gap-*</code></td>
      <td>Controls spacing between items using Feo.css design tokens for size</td>
    </tr>
    <tr>
      <td><code>.--column</code>, <code>.--row</code></td>
      <td>Controls the flex direction</td>
    </tr>
    <tr>
      <td><code>.--start</code>, <code>.--end</code>, <code>.--center</code>, <code>.--stretch</code></td>
      <td>Controls cross-axis alignment of items</td>
    </tr>
    <tr>
      <td><code>.--justify-*</code></td>
      <td>Controls main-axis distribution of items (start, end, center, between, around)</td>
    </tr>
  </tbody>
</table>
</div>
