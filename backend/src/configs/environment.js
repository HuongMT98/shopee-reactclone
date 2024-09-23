import "dotenv/config"

const env = {
  MONGODB_URL: process.env.MONGODB_URL,
  DATABASE_NAME: process.env.DATABASE_NAME,
  AUTHOR: process.env.AUTHOR,

  HOST: process.env.HOST,
  PORT: process.env.PORT,

  BUILD_MODE: process.env.BUILD_MODE,
}

export default env
