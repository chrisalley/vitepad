import axios from 'axios'
import { DocumentResponse } from './types'

export const fetchDocument = async (
  documentId: string,
): Promise<DocumentResponse> => {
  const response = await axios.get(
    `http://localhost:4000/api/documents/${documentId}`,
  )
  return response.data as DocumentResponse
}
