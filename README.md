# AsyncIterable Builder

[![npm version](https://img.shields.io/npm/v/async-iterable-builder.svg?style=flat-square)](https://www.npmjs.org/package/async-iterable-builder)

simplified `asyncIterable` builder using `next()` and `done()` functions


## Install

```bash
npm install async-iterable-builder
```

## Use

```typescript
import AsyncIterableBuilder from './dist/AsyncIterableBuilder.js'

const { next, done, isDone, iterable } = new AsyncIterableBuilder()
```

see [example.ts](./example.ts)
