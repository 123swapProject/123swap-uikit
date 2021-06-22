# 🥞 123swap UIkit

[![Version](https://img.shields.io/npm/v/@123swap/uikit)](https://www.npmjs.com/package/@pancakeswap-libs/uikit) [![Size](https://img.shields.io/bundlephobia/min/@123swap/uikit)](https://www.npmjs.com/package/@123swap/uikit)

123swap UIkit is a set of React components and hooks used to build pages on 123swap's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @123swap/uikit`

## Setup

### Theme

Before using 123swap UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@123swap/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@123swap/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://123swap.github.io/123swap-uikit/)
