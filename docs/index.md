---
layout: base.njk
title: Home
order: 1
key: home
---

Feo.css is a small CSS library (<5kB) that gives you a good starting point on any project. It provides you with sensible defaults for standard HTML elements, and some CSS classes around layout patterns and simple utility classes. A solid CSS foundation and architecture speeds up everything. Feo.css provides that.

{%- from "components/callout.njk" import callout -%}
{{ callout("Did you know?", "Feo's name was derived from a misread gaming character. But has since changed its meaning to 'front-end optimized'. It also happens to mean 'ugly' in Spanish. Happy coincidence, dont you think?") }}

## How to use it

Use the _unpkg.com_ CDN directly in your `head` of your HTML page:

```
<link rel="stylesheet" href="https://unpkg.com/feo-css/feo.min.css">
```

Import it in your (S)CSS:

```
@import "https://unpkg.com/feo-css/feo.min.css";
```

Or install it via NPM using your package manager of choice. From here you can import the `feo.min.css` fiel in your main CSS file using a local path.

```
npm install feo-css
yarn add feo-css
```

## Guiding principles

- HTML first
- Layout & class utilities
- Opinionated
- Utility-ready
- Components

The architecture of Feo.css follows the principles outlined [here](https://github.com/kpnnkmp/css-architecture).

```
@layer global, layout, components, utilities;
```
