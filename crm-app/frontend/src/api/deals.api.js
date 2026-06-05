// deals.js
// HTTP calls for the /deals resource.

import { apiFetch, jsonOptions } from './client.js'

export function getDeals() {
  return apiFetch('/deals')
}

export function getDeal(id) {
  return apiFetch(`/deals/${id}`)
}

// data: { title, contact_id, value, stage, closed_at? }
export function createDeal(data) {
  return apiFetch('/deals', jsonOptions('POST', data))
}

export function updateDeal(id, data) {
  return apiFetch(`/deals/${id}`, jsonOptions('PATCH', data))
}

export function deleteDeal(id) {
  return apiFetch(`/deals/${id}`, { method: 'DELETE' })
}
