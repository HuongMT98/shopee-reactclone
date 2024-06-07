/* eslint-disable no-unused-vars */
import express from "express"
import { CONNECT_DB, GET_DB } from "./configs/mongodb.js"

const START_SERVER = () => {
  const app = express()
  const host = "http://localhost"
  const port = 5000

  app.get("/", async (req, res) => {
    res.send("Hello World!")
  })

  app.listen(port, () => {
    console.log(`3: Backend server đang chạy tại: ${host}:${port}`)
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
