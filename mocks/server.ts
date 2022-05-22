import { rest } from 'msw'
import { setupServer } from 'msw/node'

export const server = setupServer(
  rest.get('https://httpbin.org/uuid', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.text('test'))
  })
)
