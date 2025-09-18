import express from 'express'
import cors from 'cors'
import routes from './routes/index.js'
import 'express-async-errors'
import ErrorHandleMiddleware from '@shared/middlewares/ErrorHandleMiddleware.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use(routes)
app.use(ErrorHandleMiddleware.handleError)

app.listen(3334, () => {
  console.log('Server started on port 3334!')
})