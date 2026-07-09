---
layout: base.njk
title: Grid
parent: layout
key: grid
github: true
---

The **Grid** layout creates equal-width columns using CSS Grid with configurable column count. This component provides a simple way to create responsive grid layouts with automatic column sizing, making it perfect for card layouts, image galleries, or any content that needs to be displayed in a structured grid format.

## Example

```html
<div class="grid --amount-4" style="--layout-gap: 1rem">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
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
      <td><code>--layout-amount</code></td>
      <td><code>2</code></td>
      <td>Number of columns</td>
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
      <td><code>.--amount-2</code> … <code>.--amount-6</code></td>
      <td>Sets the number of columns (2 through 6)</td>
    </tr>
  </tbody>
</table>
</div>
