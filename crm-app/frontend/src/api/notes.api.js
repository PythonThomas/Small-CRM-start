// notes.js
// HTTP calls for the /notes resource.

import { apiFetch, jsonOptions } from './client.js'

export function getNotesByContact(contactId) {
  return apiFetch(`/notes/contact/${contactId}`)
}

export function createNote(data) {
  return apiFetch('/notes', jsonOptions('POST', data))
}

export function updateNote(id, body) {
  return apiFetch(`/notes/${id}`, jsonOptions('PATCH', { body }))
}

export function deleteNote(id) {
  return apiFetch(`/notes/${id}`, { method: 'DELETE' })
}
