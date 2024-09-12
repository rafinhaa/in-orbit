import { API } from "../api"

type CreateGoalParams = {
  title: string
  desiredWeeklyFrequency: number
}

export const createGoal = async ({
  title,
  desiredWeeklyFrequency,
}: CreateGoalParams) => {
  await fetch(`${API}/goals`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, desiredWeeklyFrequency }),
  })
}
