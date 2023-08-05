import { ReactElement } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Document } from './types'

interface DocumentsResponse {
  data: [Document]
}

export default function DocumentList(): ReactElement {
  const fetchDocuments = async (): Promise<DocumentsResponse> => {
    const response = await axios.get('http://localhost:4000/api/documents')
    return response.data as DocumentsResponse
  }

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['documents'],
    queryFn: fetchDocuments,
  })

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError && error instanceof Error) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div>
      <h2>Documents</h2>
      <ul>
        {data?.data.map((document) => (
          <li key={document.id}>
            <a href={`/documents/${document.id}`}>{document.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
