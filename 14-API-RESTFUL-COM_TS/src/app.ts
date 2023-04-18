require("dotenv").config()
import express from 'express'
import config from 'config'
import router from './router'
import Logger from '../config/logger'
import morganMiddleware from './middleware/morganMiddleware'
import db from "../config/db"

const app = express()
app.use(express.json())

const port = config.get<number>("port")
app.use(morganMiddleware)
app.use("/api/", router)


app.listen(port, async () => {
    await db()
    Logger.info(`Aplicação está funcionando na porta: ${port}`)
});