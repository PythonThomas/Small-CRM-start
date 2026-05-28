// All HTTP calls for the /contacts resource.
// Axios baseURL points to the Vite proxy which forwards to FastAPI.
import axios from 'axios'

const BASE = '/api/contacts'

export const getContacts = () => axios.get(BASE).then(r => r.data)

export const getContact = (id) => axios.get(`${BASE}/${id}`).then(r => r.data)

export const createContact = (data) => axios.post(BASE, data).then(r => r.data)

export const updateContact = (id, data) => axios.patch(`${BASE}/${id}`, data).then(r => r.data)

export const deleteContact = (id) => axios.delete(`${BASE}/${id}`)
