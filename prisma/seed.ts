import { PrismaClient } from "@prisma/client"
import { faker } from "@faker-js/faker"

const prisma = new PrismaClient()

const count = [...Array(50).keys()]
const generateUser = () => {
   return {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      address: faker.address.cityName(),
      postcode: faker.address.countryCode(),
      phone_number: faker.phone.number(),
      email: faker.internet.email(),
      username: faker.internet.userName(),
      password: faker.internet.password(),
      active: true,
   }
}

/**
 * For each coffee name, create a Coffee record in the DB
 */
function seedCoffee() {
   Promise.all(count.map(() => prisma.user.create({ data: generateUser() })))
      .then(() => console.info("[SEED] Succussfully create coffee records"))
      .catch((e) => console.error("[SEED] Failed to create coffee records", e))
}

seedCoffee()
