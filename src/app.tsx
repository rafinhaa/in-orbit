import { Dialog } from "./components/ui/dialog"
import { CreateGoal } from "./components/create-goal"
import { EmptyGoal } from "./components/empty-goal"
import { Summary } from "./components/summary"
import { useQuery } from "@tanstack/react-query"
import { getSummary } from "./http/get-summary"

const SIXTY_SECONDS = 1000 * 60

export const App = () => {
  const { data } = useQuery({
    queryKey: ["summary"],
    queryFn: getSummary,
    staleTime: SIXTY_SECONDS,
  })

  const hasSummary = data && data[0]?.total > 0

  return (
    <Dialog>
      {hasSummary ? <Summary /> : <EmptyGoal />}

      <CreateGoal />
    </Dialog>
  )
}
