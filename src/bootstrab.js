env.config()
import env from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import router from './routers/v1.routes.js'
const bootstrap = (app) =>
{
	app.use(express.json())
	app.use(morgan('dev'))
	app.use('/api/v1',router)
	app.use((err, req, res, next) => {
		const { message, status, stack } = err
		res.status(status || 500).json({
			message,
			...(process.env.MODE === 'development'&& { stack }),
		})
	})
}
export default bootstrap
