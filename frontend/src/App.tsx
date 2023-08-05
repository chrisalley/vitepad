import { ReactElement } from 'react'
import DocumentList from './DocumentList'
import DocumentPage from './DocumentPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App(): ReactElement {
  const documentId = location.pathname.split('/')[2]

  return (
    <div>
      <h1>Vitepad</h1>
      <QueryClientProvider client={queryClient}>
        {documentId ? <DocumentPage /> : <DocumentList />}
      </QueryClientProvider>
    </div>
  )
}
