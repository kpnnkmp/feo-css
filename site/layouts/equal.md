---
layout: base.njk
title: Equal
parent: layouts
key: equal
---

Makes a wrapper fill the available space and makes all the children equal size within that space. Does not wrap.

## Implementation

```
<div class="equal">
  ...
</div>
```

## API

<div>
  <table>
    <thead>
      <tr><th>Custom property</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>--layout-gap</code></td><td><code>0</code></td><td>Sets the <code>gap</code> of the targeted element</tr>
      <tr><td><code>--layout-items</code></td><td><code>center</code></td><td>Sets the <code>align-items</code> of the targeted element</tr>
      <tr><td><code>--layout-direction</code></td><td><code>row</code></td><td>Sets the <code>flex-direction</code> of the targeted element</tr>
    </tbody>
  </table>
</div>

## Utility classes

<div>
  <table>
    <thead>
      <tr><th>Class name</th><th>Required?</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>--gap-{z}</code></td><td></td><td>Controls the <code>--layout-gap</code> API</tr>
      <tr><td><code>--column/--row</code></td><td></td><td>Controls the <code>--layout-direction</code> API</tr>
      <tr><td><code>--start/--end/--center/--stretch</code></td><td></td><td>Controls the <code>--layout-items</code> API</tr>
    </tbody>
  </table>
</div>
