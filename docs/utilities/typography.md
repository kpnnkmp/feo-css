---
layout: base.njk
title: Typography
parent: utilities
key: typography
github: true
---

The **Typography** utilities provide text styling, transformation, alignment, and overflow controls. Font sizing and weight are handled by the global element defaults and your own project tokens — these utilities cover the formatting decisions that sit on top of that baseline.

## Usage

Typography utilities can be combined to achieve various text styling effects. They cover text transformation, alignment, and both single-line and multi-line overflow handling.

```html
<h2 class="text-center italic">Centered, italic heading</h2>

<p class="read-more" style="--line-count: 3;">
  This paragraph will be truncated to 3 lines with an ellipsis if the content
  exceeds that height.
</p>

<span class="uppercase ellipsis">
  Single-line text that truncates with ellipsis if too long
</span>
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
      <td><code>--line-count</code></td>
      <td><code>2</code></td>
      <td>Number of lines to show for .read-more class</td>
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
      <td><code>.italic</code></td>
      <td>Sets font-style to italic</td>
    </tr>
    <tr>
      <td><code>.fl</code></td>
      <td>Capitalizes the first letter only</td>
    </tr>
    <tr>
      <td><code>.uppercase</code></td>
      <td>Transforms text to uppercase</td>
    </tr>
    <tr>
      <td><code>.lowercase</code></td>
      <td>Transforms text to lowercase</td>
    </tr>
    <tr>
      <td><code>.capitalize</code></td>
      <td>Capitalizes the first letter of each word</td>
    </tr>
    <tr>
      <td><code>.text-center</code></td>
      <td>Centers text alignment</td>
    </tr>
    <tr>
      <td><code>.text-start</code></td>
      <td>Aligns text to the start (left in LTR)</td>
    </tr>
    <tr>
      <td><code>.text-end</code></td>
      <td>Aligns text to the end (right in LTR)</td>
    </tr>
    <tr>
      <td><code>.read-more</code></td>
      <td>Multi-line text truncation with customizable line count</td>
    </tr>
    <tr>
      <td><code>.ellipsis</code></td>
      <td>Single-line text truncation with ellipsis</td>
    </tr>
  </tbody>
</table>
</div>
