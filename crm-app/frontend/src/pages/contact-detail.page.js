// contact-detail.page.js  —  page controller for contact.html
// The contact id is passed through the URL as a query parameter, e.g.:
//   contact.html?id=3

import { getContact } from '../api/contacts.api.js'
import { getNotesByContact, createNote, deleteNote } from '../api/notes.api.js'
import { getFilesByContact, uploadFile, deleteFile } from '../api/files.api.js'

// Read the ?id= value from the current URL
const params = new URLSearchParams(window.location.search)
const contactId = params.get('id')

// TODO: add your page logic here
// Example steps:
//   1. Call getContact(contactId) and display the contact's info
//   2. Call getNotesByContact(contactId) and render the notes list
//   3. Hook up the "Add note" form to call createNote()
//   4. Call getFilesByContact(contactId) and render the files list
//   5. Hook up the file input to call uploadFile()
//   6. Hook up delete buttons to call deleteNote(id) / deleteFile(id)
