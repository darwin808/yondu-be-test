import cookieParser from "cookie-parser"
import express, { Application } from "express"
import cors from "cors"
import helmet from "helmet"

const defaultMiddleware = (app: Application) => {
   app.use(cookieParser())
   app.use(express.json())
   app.use(
      cors({
         credentials: true,
         origin: "*",
      }),
   )
   app.use(helmet())
}

export const middlewares = {
   defaultMiddleware,
}
