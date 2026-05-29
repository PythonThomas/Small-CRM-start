// contactCard.js
// A helper function that builds and returns a contact card as a DOM element.
// Call this function once per contact and append the result to the page.
//
// Usage example (in contacts.js):
//   const card = createContactCard(contact, onView, onDelete)
//   document.getElementById('contact-list').appendChild(card)

export function createContactCard(contact, onView, onDelete) {
  // TODO: build and return a DOM element that shows the contact
  // Example structure:
  //   <div class="contact-card">
  //     <span>{first_name} {last_name}</span>
  //     <span>{email}</span>
  //     <button>View</button>
  //     <button>Delete</button>
  //   </div>

  const card = document.createElement('div')
  card.className = 'contact-card'

  // TODO: fill in the card content and wire up onView / onDelete

  return card
}
