import AsyncIterableBuilder from './dist/AsyncIterableBuilder.js'

function interval(interval = 0, limit = Number.POSITIVE_INFINITY) {
  let count = 0
  const { next, done, iterable } = new AsyncIterableBuilder()
  const intervalId = setInterval(() => {
    next(count++)
    if (count <= limit) return
    clearInterval(intervalId)
    done()
  }, interval)
  return iterable
}

for await (const count of interval(300, 5)) {
  console.info(count)
}
