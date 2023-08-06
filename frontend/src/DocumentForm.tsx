import { ReactElement } from 'react'
import { Document } from './types'
import { useForm } from 'react-hook-form'

interface Props {
  document: Omit<Document, 'id'>
  onSubmit: (values: Omit<Document, 'id'>) => void
}

export default function DocumentForm({
  document,
  onSubmit,
}: Props): ReactElement {
  const { register, handleSubmit } = useForm<Omit<Document, 'id'>>({
    defaultValues: document,
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input {...register('name')} defaultValue={document.name} />
      </div>
      <div>
        <label htmlFor="content">Content</label>
        <textarea {...register('content')} defaultValue={document.content} />
      </div>
      <input type="submit" />
    </form>
  )
}
