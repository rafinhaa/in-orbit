import { Dialog } from "./components/ui/dialog"
import { CreateGoal } from "./components/create-goal"
import { EmptyGoal } from "./components/empty-goal"
import { Summary } from "./components/summary"

export const App = () => {
  return (
    <Dialog>
      {/* <EmptyGoal /> */}

      <Summary />
      <CreateGoal />
    </Dialog>
  )
}
