# holy-albatross

> A responsive flex container for React, based on the article: [The Flexbox Holy Albatross](https://heydonworks.com/article/the-flexbox-holy-albatross/) by [Heydon Pickering](https://heydonworks.com/) 

[![NPM](https://img.shields.io/npm/v/holy-albatross.svg)](https://www.npmjs.com/package/holy-albatross) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install
Download [latest.tgz](https://github.com/JesperBry/holy-albatross/releases/), then

```bash
npm install --save <path to holy-albatross-@latest.tgz>
```

## Usage

```jsx
import React, { Component } from 'react'

import { Container } from 'holy-albatross';
import 'holy-albatross/dist/index.css';

class Example extends Component {
  render() {
    return (
      <Container>
        ... YOUR UI ELEMENTS
      </Container>
    );
  }
}
```

### Available props
See example with props [here](https://github.com/JesperBry/holy-albatross/blob/master/example/src/App.js)

| Key | Type Expected | Default value |  Description |
| ---- | ---- | ------------- | ------------ |
| `gap` | String/Number | '1' | Controls the gap between the child components inside the container. Expects a number or a quoted number ('1') |
| `gutter` | Boolean | False | When set the container gets a default side gutter of 25% |
| `maxWidth` | String/Number | 'none' | Sets the maxWidth for the container (using rem as units). Expects a number or a quoted number ('1') |
| `paddingTop` | String/Number | 'none' | Sets the top padding for the container (using rem as units). Expects a number or a quoted number ('1') |
| `paddingBottom` | String/Number | 'none' | Sets the bottom padding for the container (using rem as units). Expects a number or a quoted number ('1') |

## License

MIT © [JesperBry](https://github.com/JesperBry)
