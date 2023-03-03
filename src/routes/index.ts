import { Request, Response } from "express"
import user from "./users"

const Home = (req: Request, res: Response) => {
   console.log(req.hostname)
   res.send("Hello World")
}
const NotFound = (req: Request, res: Response) => {
   console.log(req.hostname)
   res.sendStatus(404)
}

export const routes = {
   Home,
   NotFound,
   user,
}
