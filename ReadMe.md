# Design Implementation Challenge

## Getting Started

Install all dependencies and then start a local development server.

```bash
# The double ampersand is a shortcut for running two commands in sequence

npm i && npm run dev
```

## Code Guidelines

### Prefer functional components over class components

### Prefer regular function delcarations over arrow functions

✅ Do

```js
export default function MyComponent() {
  return <>lorem ipsum</>;
}
```

❌ Don't

```js
const MyComponent = () => {
  return <>lorem ipsum</>;
};
```

## Technical Details

### Using Material UI

The [AppBar component](https://mui.com/material-ui/api/app-bar/) can receive any of the props available to a [Paper component](https://mui.com/material-ui/react-paper/#elevation), affording access to the Material Design spec's elevation and shadow system. To remove the shadow, set the elevation property to 0.

## Challenge Details

Paticipating in this challenge, it was necessary to call an API and represent this exact Figma mockup:
![image](https://user-images.githubusercontent.com/12516538/201192230-8b66f9f7-26d3-4556-88a5-b03b9572431c.png)
