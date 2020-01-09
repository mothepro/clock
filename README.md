# `<lit-clock>`

> Simple clock element

[![npm](https://img.shields.io/npm/v/@mothepro/lit-clock.svg)](https://www.npmjs.com/package/@mothepro/lit-clock)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/owner/my-element)

## Install

`yarn add @mothepro/lit-clock`

## How to Use

```html
<script type="module" src="//unpkg.com/@mothepro/lit-clock/dist/esm/index.js"></script>

<lit-clock></lit-clock>
```

| Attribute | Type | Description |
| --------- | ---- | ----------- |
| `pause` | `boolean` | Whether the clock should be incrementing |
| `pause-on-blur` | `boolean` | Whether the clock should continue incrementing when the document loses focus |
| `ticks` | `number` | The number of seconds the clock should start with. *Defaults to `0`* |
