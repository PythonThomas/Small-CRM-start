// contacts.js
// All HTTP calls for the /contacts resource.

import { apiFetch, jsonOptions } from './client.js'

export function getContacts() {
  return apiFetch('/contacts')
}

export function getContact(id) {
  return apiFetch(`/contacts/${id}`)
}

export function createContact(data) {
  return apiFetch('/contacts', jsonOptions('POST', data))
}

export function updateContact(id, data) {
  return apiFetch(`/contacts/${id}`, jsonOptions('PATCH', data))
}

export function deleteContact(id) {
  return apiFetch(`/contacts/${id}`, { method: 'DELETE' })
}
