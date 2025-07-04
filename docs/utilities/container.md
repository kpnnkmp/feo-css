---
layout: base.njk
title: Container
parent: utilities
key: container
github: true
---

The **Container** utility creates a CSS container query context for responsive design. This modern approach to responsive design allows components to adapt based on their container's size rather than the viewport size, enabling more flexible and reusable components.

## Usage

Apply the `.container` class to elements that should establish a container query context. This enables you to write CSS rules that respond to the container's dimensions using `@container` queries.

```html
<div class="container">
  <div class="responsive-component">Content that adapts to container size</div>
</div>
```

The utility sets up the container with inline-size containment and assigns a default container name that can be referenced in container queries. It also includes `min-width: 0` to prevent overflow issues when content doesn't wrap properly.

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
      <td><code>--container-name</code></td>
      <td><code>layoutContainer</code></td>
      <td>The container name for queries</td>
    </tr>
  </tbody>
</table>
</div>
