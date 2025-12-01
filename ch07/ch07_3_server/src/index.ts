import {createServer} from "http"
// import express from 'express'

import { getPublicDirPath } from "./config";
import {makeDir} from './utils'
import {createExpressApp} from './express'
import type {MongoDB} from './mongodb'
import {connectAndUseDB} from './mongodb'

makeDir(getPublicDirPath())

const connectCallback = (db:MongoDB)=>{
  const hostname = "localhost",
  port = 4000
  createServer(createExpressApp(db)).listen(port, ()=>console.log(`connect http://${hostname}:${port}`))

}
connectAndUseDB(connectCallback,'ch07')
// createServer((req, res) => {
//   console.log("req.url", req.url)
//   console.log("req.method", req.method)
//   console.log("req.headers", req.headers)
//   res.write("Hello World")
//   res.end()
// }).listen(port, () => console.log(`connect http://${hostname}:${port}`))


// prettier-ignore
// const app = express()
// .get('/',(req, res)=>{
//   res.json({message: 'Hello express World'})
// })

// createServer(app).listen(port, ()=>console.log(`connect http://${hostname}:${port}`))

//express/index.ts로 분리
// createServer(createExpressApp()).listen(port, ()=>console.log(`connect http://${hostname}:${port}`))