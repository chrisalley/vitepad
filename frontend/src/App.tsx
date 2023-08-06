import { ReactElement } from 'react'
import DocumentList from './DocumentList'
import DocumentPage from './DocumentPage'
import NewDocumentPage from './NewDocumentPage'
import EditDocumentPage from './EditDocumentPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App(): ReactElement {
  const slug1 = location.pathname.split('/')[2]
  const slug2 = location.pathname.split('/')[3]

  function renderPage() {
    if (!slug1) return <DocumentList />
    switch (slug1) {
      case 'new':
        return <NewDocumentPage />
      default:
        return slug2 && slug2 === 'edit' ? (
          <EditDocumentPage />
        ) : (
          <DocumentPage />
        )
    }
  }

  return (
    <div>
      <h1>Vitepad</h1>
      <QueryClientProvider client={queryClient}>
        {renderPage()}
      </QueryClientProvider>
    </div>
  )
}
