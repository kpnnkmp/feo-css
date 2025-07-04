---
layout: base.njk
title: Typography
parent: utilities
key: typography
github: true
---

The **Typography** utilities provide comprehensive font styling, sizing, and text formatting controls. These utilities cover font sizes using design tokens, text styling options, alignment controls, and advanced text overflow handling for creating consistent and readable typography throughout your application.

## Usage

Typography utilities can be combined to achieve various text styling effects. The utilities include responsive font sizing, text transformation, alignment, and overflow controls that work together to create flexible typography systems.

```html
<h1 class="size-4 bold text-center">Large, bold, centered heading</h1>

<p class="size-1 read-more" style="--line-count: 3;">
  This paragraph will be truncated to 3 lines with an ellipsis if the content
  exceeds that height.
</p>

<span class="size-0 uppercase ellipsis">
  Single-line text that truncates with ellipsis if too long
</span>
```

The utilities use Feo.css design tokens for consistent sizing and provide both single-line and multi-line text overflow solutions.

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
      <td><code>.size-*</code></td>
      <td>Sets font-size using Feo.css design tokens for size</td>
    </tr>
    <tr>
      <td><code>.bold</code></td>
      <td>Sets font-weight to 600</td>
    </tr>
    <tr>
      <td><code>.normal</code></td>
      <td>Sets font-weight to 400</td>
    </tr>
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
    <tr>
      <td><code>.lh-reset</code></td>
      <td>Resets line-height to 1</td>
    </tr>
  </tbody>
</table>
</div>
