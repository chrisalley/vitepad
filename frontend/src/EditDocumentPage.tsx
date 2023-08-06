import { ReactElement } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { Document } from './types'
import { fetchDocument } from './queries'
import DocumentForm from './DocumentForm'

export default function EditDocumentPage(): ReactElement {
  const documentId = location.pathname.split('/')[2]

  const updateDocument = async (
    values: Omit<Document, 'id'>,
  ): Promise<void> => {
    await axios.patch(`http://localhost:4000/api/documents/${documentId}`, {
      document: {
        id: parseInt(documentId, 10),
        name: values.name,
        content: values.content,
      },
    })
  }

  const queryClient = useQueryClient()
  const { data } = useQuery({
    queryKey: ['document', documentId],
    queryFn: () => fetchDocument(documentId),
  })

  const { mutate } = useMutation({
    mutationFn: (values: Omit<Document, 'id'>) => updateDocument(values),
    onSuccess: async (): Promise<void> => {
      await queryClient.invalidateQueries({
        queryKey: ['document', documentId],
      })
      window.location.href = `/documents/${documentId}`
    },
  })

  function handleSubmit(values: Omit<Document, 'id'>): void {
    mutate(values)
  }

  if (data?.data) {
    const document = {
      name: data?.data.name,
      content: data?.data.content,
    }
    return <DocumentForm document={document} onSubmit={handleSubmit} />
  }

  return <p>Loading...</p>
}
