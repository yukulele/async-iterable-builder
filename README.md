# async-query-selector

simplified `asyncIterable` builder using `next()` and `done()` functions

## Requirement

* [Bun](https://bun.sh/)

## Install

```bash
bun install
```

## Build

```bash
bun run build
```

## Test

```bash
bun run test
```

## Use

```typescript
import AsyncIterableBuilder from "async-iterable-builder"

const { next, done, iterable } = new AsyncIterableBuilder<number>()

let i = 1
const interval = setInterval(() => {
  if (i <= 3) return next(i++)
  clearInterval(interval)
  done()
}, 1000)

for await (const value of iterable) {
  console.log(value)
}
```