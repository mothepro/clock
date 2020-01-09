# [`<lit-clock>`](https://mothepro.github.io/clock/)

> Simple clock element

[![npm](https://img.shields.io/npm/v/@mothepro/lit-clock.svg)](https://www.npmjs.com/package/@mothepro/lit-clock)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/owner/my-element)

## Install

`yarn add @mothepro/lit-clock`

## How to Use

| Attribute | Type | Description |
| --------- | ---- | ----------- |
| `pause` | `boolean` | Whether the clock should be incrementing |
| `pause-on-blur` | `boolean` | Whether the clock should continue incrementing when the document loses focus |
| `ticks` | `number` | The number of seconds the clock should start with. *Defaults to `0`* |

<!--
```
<custom-element-demo>
  <template>
    <script type="module" src="//unpkg.com/es-module-shims@0.4.6/dist/es-module-shims.min.js"></script>
    <script type="importmap-shim" src="https://mothepro.github.io/clock/import-map.json"></script>
    <script type="module-shim" src="//unpkg.com/@mothepro/lit-clock/dist/esm/index.js"></script>
 
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
Pause on blur clock
<lit-clock pause-on-blur ticks=0></lit-clock>
```
