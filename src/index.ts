import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/ping', (c) => {
  return c.json({ pong: 'Hello, World' })
})


app.get('/platform', (c) => {
  return c.json({ platform: process.platform },200);
})


app.get('/generate', (c) => {
  const randomNumber = Math.floor(Math.random() * 100) 
  return c.text(`Random Number: ${randomNumber}`)
})



serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
