# guacamole

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

```js
function List() {
	const show = true;
	const list = ["Bob", "Ava"];
	
	return guac`
		${show ? guac`
		  ${
		    list.map(item =>
			    guac`<ul>${item}</ul>`
		    ).join("");
	    }
		` : null}
	`;
}
```
