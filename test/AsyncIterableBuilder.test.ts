import { expect, test } from 'bun:test'
import { AsyncIterableBuilder } from '../src/AsyncIterableBuilder.ts'
import { sleep } from './sleep.ts'

test('createAsyncIterable', async () => {
  const { iterable, next, done, isDone } = new AsyncIterableBuilder<number>()
  const iterator = iterable[Symbol.asyncIterator]
  iterator()
  next(1)
  next(2)
  const values: number[] = []
  const promise = (async () => {
    for await (const number of iterable) {
      values.push(number)
    }
    return true
  })()
  await sleep()
  expect(values).toEqual([1, 2])
  expect(isDone()).toBeFalse()
  next(3)
  next(4)
  await sleep()
  expect(values).toEqual([1, 2, 3, 4])
  expect(isDone()).toBeFalse()
  done()
  await sleep()
  expect(values).toEqual([1, 2, 3, 4])
  expect(isDone()).toBeTrue()
  expect(next).toThrow()
  expect(done).toThrow()
  expect(await promise).toBeTrue()
})
