import { ReactElement } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Document } from './types'

interface DocumentResponse {
  data: Document
}

export default function DocumentPage(): ReactElement {
  const documentId = location.pathname.split('/')[2]

  const fetchDocument = async (): Promise<DocumentResponse> => {
    const response = await axios.get(
      'http://localhost:4000/api/documents/' + documentId,
    )
    return response.data as DocumentResponse
  }

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['document'],
    queryFn: fetchDocument,
  })

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError && error instanceof Error) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div>
      <h1>{data?.data.name}</h1>
      <p>{data?.data.content}</p>
    </div>
  )
}
