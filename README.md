# guacamole

[![JSR](https://jsr.io/badges/@aarvinr/guacamole?style=for-the-badge)](https://jsr.io/@aarvinr/guacamole)
[![Deno JS](https://img.shields.io/badge/deno-000000?style=for-the-badge&logo=deno&logoColor=white)](https://deno.com/)

A refreshingly simple UI library based on code generation.

## Usage

### Define a Component

You can use `guac` as a tagged template function to pass markup. Embed other
components with expressions.

```js
function App() {
  return guac`
    <p>Hello World!</p>
    ${Button("Click me!")}
  `;
}
```

### Conditional & Looped Rendering

You can use the built-in JavaScript operators & functions for rendering.

```js
function List() {
  const show = true;
  const list = ["Bob", "Ava"];

  if (show) {
    return list.map((item) => guac`<ul>${item}</ul>`).join("");
  }
}
```
