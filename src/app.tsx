import { Dialog } from "./components/ui/dialog"
import { CreateGoal } from "./components/create-goal"
import { EmptyGoal } from "./components/empty-goal"

export const App = () => {
  return (
    <Dialog>
      <EmptyGoal />

      <CreateGoal />
    </Dialog>
  )
}
