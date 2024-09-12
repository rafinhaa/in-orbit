import { Plus } from "lucide-react"
import { OutlineButton } from "./ui/outline-button"
import { getPendingGoals } from "../http/get-pending-goals"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { createGoalCompletion } from "../http/create-goal-completion"

export const PendingGoals = () => {
  const queryClient = useQueryClient()

  const { data } = useQuery({
    queryKey: ["pending-goals"],
    queryFn: getPendingGoals,
  })

  if (!data) return null

  const handleCompleteGoal = async (goalId: string) => {
    try {
      await createGoalCompletion({ goalId })

      queryClient.invalidateQueries({ queryKey: ["summary"] })
      queryClient.invalidateQueries({ queryKey: ["pending-goals"] })
    } catch (error) {
      alert("Erro ao concluir meta")
    }
  }

  return (
    <div className="flex flex-wrap gap-3">
      {data.map(goal => (
        <OutlineButton
          key={goal.id}
          disabled={goal.completionCount >= goal.desiredWeeklyFrequency}
          onClick={() => handleCompleteGoal(goal.id)}
        >
          <Plus className="size-4 text-zinc-600" />
          {goal.title}
        </OutlineButton>
      ))}
    </div>
  )
}
