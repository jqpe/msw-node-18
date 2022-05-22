import { expect, test } from 'vitest'

import node18 from '../src/node_18'

test('works', async () => {
  expect(await node18()).toStrictEqual('test')
})
