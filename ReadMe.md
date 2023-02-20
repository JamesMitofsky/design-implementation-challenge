# Design Implementation Challenge

## Getting Started

Install all dependencies and then start a local development server.

```bash
# The double ampersand is a shortcut for running two commands in sequence

npm i && npm run dev
```

## Code Guidelines

### Prefer short circuit evaluation

This is done to avoid unnecessary nesting and improve readability. Read more about cyclomatic complexity [here](https://en.wikipedia.org/wiki/Cyclomatic_complexity).

✅ Do

```js
if (!isAuthenticated) return;
```

❌ Don't

```js
if (isAuthenticated) {
  // do something
}
```

### Prefer functional components over class components

✅ Do

```js
export default function MyComponent() {
  return <>lorem</>;
}
```

❌ Don't

```js
class MyComponent extends React.Component {
  render() {
    return <>lorem</>;
  }
}
```

### Prefer traditional delcarations over arrow functions

✅ Do

```js
export default function MyComponent() {
  return <>lorem</>;
}
```

❌ Don't

```js
const MyComponent = () => {
  return <>lorem ipsum</>;
};
```

### Prefix component folders with underscores

✅ Do

```
./components/_groupName/ComponentName.tsx
```

## Technical Details

### Material UI

#### Reducing the AppBar elevation

The [AppBar component](https://mui.com/material-ui/api/app-bar/) can receive any of the props available to a [Paper component](https://mui.com/material-ui/react-paper/#elevation), affording access to the Material Design spec's elevation and shadow system. To remove the shadow, set the elevation property to 0.

#### Customizing the theme

Some values can't be applied on a global level but are an important part of the style guide. These include:

- font family
- border radius: `.5rem`

## Challenge Details

Paticipating in this challenge, it was necessary to call an API and represent this exact Figma mockup:
![image](https://user-images.githubusercontent.com/12516538/201192230-8b66f9f7-26d3-4556-88a5-b03b9572431c.png)

### The Mockup vs The Implementation

To compare this implementation to the mockup, open browser dev tools, switch to custom browser size, and set the following:

- width: 1100px
- height: 900px

> This gives a better frame of refernce since it is the size of the mockup.

### Evaluating Success

- [ ] The page is responsive
- [ ] Different borders and unique styles were applied to cards based on type
- [ ] Cards are componentized and constructed with CSS Grid
- [ ] A skeleton loading state prevents the user from becoming disoriented
