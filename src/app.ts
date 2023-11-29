import cors from 'cors'
import express from 'express'
import { Application, Request, Response } from 'express-serve-static-core'
import { StudentRouter } from './module/student/student.route'
import { UserRouter } from './module/users/users.routes'

//parsers
const app: Application = express()
app.use(cors())
app.use(express.json())

app.use('/api/v1/users', UserRouter)
app.use('/', StudentRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('hello World!')
})

export default app
