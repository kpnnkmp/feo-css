---
layout: base.njk
title: Flex
parent: layout
key: flex
github: true
---

The **Flex** layout provides a default flexbox utility with configurable properties and helper classes. This component serves as a flexible foundation for creating various layouts with full control over flex properties, direction, alignment, and spacing.

## Example

```html
<div class="flex --gap-2 --justify-between">
  <div class="grow">Main content area</div>
  <div class="no-shrink">Sidebar</div>
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
      <td><code>--layout-direction</code></td>
      <td><code>row</code></td>
      <td>Flex direction</td>
    </tr>
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
    <tr>
      <td><code>.wrap</code></td>
      <td>Enables flex-wrap</td>
    </tr>
    <tr>
      <td><code>.grow</code></td>
      <td>Sets flex-grow: 1</td>
    </tr>
    <tr>
      <td><code>.no-shrink</code></td>
      <td>Sets flex-shrink: 0</td>
    </tr>
    <tr>
      <td><code>.self-start</code>, <code>.self-center</code>, <code>.self-stretch</code>, <code>.self-end</code></td>
      <td>Individual align-self properties for specific flex items</td>
    </tr>
  </tbody>
</table>
</div>
