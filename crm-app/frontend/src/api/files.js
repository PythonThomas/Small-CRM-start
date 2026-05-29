// files.js
// HTTP calls for the /files resource.
// File uploads use FormData so the browser sets the correct multipart headers.

const API_BASE = 'http://localhost:8000'

// Get all files attached to a contact
export async function getFilesByContact(contactId) {
  const response = await fetch(`${API_BASE}/files/contact/${contactId}`)
  return response.json()
}

// Upload a file for a contact
// file is a File object — typically from an <input type="file"> element
export async function uploadFile(contactId, file) {
  const formData = new FormData()
  formData.append('file', file)

  // Note: do NOT set Content-Type manually here —
  // the browser sets it automatically with the correct multipart boundary
  const response = await fetch(`${API_BASE}/files/contact/${contactId}`, {
    method: 'POST',
    body: formData,
  })
  return response.json()
}

// Delete a file record (also removes the file from disk on the server)
export async function deleteFile(id) {
  await fetch(`${API_BASE}/files/${id}`, { method: 'DELETE' })
}
