---
layout: base.njk
title: Z-Index
parent: utilities
key: z-index
github: true
---

The **Z-Index** utility provides a high z-index value to ensure elements appear above all other content. This utility is designed for elements that need to be positioned at the top of the stacking context, such as modals, tooltips, dropdown menus, or other overlay components that must appear above all other page content.

## Usage

Apply the `.z-indexed` class to elements that need to be positioned above all other content. The utility uses `calc(infinity)` which resolves to a very high number in most modern browsers, ensuring maximum stacking priority.

```html
<div class="modal z-indexed">Modal content that appears above everything</div>

<div class="tooltip z-indexed">Tooltip text</div>

<nav class="dropdown-menu z-indexed">
  <a href="#">Menu item 1</a>
  <a href="#">Menu item 2</a>
</nav>
```

This utility is particularly useful for overlay components where you need to guarantee they appear above all other page content without having to calculate or compete with other z-index values in your application.
