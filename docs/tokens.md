---
layout: base.njk
title: Tokens
order: 2
key: tokens
---

Feo.css offers a limited set of design tokens, implemented in [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) (`--*`). These design tokens are used in the _layout_ layer of Feo.css. To align with modern CSS frameworks, class utilities exist that apply the the values of the design tokens to the API of the layout classes.

{% include "partials/callout-naming.njk" %}## Sizing

Feo.css offers design tokens on _sizing_ that can be used for spacing (e.g. margin and padding), font-sizes, or anything you can think of. The values are based on a combination of a few key principles:

- Opinionated.
- [Fluid](https://utopia.fyi/type/calculator/?c=320,16,1.2,1240,20,1.25,5,2,&s=0.75%7C0.5%7C0.25,1.5%7C2%7C3%7C4%7C6,s-l&g=s,l,xl,12). Sizes based on screen size.
- Adjustable. You can just overwrite the custom property values.
- Extensible. Feo.css is build in a way that you can add new tokens or change the naming, and only have to add a very small amount of classes.

<div>
  <table>
    <thead>
      <tr>
        <th>Token name</th>
        <th>Value at 320px</th>
        <th>Value at 1240px</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>--token-size-000</code></td>
        <td>11.11px</td>
        <td>12.80px</td>
      </tr>
      <tr>
        <td><code>--token-size-00</code></td>
        <td>13.33px</td>
        <td>16.00px</td>
      </tr>
      <tr>
        <td><code>--token-size-0</code></td>
        <td>16.00px</td>
        <td>20.00px</td>
      </tr>
      <tr>
        <td><code>--token-size-1</code></td>
        <td>19.20px</td>
        <td>25.00px</td>
      </tr>
      <tr>
        <td><code>--token-size-2</code></td>
        <td>23.04px</td>
        <td>31.25px</td>
      </tr>
      <tr>
        <td><code>--token-size-3</code></td>
        <td>27.65px</td>
        <td>39.06px</td>
      </tr>
      <tr>
        <td><code>--token-size-4</code></td>
        <td>33.18px</td>
        <td>48.38px</td>
      </tr>
      <tr>
        <td><code>--token-size-5</code></td>
        <td>39.81px</td>
        <td>61.04px</td>
      </tr>
    </tbody>
  </table>
</div>

## Breakpoints

Tokens used as points that can be used, whenever your UI is
breaking. Scaling between the values is based on
`1.33`.

<div>
  <table>
    <thead>
      <tr>
        <th>Token name</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>--token-bp-000</code></td>
        <td>11.31rem</td>
      </tr>
      <tr>
        <td><code>--token-bp-00</code></td>
        <td>15.04rem</td>
      </tr>
      <tr>
        <td><code>--token-bp-0</code></td>
        <td>20rem</td>
      </tr>
      <tr>
        <td><code>--token-bp-1</code></td>
        <td>20rem</td>
      </tr>
      <tr>
        <td><code>--token-bp-2</code></td>
        <td>26.6rem</td>
      </tr>
      <tr>
        <td><code>--token-bp-3</code></td>
        <td>35.38rem</td>
      </tr>
      <tr>
        <td><code>--token-bp-4</code></td>
        <td>47.05rem</td>
      </tr>
      <tr>
        <td><code>--token-bp-5</code></td>
        <td>62.58rem</td>
      </tr>
    </tbody>
  </table>
</div>

## Adding new design tokens

The design tokens of Feo.css can be easily adjusted, like any other (global) CSS custom property. Extension of the design tokens is also possible, but requires a little more work than just adding new tokens.

When you add new tokens to `--token-size-*`, you need to add the following classes as well, in the correct `@layer`:

- `.--gap-*` in `layer(layout)` for controlling gaps in may layout classes.
- `.m-*`, `.mt-*`, `.mb-*` , `.ml-*` and `.mr-*` in `layer(utilities)` for controlling margins.
- `.size-*` in `layer(utilities)` to control font-sizes.

If you add tokens to `--token-bp-*`, the following classes need to be adjusted.

- `.--threshold-*` in `layer(layout)` to control different aspects on dimensions of the layout container or children in layout classes.
- `.--maxw-*` in `layer(utilities)` to control the `max-width` property.
