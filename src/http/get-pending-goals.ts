import { API } from "../api"

type PendingGoalsResponse = {
  id: string
  title: string
  desiredWeeklyFrequency: number
  completionCount: number
}[]

export const getPendingGoals = async (): Promise<PendingGoalsResponse> => {
  const response = await fetch(`${API}/pending-goals`)
  const data = await response.json()
  return data?.pendingGoals
}
