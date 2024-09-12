import { env } from "../env"

type GoalsPerDay = {
  id: string
  title: string
  completedAt: string
}

type SummaryResponse = {
  completed: number
  total: number
  goalsPerDay: GoalsPerDay[]
}[]

export const getSummary = async (): Promise<SummaryResponse> => {
  const response = await fetch(`${env.VITE_API_URL}/get-week-summary`)
  const data = await response.json()
  return data?.summary
}
