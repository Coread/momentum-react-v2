# Momentum UI React

![npm (scoped)](https://img.shields.io/npm/v/@momentum-ui/react.svg)
[![license](https://img.shields.io/github/license/momentum-design/momentum-ui.svg?color=blueviolet)](https://github.com/momentum-design/momentum-ui/blob/master/react/LICENSE)

**`Momentum React v2`** is a resuable, component based, flexible React library available as
npm module. It provides set of UI components and utilities based on [Momentum Design](https://momentum.design).

The git repo can be cloned from [https://github.com/momentum-design/momentum-react-v2](https://github.com/momentum-design/momentum-react-v2).

Checkout the [documentation](https://momentum.design) for documentation and live examples.

## Goals
* **Independent** — pick and use only the components you need.
* **Styled** — override styles of components by `className` and `style` properties.
* **Customizable** — properties allow many different config options to suit your app.
* **Performant** - high performance guaranteed with use of CSS3 Flexbox and non-bloated architecture.
* **Reliable** — each component is rigorously tested.

## Getting Started

This module is currently not published on npm. To use it, build and host it somewhere then alias `@momentum-ui/react` (the old monorepo) to the new module location.

### Step 2. Import Momentum UI React components in your app

Use ES6 import statement to import the component that you want to use:

```jsx
import { Button } from '@momentum-ui/react';
// or
import Button from from '@momentum-ui/react/button';
...
...

<div className="container">
  <Button name="primary" size="large">Welcome to Momentum UI React !</Button>
</div>
```

## Tools & Frameworks

### Package manager

* [yarn](https://github.com/yarnpkg/yarn) - BSD-2-Clause

### Base framework

* [react](https://github.com/facebook/react) - MIT

* [react-dom](https://github.com/facebook/react) - MIT

### Momentum Design System Look & Feel

* [@momentum-ui/core](https://github.com/momentum-design/momentum-ui-core) - MIT
* [@momentum-ui/icons](https://github.com/momentum-design/momentum-ui-icons) - MIT

### ES6 Minifier

* [babili](https://github.com/babel/babili) - MIT

### ES6 Lint

* [eslint](https://github.com/eslint/eslint) - MIT

### CSS/SCSS Lint

* [stylelint](https://github.com/stylelint/stylelint) - MIT

### CSS Utility Tool

* [normalize](https://github.com/necolas/normalize.css) - MIT

* [postcss](https://github.com/postcss/postcss) - MIT

### JsUnit Testing framework

* [jest](https://github.com/facebook/jest) - BSD-3-Clause

* [enzyme](https://github.com/airbnb/enzyme) - MIT


## Contribution

Want to contribute? Why not go through [Developer's Guide](./GETTING_STARTED.md) to understand more technical details about the project and contribution guidelines to be adhered.

## Changelog

The changelog can be found [here](./CHANGELOG.md).

## Copyright

Copyright (c) 2021 Cisco Systems
