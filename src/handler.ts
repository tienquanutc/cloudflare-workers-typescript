export async function handleRequest(request: Request): Promise<Response> {
    return new Response('Hello World', { headers: { 'content-type': 'text/plain' } })
}