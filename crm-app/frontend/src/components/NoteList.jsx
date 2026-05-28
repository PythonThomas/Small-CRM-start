// Displays notes for a contact and provides an inline form to add new ones.
import React, { useState } from 'react'

export default function NoteList({ notes, onAdd, onDelete }) {
  const [body, setBody] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!body.trim()) return
    onAdd(body)
    setBody('')
  }

  return (
    <section style={{ marginTop: '1.5rem' }}>
      <h2>Notes</h2>

      <form onSubmit={handleSubmit}>
        <textarea
          rows={3}
          style={{ width: '100%' }}
          placeholder="Write a note…"
          value={body}
          onChange={e => setBody(e.target.value)}
        />
        <button type="submit">Add note</button>
      </form>

      {notes.map(n => (
        <div key={n.id} style={{ borderBottom: '1px solid #eee', padding: '0.5rem 0' }}>
          <p style={{ margin: 0 }}>{n.body}</p>
          <small style={{ color: '#999' }}>{new Date(n.created_at).toLocaleString()}</small>
          <button onClick={() => onDelete(n.id)} style={{ marginLeft: '0.5rem', color: 'red' }}>Delete</button>
        </div>
      ))}
    </section>
  )
}
