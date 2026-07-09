---
layout: base.njk
title: Layout Items
parent: utilities
key: layout-items
github: true
---

The **Layout Items** utilities control the cross-axis alignment of a single child inside a flex or grid layout. Where a layout's `--layout-items` property aligns all children at once, these classes override that alignment for one specific item.

## Usage

Apply a `.self-*` class to a direct child of any flex or grid layout to align just that item on the cross axis.

```html
<div class="flex" style="--layout-items: start">
  <div>Aligned to start</div>
  <div class="self-end">Aligned to end</div>
  <div class="self-stretch">Stretched</div>
</div>
```

## Class Patterns

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
      <td><code>.self-start</code></td>
      <td>Aligns the item to the start of the cross axis</td>
    </tr>
    <tr>
      <td><code>.self-center</code></td>
      <td>Centers the item on the cross axis</td>
    </tr>
    <tr>
      <td><code>.self-stretch</code></td>
      <td>Stretches the item across the cross axis</td>
    </tr>
    <tr>
      <td><code>.self-end</code></td>
      <td>Aligns the item to the end of the cross axis</td>
    </tr>
  </tbody>
</table>
</div>
