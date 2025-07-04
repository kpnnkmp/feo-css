---
layout: base.njk
title: Center
parent: layout
key: center
github: true
---

The **Center** layout horizontally centers layout elements with a configurable maximum width. This component is designed to create centered containers that won't exceed a specified threshold width, making it ideal for content areas that need to remain readable and well-proportioned across different screen sizes.

## Example

```html
<div class="center --threshold-4">
  <h1>Centered Content</h1>
  <p>
    This content will be centered horizontally and won't exceed the threshold
    width.
  </p>
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
      <td><code>--layout-threshold</code></td>
      <td><code>100%</code></td>
      <td>Maximum width of the centered element</td>
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
      <td><code>.--threshold-*</code></td>
      <td>Controls the maximum width using Feo.css design tokens for breakpoints</td>
    </tr>
  </tbody>
</table>
</div>
