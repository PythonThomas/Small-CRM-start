// dealCard.component.js
// Builds and returns a single deal card as a DOM element.
//
// Usage (in deals.page.js):
//   const card = createDealCard(deal, onView, onDelete)
//   document.getElementById('deal-list').appendChild(card)

export function createDealCard(deal, onView, onDelete) {
  // Root wrapper — styled via .deal-card in style.css
  const card = document.createElement('div')
  card.className = 'deal-card'

  // Deal title (e.g. "Website Redesign for Acme")
  const title = document.createElement('span')
  title.className = 'deal-title'
  title.textContent = deal.title

  // Current pipeline stage (e.g. "Proposal", "Negotiation", "Closed")
  const stage = document.createElement('span')
  stage.className = 'deal-stage'
  stage.textContent = deal.stage

  // Monetary value of the deal
  const value = document.createElement('span')
  value.className = 'deal-value'
  value.textContent = deal.value

  // Calls onView(deal) — caller decides where to navigate or what to render
  const viewBtn = document.createElement('button')
  viewBtn.textContent = 'View'
  viewBtn.addEventListener('click', () => onView(deal))

  // Calls onDelete(id) — caller is responsible for the API call and re-render
  const deleteBtn = document.createElement('button')
  deleteBtn.className = 'btn-danger'
  deleteBtn.textContent = 'Delete'
  deleteBtn.addEventListener('click', () => onDelete(deal.id))

  // Append all children to the card in display order, then return it
  card.append(title, stage, value, viewBtn, deleteBtn)
  return card
}
