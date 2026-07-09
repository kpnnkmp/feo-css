---
layout: base.njk
title: Tokens
order: 3
key: tokens
---

Design tokens are the single source of truth for the visual values in a project — sizing, spacing, colors, breakpoints — expressed as [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) (`--*`).

Feo.css deliberately ships **almost no tokens of its own**. Earlier versions came with a full sizing and breakpoint scale, but that is the first thing most projects want to replace — a design system is where your project expresses its own meaning, and a framework has none. Instead, Feo.css gives you sensible defaults on bare HTML elements and reserves the `tokens` layer as the **first** layer in the cascade for you to fill:

```css
@layer tokens, global, layout, components, utilities;
```

Because it sits below `global`, `layout`, and `components`, everything you define there flows upward into the rest of the framework, while staying easy to override.

{% include "partials/callout-naming.njk" %}

## Defining your tokens

Add your own tokens in the `tokens` layer. Keep two tiers: _primitives_ are raw, intent-free values; _semantic_ tokens alias those primitives into project meaning. Global styles, layout, and components should only ever read the semantic tier.

```css
@layer tokens {
  :root {
    /* primitives — raw values, no opinion */
    --p-size-0: 1rem;
    --p-size-1: 1.25rem;
    --p-size-2: 1.5625rem;

    /* semantic — intent-based aliases of primitives */
    --space: var(--p-size-1);
    --measure: 60ch;
  }
}
```

Scale tokens are named from a `0` base and work outward: `-0` is the base, `-1`/`-2` step up, and `--1`/`--2` step down (see the naming convention above). A fluid scale pairs well with this — the [Utopia calculator](https://utopia.fyi/type/calculator/) generates `clamp()`-based steps that grow with the viewport.

## Custom media and fonts

Two other project-wide concerns belong in the `tokens` layer. Loading local fonts with `@font-face` sits naturally alongside your token definitions. Responsive breakpoints are best expressed as [`@custom-media`](https://developer.mozilla.org/en-US/docs/Web/CSS/@custom-media) rules so the same query is reused everywhere:

```css
@custom-media --sm (min-width: 40rem);
```

One gotcha: `@custom-media` only resolves when imported **outside** of any `@layer`. Keep it in its own file and import it without a `layer()` wrapper, while the rest of your tokens stay inside `layer(tokens)`:

```css
@import "tokens/custom-media.css"; /* note: outside any layer */
@import "tokens/fonts.css" layer(tokens);
```

## Feeding tokens into layout and components

Every layout and component exposes its configuration as custom properties — `--layout-gap`, `--layout-threshold`, `--hover-grow`, and so on. Set those to your tokens, either in your own classes for reuse or inline for one-offs:

```css
@layer utilities {
  .stack {
    --layout-gap: var(--space);
  }
}
```

```html
<div class="flow" style="--layout-gap: var(--space)">…</div>
```

This is why Feo.css no longer ships `.--gap-*`, `.size-*`, or `.--threshold-*` style scale utilities: those classes only made sense against a built-in scale. With the scale now living in your project, you wire up the handful of values you actually use and nothing more.
