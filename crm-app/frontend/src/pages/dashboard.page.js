// dashboard.page.js  —  page controller for index.html

import { getContacts }          from '../api/contacts.api.js'
import { getDeals }             from '../api/deals.api.js'
import { getTasks }             from '../api/tasks.api.js'
import { getEvents }            from '../api/calendar.api.js'

// ================================================
// STAT STRIP  —  top row of summary numbers
// ================================================

// TODO: call getContacts() and set #total-contacts to the count
// TODO: call getDeals() filter for open deals and set #open-deals to the count
// TODO: call getTasks() filter for incomplete + due today and set #tasks-due to the count
// TODO: call getEvents() filter for upcoming and set #upcoming-meetings to the count

// ================================================
// DASHBOARD GRID  —  the four detail cards
// ================================================

// TODO: call getTasks() filter for high-priority incomplete tasks
//       and render each into #urgent-tasks as <li> elements

// TODO: call getEvents() filter for upcoming events
//       and render each into #upcoming-calendar as <li> elements

// TODO: call getDeals() filter for deals needing attention (e.g. stale/no activity)
//       and render each into #deals-attention as <li> elements

// TODO: call getContacts() or a future /activity endpoint
//       and render recent entries into #recent-activity as <li> elements
