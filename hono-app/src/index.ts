import { Hono } from 'hono'

const app = new Hono()

async function authMiddleware(c: any , next: any) {
  if(c.req.header("Authorization"))
    {
      //  Do validation here
      await next()
    }
    else{
      return c.text("You do not have access to it.")
    }
}


app.use(authMiddleware)

app.get('/', authMiddleware ,(c) => {
  return c.text('Hello Hono!')
})

app.post("/user", (c) => {
  return c.text("Hello Hono!");
})

export default app
