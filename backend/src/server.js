/* eslint-disable no-unused-vars */
import express from "express"
import cors from "cors"
import morgan from "morgan"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import env from "./configs/environment.js"

const app = express()

//Connect DB
mongoose
  .connect(env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("2: Message Configs MongoDB: Connected to MongoDB!"))
  .catch((error) => console.error(error))

app.use(cors())
app.use(bodyParser.json())
// app.use(morgan("dev"))

app.listen(env.PORT, () => {
  console.log(
    `1: Hello ${env.AUTHOR}! Server is running on '${env.HOST}:${env.PORT}'`
  )
})
