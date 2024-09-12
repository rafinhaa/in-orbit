import { env } from "../env"

type CreateGoalCompletionParams = {
  goalId: string
}

export const createGoalCompletion = async ({
  goalId,
}: CreateGoalCompletionParams) => {
  await fetch(`${env.VITE_API_URL}/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ goalId }),
  })
}
