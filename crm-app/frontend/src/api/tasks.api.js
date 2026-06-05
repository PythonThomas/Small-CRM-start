// tasks.js
// HTTP calls for the /tasks resource.

import { apiFetch, jsonOptions } from './client.js'

export function getTasks() {
  return apiFetch('/tasks')
}

export function getTask(id) {
  return apiFetch(`/tasks/${id}`)
}

export function getTasksByContact(contactId) {
  return apiFetch(`/tasks/contact/${contactId}`)
}

// data: { title, contact_id?, due_date?, priority?, done? }
export function createTask(data) {
  return apiFetch('/tasks', jsonOptions('POST', data))
}

export function updateTask(id, data) {
  return apiFetch(`/tasks/${id}`, jsonOptions('PATCH', data))
}

export function deleteTask(id) {
  return apiFetch(`/tasks/${id}`, { method: 'DELETE' })
}
