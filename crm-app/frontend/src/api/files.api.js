// files.js
// HTTP calls for the /files resource.
// File uploads use FormData so the browser sets the correct multipart headers.

import { apiFetch } from './client.js'

export function getFilesByContact(contactId) {
  return apiFetch(`/files/contact/${contactId}`)
}

// file is a File object from an <input type="file"> element.
// Do NOT set Content-Type manually — the browser adds the multipart boundary.
export function uploadFile(contactId, file) {
  const formData = new FormData()
  formData.append('file', file)
  return apiFetch(`/files/contact/${contactId}`, { method: 'POST', body: formData })
}

export function deleteFile(id) {
  return apiFetch(`/files/${id}`, { method: 'DELETE' })
}
