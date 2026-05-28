// HTTP calls for the /notes resource.
import axios from 'axios'

const BASE = '/api/notes'

export const getNotesByContact = (contactId) =>
  axios.get(`${BASE}/contact/${contactId}`).then(r => r.data)

export const createNote = (data) => axios.post(BASE, data).then(r => r.data)

export const updateNote = (id, data) => axios.patch(`${BASE}/${id}`, data).then(r => r.data)

export const deleteNote = (id) => axios.delete(`${BASE}/${id}`)
