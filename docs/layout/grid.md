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
<div class="grid-4 --gap-2">
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
      <td><code>.--gap-*</code></td>
      <td>Controls spacing between items using Feo.css design tokens for size</td>
    </tr>
    <tr>
      <td><code>.grid-3</code></td>
      <td>Sets 3 columns</td>
    </tr>
    <tr>
      <td><code>.grid-4</code></td>
      <td>Sets 4 columns</td>
    </tr>
    <tr>
      <td><code>.grid-5</code></td>
      <td>Sets 5 columns</td>
    </tr>
    <tr>
      <td><code>.grid-6</code></td>
      <td>Sets 6 columns</td>
    </tr>
  </tbody>
</table>
</div>
