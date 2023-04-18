require("dotenv").config()
import express from 'express'
import config from 'config'
import router from './router'
import Logger from '../config/logger'
import db from "../config/db"

const app = express()
app.use(express.json())

const port = config.get<number>("port")

app.use("/api/", router)

app.listen(port, async () => {
    await db()
    Logger.info(`Aplicação está funcionando na porta: ${port}`)
});