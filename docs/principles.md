---
layout: base.njk
title: Principles
order: 2
key: principles
---

## Separate structure from skin

There are many common and overlapping (responsive) layout patterns. By separating these and reusing them as much as possible, you can achieve consistency in implementation, and maintainability in code. We see this coming back in [Cube CSS](https://cube.fyi/), on which Feo.css is (loosely) based. Feo.css gives you the tools for composable layouts using the [layout](../layout) layer and [utility](../utilities) layer. Feo.css does provide a few exceptions in the [utility](../utilities) layer:

- Interaction classes such as [`click-area`](../utilities/click-area).
- Helpers for [typography](../utilities/typography).
- Utilities that are not really classified as structure or skin (e.g. [`no-print`](../utilities/no-print)).

{% include "partials/callout-padding.njk" %}

## Layout, utilities, components, and ... utilities.

Feo.css is a variation of [Cube CSS](https://cube.fyi/). It follows the a slightly different order of the different layers.

1. Layout
2. Utilities
3. Components
4. Utilities.

As you can see, on the implementation level, you go past the utility layer, twice. First you try to solve things as much as possible with layout and utilities. If that is not possible, you write _components_ (old-school CSS yo). But keep your components light. If there is an exception (e.g. `margin-top`) for one implementation of your component, use a utility class! Due to this reason, Feo.css implements the following sequence of layers.

```
@layer global, layout, components, utilities;
```

**Note**: the components layer is not part of Feo.css at its core. But the layer is _defined_. For specificity reasons, make sure to scope your components correctly in the `@layer components`.

## API-first CSS

Many classes have properties that are not the same in all scenarios. The `.switcher` example you want to be able to adjust the gap or the width that triggers the orientation change.

You could add a class that alters that property. That is not the case for all APIs. The example `.switcher` pattern used before shows that `var(--p-bp-0)` is used in a calculation. The token is used in a child selector (`>`), not directly on `.switcher`. Another scenario is a token that is used for multiple properties.

_To avoid overwriting all these scenarios one by one, we define clear APIs through custom properties._

Let’s take the previous `.switcher` layout class as an example. Instead if directly setting the properties, we define two APIs for the class to control it.

```css
.switcher {
  --layout-gap: var(--p-size-0);
  --layout-width: var(--p-bp-0);
}
```

With this API different methods can be used to control the results.
