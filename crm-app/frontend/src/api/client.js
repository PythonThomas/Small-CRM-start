// client.js
// Single source of truth for the API base URL and shared fetch logic.
// All api/*.js files import from here instead of each defining their own API_BASE.

export const API_BASE = 'http://localhost:8000'

// Thin wrapper around fetch() that:
//   - prepends API_BASE to every path
//   - returns parsed JSON, or null for 204 No Content responses
export async function apiFetch(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, options)
  if (response.status === 204) return null
  return response.json()
}

// Convenience helper for JSON POST / PATCH bodies
export function jsonOptions(method, data) {
  return {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }
}
