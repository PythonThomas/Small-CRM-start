// calendarEvent.component.js
// Builds and returns a single calendar event row as a DOM element.
//
// Usage (in calendar.page.js):
//   const row = createCalendarEvent(event, onView, onDelete)
//   document.getElementById('event-list').appendChild(row)

export function createCalendarEvent(event, onView, onDelete) {
  // Root wrapper — styled via .calendar-event in style.css
  const row = document.createElement('div')
  row.className = 'calendar-event'

  // Event title (e.g. "Intro call with Acme")
  const title = document.createElement('span')
  title.className = 'event-title'
  title.textContent = event.title

  // Start time shown as-is from the server (caller can format before passing in)
  const time = document.createElement('span')
  time.className = 'event-time'
  time.textContent = event.start_at

  // Optional location — will be empty string if not set on the event
  const location = document.createElement('span')
  location.className = 'event-location'
  location.textContent = event.location

  // Calls onView(event) — caller decides where to navigate or what to render
  const viewBtn = document.createElement('button')
  viewBtn.textContent = 'View'
  viewBtn.addEventListener('click', () => onView(event))

  // Calls onDelete(id) — caller is responsible for the API call and re-render
  const deleteBtn = document.createElement('button')
  deleteBtn.className = 'btn-danger'
  deleteBtn.textContent = 'Delete'
  deleteBtn.addEventListener('click', () => onDelete(event.id))

  // Append all children to the row in display order, then return it
  row.append(title, time, location, viewBtn, deleteBtn)
  return row
}
