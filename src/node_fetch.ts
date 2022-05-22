import fetch from 'node-fetch'

export default async function nodeFetch(): Promise<string> {
  return await (await fetch('https://httpbin.org/uuid')).text()
}
