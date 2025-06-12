import { Hono } from 'hono'

const app = new Hono()

app.post('/api/v1/signup', (c) => {
	return c.text('Hello Hono!')
})

app.post('/api/v1/signin', () => {

})

app.post('/api/v1/blog', () => {
})

app.put('/api/v1/blog', () => {
})

app.get('/api/v1/blog/:id', () => {

})

export default app
