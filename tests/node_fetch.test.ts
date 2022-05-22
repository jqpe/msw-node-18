import { expect, test } from 'vitest'

import nodeFetch from '../src/node_fetch'

test('works', async () => {
  expect(await nodeFetch()).toStrictEqual('test')
})
