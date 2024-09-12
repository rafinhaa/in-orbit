import { Dialog } from "./components/ui/dialog"
import { CreateGoal } from "./components/create-goal"
import { EmptyGoal } from "./components/empty-goal"
import { Summary } from "./components/summary"
import { useQuery } from "@tanstack/react-query"
import { getSummary } from "./http/get-summary"

export const App = () => {
  const { data } = useQuery({
    queryKey: ["summary"],
    queryFn: getSummary,
  })

  const hasSummary = data && data[0]?.total > 0

  return (
    <Dialog>
      {hasSummary ? <Summary /> : <EmptyGoal />}

      <CreateGoal />
    </Dialog>
  )
}
