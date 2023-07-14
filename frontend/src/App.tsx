import { ReactElement } from 'react'
import DocumentList from './DocumentList'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App(): ReactElement {
  return (
    <div>
      <h1>Vitepad</h1>
      <h2>Documents</h2>
      <QueryClientProvider client={queryClient}>
        <DocumentList />
      </QueryClientProvider>
    </div>
  )
}
