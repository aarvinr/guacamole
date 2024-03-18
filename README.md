# guacamole

A refreshingly simple UI library based on code generation.

## Usage

### Define a Component

You can use `guac` as a tagged template function to pass markup. Embed other
components with expressions.

```jsx
function App() {
  return guac`
    <p>Hello World!</p>
    ${Button("Click me!")}
  `;
}
```
