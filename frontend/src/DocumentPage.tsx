import { ReactElement } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchDocument } from './queries'

export default function DocumentPage(): ReactElement {
  const documentId = location.pathname.split('/')[2]

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['document', documentId],
    queryFn: () => fetchDocument(documentId),
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
      <ul>
        <li>
          <a href="/">Documents List</a>
        </li>
        <li>
          <a href={`/documents/${documentId}/edit`}>Edit Document</a>
        </li>
      </ul>
      <p>{data?.data.content}</p>
    </div>
  )
}
