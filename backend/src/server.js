/* eslint-disable no-unused-vars */
import express from "express"
import { CONNECT_DB, GET_DB } from "./configs/mongodb.js"
import env from "./configs/environment.js"

const START_SERVER = () => {
  const app = express()

  app.get("/", async (req, res) => {
    res.send("<h1>Welcome to Backend Server</h1>")
  })

  app.listen(env.POST, () => {
    console.log(`3: Backend server đang chạy tại: ${env.HOST}:${env.POST}`)
  })
}

//Chỉ khi kết nối database thành công thì mới start server
//Cách 1: Dùng anonymous Async function
;(async () => {
  try {
    console.log("1: Đang kết nối Database MongoDB...")
    await CONNECT_DB()
    console.log("2: Kết nối database thành công")

    START_SERVER()
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
})()
