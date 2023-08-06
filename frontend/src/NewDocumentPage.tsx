import { ReactElement } from 'react'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { Document } from './types'
import DocumentForm from './DocumentForm'

export default function NewDocumentPage(): ReactElement {
  const createDocument = async (
    values: Omit<Document, 'id'>,
  ): Promise<void> => {
    console.log('posting', values)
    await axios.post(`http://localhost:4000/api/documents`, {
      document: {
        name: values.name,
        content: values.content,
      },
    })
  }

  const { mutate } = useMutation({
    mutationFn: (values: Omit<Document, 'id'>) => createDocument(values),
    onSuccess: () => (window.location.href = '/'),
  })

  function handleSubmit(values: Omit<Document, 'id'>): void {
    mutate(values)
  }

  const newDocument = { name: '', content: '' }

  return (
    <div>
      <h2>New Document</h2>
      <DocumentForm document={newDocument} onSubmit={handleSubmit} />
    </div>
  )
}
