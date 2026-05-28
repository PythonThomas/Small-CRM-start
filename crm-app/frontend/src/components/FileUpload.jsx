// FileUpload.jsx
// Lets the user pick a file from their computer and upload it to the server.
// It also shows the list of files that are already attached to this contact.
//
// Props:
//   files    -> array of file objects already uploaded for this contact
//   onUpload -> called with the selected File object when the user picks one
//   onDelete -> called with the file id when the user clicks "Delete"

import React, { useRef } from 'react'

export default function FileUpload({ files, onUpload, onDelete }) {
  // useRef gives us a reference to the hidden <input type="file"> element
  // so we can trigger a click on it from a regular button
  const inputRef = useRef(null)

  // Called automatically when the user selects a file in the file picker
  function handleChange(event) {
    // event.target.files is a list — we only take the first file
    const selectedFile = event.target.files[0]

    if (selectedFile) {
      // Pass the file up to the parent (ContactDetailPage) for uploading
      onUpload(selectedFile)
    }

    // Reset the input so the same file can be chosen again later if needed
    event.target.value = ''
  }

  return (
    <section style={{ marginTop: '24px' }}>
      <h2>Files</h2>

      {/* Hidden real file input — triggered by the button below */}
      <input
        ref={inputRef}
        type="file"
        style={{ display: 'none' }}
        onChange={handleChange}
      />

      {/* Visible button that opens the file picker */}
      <button onClick={() => inputRef.current.click()}>
        Choose &amp; upload file
      </button>

      {/* Show a message when no files are attached yet */}
      {files.length === 0 && (
        <p style={{ color: '#999999' }}>No files uploaded yet.</p>
      )}

      {/* Loop over each uploaded file and display its name + upload date */}
      {files.map(file => (
        <div
          key={file.id}
          style={{
            borderBottom: '1px solid #eeeeee',
            padding: '8px 0',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          {/* File name */}
          <span>{file.filename}</span>

          {/* Upload timestamp formatted for the local timezone */}
          <small style={{ color: '#999999' }}>
            {new Date(file.uploaded_at).toLocaleString()}
          </small>

          {/* Delete button removes the file record and the file on disk */}
          <button onClick={() => onDelete(file.id)} style={{ color: 'red' }}>
            Delete
          </button>
        </div>
      ))}
    </section>
  )
}
