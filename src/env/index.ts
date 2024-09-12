import z from "zod"

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
})

const envParser = envSchema.safeParse(import.meta.env)

if (!envParser.success) {
  const errorMessage = "Invalid environment variables"
  console.error(errorMessage, envParser.error.format())
  throw new Error(errorMessage)
}

export const env = envParser.data
