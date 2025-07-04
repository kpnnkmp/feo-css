---
layout: base.njk
title: Click Area
parent: utilities
key: click-area
github: true
---

The **Click Area** utility makes an entire container clickable by expanding the clickable area of a child anchor element. This is particularly useful for card layouts, list items, or any container where you want the entire area to be interactive, not just the text link itself.

## Usage

Apply the `.click-area` class to a container that contains an anchor element. The utility creates an invisible overlay that covers the entire parent container, making the whole area clickable while maintaining proper semantic HTML structure.

```html
<div class="click-area">
  <h3>Card Title</h3>
  <p>Some description text here...</p>
  <a href="/read-more">Read more</a>
</div>
```

**Note:** This utility is not compatible with table rows as the `::after` pseudo-element is not supported on table rows in Safari and Chrome browsers.
