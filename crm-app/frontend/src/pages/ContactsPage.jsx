// Landing page — shows a searchable list of contacts and a form to add new ones.
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getContacts, createContact, deleteContact } from '../api/contacts'
import ContactCard from '../components/ContactCard'

export default function ContactsPage() {
  const [contacts, setContacts] = useState([])
  const [form, setForm] = useState({ first_name: '', last_name: '', email: '', phone: '', company: '' })
  const navigate = useNavigate()

  useEffect(() => {
    getContacts().then(setContacts)
  }, [])

  const handleCreate = async (e) => {
    e.preventDefault()
    const created = await createContact(form)
    setContacts(prev => [...prev, created])
    setForm({ first_name: '', last_name: '', email: '', phone: '', company: '' })
  }

  const handleDelete = async (id) => {
    await deleteContact(id)
    setContacts(prev => prev.filter(c => c.id !== id))
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Contacts</h1>

      {/* Quick-add form */}
      <form onSubmit={handleCreate} style={{ marginBottom: '1rem' }}>
        <input required placeholder="First name" value={form.first_name} onChange={e => setForm(f => ({ ...f, first_name: e.target.value }))} />
        <input required placeholder="Last name"  value={form.last_name}  onChange={e => setForm(f => ({ ...f, last_name: e.target.value }))} />
        <input required placeholder="Email"      value={form.email}      onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
        <input placeholder="Phone"               value={form.phone}      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
        <input placeholder="Company"             value={form.company}    onChange={e => setForm(f => ({ ...f, company: e.target.value }))} />
        <button type="submit">Add contact</button>
      </form>

      {contacts.map(c => (
        <ContactCard
          key={c.id}
          contact={c}
          onView={() => navigate(`/contacts/${c.id}`)}
          onDelete={() => handleDelete(c.id)}
        />
      ))}
    </div>
  )
}
