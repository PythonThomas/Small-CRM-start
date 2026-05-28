import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContactsPage from './pages/ContactsPage'
import ContactDetailPage from './pages/ContactDetailPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* List of all contacts */}
        <Route path="/" element={<ContactsPage />} />
        {/* Detail view with notes and files for a single contact */}
        <Route path="/contacts/:id" element={<ContactDetailPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
