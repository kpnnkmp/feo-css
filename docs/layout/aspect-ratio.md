---
layout: base.njk
title: Aspect Ratio
parent: layout
key: aspect-ratio
github: true
---

The **Aspect Ratio** utilities maintain consistent aspect ratios for elements, ensuring proper proportions across different screen sizes and contexts. This component is essential for responsive images, video containers, cards, and any content that needs to maintain specific width-to-height relationships regardless of the container size.

## Example

```html
<div class="ratio --16x9">
  <img src="video-thumbnail.jpg" alt="Video thumbnail" />
</div>

<div class="ratio --1x1">
  <iframe src="https://example.com/embed" title="Embedded content"></iframe>
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
      <td><code>--ratio</code></td>
      <td><code>auto</code></td>
      <td>The aspect ratio value</td>
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
      <td><code>.--1x1</code></td>
      <td>Square aspect ratio (1:1)</td>
    </tr>
    <tr>
      <td><code>.--16x9</code></td>
      <td>Widescreen aspect ratio (16:9)</td>
    </tr>
    <tr>
      <td><code>.--2x1</code></td>
      <td>Panoramic aspect ratio (2:1)</td>
    </tr>
    <tr>
      <td><code>.--3x2</code></td>
      <td>Traditional photo aspect ratio (3:2)</td>
    </tr>
  </tbody>
</table>
</div>
