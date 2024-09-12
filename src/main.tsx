import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { App } from "./app"
import "./index.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import ptBR from "dayjs/locale/pt-br"
import dayjs from "dayjs"

dayjs.locale(ptBR)

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
)
