// notes.js
// HTTP calls for the /notes resource.

const API_BASE = 'http://localhost:8000'

// Get all notes that belong to a specific contact
export async function getNotesByContact(contactId) {
  const response = await fetch(`${API_BASE}/notes/contact/${contactId}`)
  return response.json()
}

// Create a new note for a contact
// data should be: { contact_id: number, body: string }
export async function createNote(data) {
  const response = await fetch(`${API_BASE}/notes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  return response.json()
}

// Update the text of an existing note
export async function updateNote(id, body) {
  const response = await fetch(`${API_BASE}/notes/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ body }),
  })
  return response.json()
}

// Delete a note by id
export async function deleteNote(id) {
  await fetch(`${API_BASE}/notes/${id}`, { method: 'DELETE' })
}
