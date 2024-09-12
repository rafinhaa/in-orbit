import { Dialog } from "./components/ui/dialog"
import { CreateGoal } from "./components/create-goal"
import { EmptyGoal } from "./components/empty-goal"
import { Summary } from "./components/summary"
import { useQuery } from "@tanstack/react-query"
import { getSummary } from "./http/get-summary"
import { useState } from "react"

const SIXTY_SECONDS = 1000 * 60

export const App = () => {
  const [openDialog, setOpenDialog] = useState(false)

  const { data } = useQuery({
    queryKey: ["summary"],
    queryFn: getSummary,
    staleTime: SIXTY_SECONDS,
  })

  const hasSummary = data && data?.total > 0

  return (
    <Dialog open={openDialog} onOpenChange={e => setOpenDialog(e)}>
      {hasSummary ? <Summary /> : <EmptyGoal />}

      <CreateGoal closeDialog={() => setOpenDialog(false)} />
    </Dialog>
  )
}
