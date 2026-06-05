// calendar.js
// HTTP calls for the /events resource.

import { apiFetch, jsonOptions } from './client.js'

export function getEvents() {
  return apiFetch('/events')
}

export function getEvent(id) {
  return apiFetch(`/events/${id}`)
}

export function getEventsByContact(contactId) {
  return apiFetch(`/events/contact/${contactId}`)
}

// data: { title, contact_id?, start_at, end_at?, location?, notes? }
export function createEvent(data) {
  return apiFetch('/events', jsonOptions('POST', data))
}

export function updateEvent(id, data) {
  return apiFetch(`/events/${id}`, jsonOptions('PATCH', data))
}

export function deleteEvent(id) {
  return apiFetch(`/events/${id}`, { method: 'DELETE' })
}
