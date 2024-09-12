import { API } from "../api"

type CreateGoalCompletionParams = {
  goalId: string
}

export const createGoalCompletion = async ({
  goalId,
}: CreateGoalCompletionParams) => {
  await fetch(`${API}/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ goalId }),
  })
}
