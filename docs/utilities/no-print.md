---
layout: base.njk
title: No Print
parent: utilities
key: no-print
github: true
---

The **No Print** utility hides elements when printing, allowing you to control which content appears in printed documents. This is essential for removing interactive elements, decorative content, or navigation that serves no purpose in printed formats while maintaining their visibility on screen.

## Usage

Apply the `.no-print` class to any element that should be hidden when users print the page. The utility uses `!important` to ensure the hiding behavior takes precedence over other display properties.

```html
<div class="no-print">
  <button>Interactive button (hidden in print)</button>
</div>

<nav class="no-print">
  <a href="/">Home</a>
  <a href="/about">About</a>
</nav>

<main>
  <p>This content will appear in both screen and print versions.</p>
</main>
```

This utility is commonly used for navigation menus, buttons, form controls, advertisements, or any decorative elements that are not relevant for printed documents.
