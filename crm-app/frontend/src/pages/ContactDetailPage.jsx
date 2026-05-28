// Detail page for a single contact — displays notes and uploaded files.
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getContact } from '../api/contacts'
import { getNotesByContact, createNote, deleteNote } from '../api/notes'
import { getFilesByContact, uploadFile, deleteFile } from '../api/files'
import NoteList from '../components/NoteList'
import FileUpload from '../components/FileUpload'

export default function ContactDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [contact, setContact] = useState(null)
  const [notes, setNotes] = useState([])
  const [files, setFiles] = useState([])

  useEffect(() => {
    getContact(id).then(setContact)
    getNotesByContact(id).then(setNotes)
    getFilesByContact(id).then(setFiles)
  }, [id])

  const handleAddNote = async (body) => {
    const note = await createNote({ contact_id: Number(id), body })
    setNotes(prev => [...prev, note])
  }

  const handleDeleteNote = async (noteId) => {
    await deleteNote(noteId)
    setNotes(prev => prev.filter(n => n.id !== noteId))
  }

  const handleUpload = async (file) => {
    const record = await uploadFile(id, file)
    setFiles(prev => [...prev, record])
  }

  const handleDeleteFile = async (fileId) => {
    await deleteFile(fileId)
    setFiles(prev => prev.filter(f => f.id !== fileId))
  }

  if (!contact) return <p>Loading...</p>

  return (
    <div style={{ padding: '1rem' }}>
      <button onClick={() => navigate('/')}>← Back</button>
      <h1>{contact.first_name} {contact.last_name}</h1>
      <p>{contact.email} | {contact.phone} | {contact.company}</p>

      <NoteList notes={notes} onAdd={handleAddNote} onDelete={handleDeleteNote} />
      <FileUpload files={files} onUpload={handleUpload} onDelete={handleDeleteFile} />
    </div>
  )
}
