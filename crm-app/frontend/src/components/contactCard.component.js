// contactCard.component.js
// Builds and returns a single contact card as a DOM element.
//
// Usage (in contacts.page.js):
//   const card = createContactCard(contact, onView, onDelete)
//   document.getElementById('contact-list').appendChild(card)

export function createContactCard(contact, onView, onDelete) {
  // Root wrapper — styled via .contact-card in style.css
  const card = document.createElement('div')
  card.className = 'contact-card'

  // Full name pulled from first_name + last_name fields on the contact object
  const name = document.createElement('span')
  name.className = 'contact-name'
  name.textContent = `${contact.first_name} ${contact.last_name}`

  // Email address displayed as plain texst
  const email = document.createElement('span')
  email.className = 'contact-email'
  email.textContent = contact.email

  // Company name
  const company = document.createElement('span')
  company.className = 'contact-company'
  company.textContent = contact.company

  // Calls onView(contact) — caller decides where to navigate or what to render
  const viewBtn = document.createElement('button')
  viewBtn.textContent = 'View'
  viewBtn.addEventListener('click', () => onView(contact))

  // Calls onDelete(id) — caller is responsible for the API call and re-render
  const deleteBtn = document.createElement('button')
  deleteBtn.className = 'btn-danger'
  deleteBtn.textContent = 'Delete'
  deleteBtn.addEventListener('click', () => onDelete(contact.id))

  // Append all children to the card in display order, then return it
  card.append(name, email, company, viewBtn, deleteBtn)
  return card
}
