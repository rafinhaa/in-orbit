import { API } from "../api"

type GoalsPerDay = {
  id: string
  title: string
  completedAt: string
}

type SummaryResponse = {
  completed: number
  total: number
  goalsPerDay: Record<string, GoalsPerDay[]>
}

export const getSummary = async (): Promise<SummaryResponse> => {
  const response = await fetch(`${API}/get-week-summary`)
  const data = await response.json()
  return data?.summary
}
