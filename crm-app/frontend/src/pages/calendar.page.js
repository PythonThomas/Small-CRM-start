// calendar.page.js  —  page controller for calendar.html

import { getEvents, createEvent, updateEvent, deleteEvent } from '../api/calendar.api.js'
import { createCalendarEvent } from '../components/calendarEvent.component.js'

// TODO: add your page logic here
// Suggested steps:
//   1. Call getEvents() and render each result with createCalendarEvent()
//   2. Hook up the "Add event" form to call createEvent()
//   3. Hook up delete buttons to call deleteEvent(id)
//   4. Hook up edit controls to call updateEvent(id, data)
