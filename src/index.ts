import express from "express"
import { routes } from "./routes"
import { middlewares } from "./middlewares"

const msg = () => {
   const PORT = process.env.PORT || 3000
   console.log(`✅✅✅  App Running in Port: ${PORT} 🚀🚀🚀 💯`)
}

export const main = () => {
   const app = express()
   const port = process.env.PORT || 3000

   app.listen(port, msg)
   // if (process.env.NODE_ENV !== "test") {
   //    app.listen(port, msg)
   // }
   middlewares.defaultMiddleware(app)

   app.get("/", routes.Home)

   app.use("/api", routes.user)
   // app.use("/api", routes.posts)
   app.get("*", routes.NotFound)
}

main()
