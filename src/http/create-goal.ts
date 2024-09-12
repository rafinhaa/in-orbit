import { env } from "../env"

type CreateGoalParams = {
  title: string
  desiredWeeklyFrequency: number
}

export const createGoal = async ({
  title,
  desiredWeeklyFrequency,
}: CreateGoalParams) => {
  await fetch(`${env.VITE_API_URL}/goals`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, desiredWeeklyFrequency }),
  })
}
