---
layout: base.njk
title: Hover Group
parent: components
key: hover-group
github: true
---

The **Hover Group** component creates interactive hover effects where non-hovered siblings fade out and hovered elements can optionally scale up. This creates a focus effect that draws attention to the hovered item while de-emphasizing others, commonly used in image galleries, card grids, or navigation menus.

## Usage

Apply the `.hover-group` class to a parent container, and it will automatically create hover interactions between its direct children. The effects only activate on devices that support hover to ensure proper touch device compatibility. Set `--hover-grow` above `1` to also scale the hovered child up.

```html
<div class="hover-group">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<div class="hover-group" style="--hover-grow: 1.175">
  <img src="image1.jpg" alt="Image 1" />
  <img src="image2.jpg" alt="Image 2" />
  <img src="image3.jpg" alt="Image 3" />
</div>
```

When a user hovers over one child element, all other siblings will fade to `--hover-opacity`, while the hovered element scales up by `--hover-grow` for additional emphasis.

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
