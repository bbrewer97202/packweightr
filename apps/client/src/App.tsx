import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import { GearList } from './components/Gearlist'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GearList />
    </QueryClientProvider>
  )
}

export default App
