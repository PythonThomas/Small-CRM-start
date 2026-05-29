// contacts.js
// All HTTP calls for the /contacts resource.
// Uses the native browser fetch() API — no libraries needed.

// The base URL of your FastAPI backend
const API_BASE = 'http://localhost:8000'

// Fetch all contacts from the server
export async function getContacts() {
  const response = await fetch(`${API_BASE}/contacts`)
  return response.json()
}

// Fetch a single contact by its id
export async function getContact(id) {
  const response = await fetch(`${API_BASE}/contacts/${id}`)
  return response.json()
}

// Create a new contact by sending a POST request with the form data
// data should be an object like: { first_name, last_name, email, phone, company }
export async function createContact(data) {
  const response = await fetch(`${API_BASE}/contacts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  return response.json()
}

// Update an existing contact (only send the fields you want to change)
export async function updateContact(id, data) {
  const response = await fetch(`${API_BASE}/contacts/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  return response.json()
}

// Delete a contact by id — returns no content (204)
export async function deleteContact(id) {
  await fetch(`${API_BASE}/contacts/${id}`, { method: 'DELETE' })
}
