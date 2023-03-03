import { Request, Response, Router } from "express"
const userRoute = Router()
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
userRoute.get("/users", async (_req: Request, res: Response) => {
   try {
      const users = await prisma.user.findMany()
      return res.send({ message: "Success", users })
   } catch (error) {
      return res.send({ error })
   }
})

userRoute.get("/user/:id", async (req: Request, res: Response) => {
   const { id } = req.params
   try {
      const user = await prisma.user.findUnique({
         where: {
            id: Number(id),
         },
      })
      return res.send({ message: "Success", user })
   } catch (error) {
      return res.send({ error })
   }
})

userRoute.post("/users", async (req: Request, res: Response) => {
   console.log(req.body)
   const {
      first_name,
      last_name,
      address,
      postcode,
      phone_number,
      email,
      username,
      password,
      active,
   } = req.body
   try {
      const users = await prisma.user.create({
         data: {
            first_name,
            last_name,
            address,
            postcode,
            phone_number,
            email,
            username,
            password,
            active,
         },
      })
      return res.send({ message: "Success", users })
   } catch (error) {
      return res.send({ error })
   }
})

userRoute.delete("/user/:id", async (req: Request, res: Response) => {
   const { id } = req.params
   try {
      const user = await prisma.user.delete({
         where: {
            id: Number(id),
         },
      })
      return res.send({ message: "Success", user })
   } catch (error) {
      return res.send({ error })
   }
})

userRoute.delete("/deluser/", async (_req: Request, res: Response) => {
   try {
      const user = await prisma.user.deleteMany({})
      return res.send({ message: "Success", user })
   } catch (error) {
      return res.send({ error })
   }
})

userRoute.patch("/user/:id", async (req: Request, res: Response) => {
   const { active } = req.query
   const { id } = req.params
   try {
      const user = await prisma.user.update({
         where: {
            id: Number(id),
         },
         data: {
            // @ts-ignore
            active: JSON.parse(active?.toLowerCase()),
         },
      })
      return res.send({ message: "Success", user })
   } catch (error) {
      return res.send({ error })
   }
})

export default userRoute
