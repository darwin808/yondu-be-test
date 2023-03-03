import request from "supertest"
import { main as app } from "../index"

describe("Post Endpoints", () => {
   it("should create a new post", async () => {
      console.log(app)
      const res = await request(app).get("/")
      console.log(res)
      // expect(res.statusCode).toEqual(200)
   })
})
