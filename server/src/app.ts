require('dotenv').config()

import express, { Application } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import bodyParser from 'body-parser'

const app: Application = express()

// Routes
import authRoutes from './routes/auth.routes'

// Settings
app.set('port', process.env.PORT || 3000)

// Middelware
app.use(cors())
app.use(helmet.hidePoweredBy())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())

// User of routes
app.use('/api/auth', authRoutes)

export default app
