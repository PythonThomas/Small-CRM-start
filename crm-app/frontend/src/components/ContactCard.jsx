// ContactCard.jsx
// This component shows one contact in a simple box.
// It receives the contact object and two callback functions as props:
//   onView   -> called when the user clicks "View" to open the detail page
//   onDelete -> called when the user clicks "Delete" to remove the contact

import React from 'react'

export default function ContactCard({ contact, onView, onDelete }) {
  // Build a readable display name from first + last name
  const fullName = contact.first_name + ' ' + contact.last_name

  return (
    // Outer box with a light border
    <div style={{
      border: '1px solid #cccccc',
      borderRadius: '6px',
      padding: '10px 14px',
      marginBottom: '10px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    }}>
      {/* Contact name in bold */}
      <strong style={{ flex: 1 }}>{fullName}</strong>

      {/* Email shown in grey */}
      <span style={{ color: '#666666' }}>{contact.email}</span>

      {/* Company name — only rendered when the contact has one */}
      {contact.company && (
        <span style={{ color: '#444444' }}>— {contact.company}</span>
      )}

      {/* View button navigates to the detail page */}
      <button onClick={onView}>
        View
      </button>

      {/* Delete button removes the contact from the list */}
      <button onClick={onDelete} style={{ color: 'red' }}>
        Delete
      </button>
    </div>
  )
}
