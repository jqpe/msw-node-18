export default async function node18(): Promise<string> {
  return await (await fetch('https://httpbin.org/uuid')).text()
}
