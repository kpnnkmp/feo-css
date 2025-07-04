---
layout: base.njk
title: Hover Group
parent: utilities
key: hover-group
github: true
---

The **Hover Group** utility creates interactive hover effects where non-hovered siblings fade out and hovered elements can optionally scale up. This creates a focus effect that draws attention to the hovered item while de-emphasizing others, commonly used in image galleries, card grids, or navigation menus.

## Usage

Apply any class containing "hover-group" to a parent container, and the utility will automatically create hover interactions between its direct children. The effects only activate on devices that support hover to ensure proper touch device compatibility.

```html
<div class="hover-group">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<div class="hover-group-grow">
  <img src="image1.jpg" alt="Image 1" />
  <img src="image2.jpg" alt="Image 2" />
  <img src="image3.jpg" alt="Image 3" />
</div>
```

When a user hovers over one child element, all other siblings will fade to the specified opacity, while the hovered element can optionally scale up for additional emphasis.

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
      <td><code>--hover-opacity</code></td>
      <td><code>0.4</code></td>
      <td>Opacity for non-hovered siblings</td>
    </tr>
    <tr>
      <td><code>--hover-grow</code></td>
      <td><code>1</code></td>
      <td>Scale factor for hovered elements (1 = no scaling)</td>
    </tr>
  </tbody>
</table>
</div>

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
      <td><code>[class*="hover-group"]</code></td>
      <td>Base hover group functionality with fade effects</td>
    </tr>
    <tr>
      <td><code>.hover-group-grow</code></td>
      <td>Preset that includes moderate growth effect (scale: 1.175)</td>
    </tr>
  </tbody>
</table>
</div>
