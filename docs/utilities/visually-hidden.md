---
layout: base.njk
title: Visually Hidden
parent: utilities
key: visually-hidden
github: true
---

The **Visually Hidden** utilities hide elements visually while keeping them accessible to screen readers and other assistive technologies. These utilities are essential for creating accessible interfaces where you need to provide information for screen reader users without affecting the visual design.

## Usage

Apply `.visually-hidden` or `.sr-only` to elements that should be available to assistive technologies but hidden from visual users. Use the focusable variants for elements that should become visible when they receive keyboard focus, such as skip links.

```html
<h1>Page Title</h1>
<a href="#main-content" class="visually-hidden-focusable">
  Skip to main content
</a>

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
    <tr>
      <td><code>.visually-hidden-focusable</code></td>
      <td>Shows hidden element when it receives focus (for skip links)</td>
    </tr>
    <tr>
      <td><code>.sr-only-focusable</code></td>
      <td>Alternative name for visually-hidden-focusable</td>
    </tr>
  </tbody>
</table>
</div>
