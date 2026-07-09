---
layout: base.njk
title: Visually Hidden
parent: utilities
key: visually-hidden
github: true
---

The **Visually Hidden** utilities hide elements visually while keeping them accessible to screen readers and other assistive technologies. These utilities are essential for creating accessible interfaces where you need to provide information for screen reader users without affecting the visual design.

## Usage

Apply `.visually-hidden` or `.sr-only` to elements that should be available to assistive technologies but hidden from visual users.

```html
<h1>Page Title</h1>

<button>
  <span class="visually-hidden">Close dialog</span>
  <svg aria-hidden="true"><!-- close icon --></svg>
</button>

<div class="sr-only">Screen reader only instructions</div>
```

The utilities ensure that hidden content remains in the accessibility tree while being completely invisible to sighted users, maintaining proper focus order and keyboard navigation.

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
      <td><code>.visually-hidden</code></td>
      <td>Hides element visually but keeps it accessible to screen readers</td>
    </tr>
    <tr>
      <td><code>.sr-only</code></td>
      <td>Alternative name for visually-hidden (screen reader only)</td>
    </tr>
  </tbody>
</table>
</div>
