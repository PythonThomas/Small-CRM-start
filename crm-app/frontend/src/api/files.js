// HTTP calls for the /files resource.
// File uploads use multipart/form-data automatically when FormData is passed.
import axios from 'axios'

const BASE = '/api/files'

export const getFilesByContact = (contactId) =>
  axios.get(`${BASE}/contact/${contactId}`).then(r => r.data)

export const uploadFile = (contactId, file) => {
  const form = new FormData()
  form.append('file', file)
  return axios.post(`${BASE}/contact/${contactId}`, form).then(r => r.data)
}

export const deleteFile = (id) => axios.delete(`${BASE}/${id}`)
