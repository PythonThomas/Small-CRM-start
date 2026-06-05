// deals.page.js  —  page controller for deals.html

import { getDeals, createDeal, updateDeal, deleteDeal } from '../api/deals.api.js'
import { createDealCard } from '../components/dealCard.component.js'

// TODO: add your page logic here
// Suggested steps:
//   1. Call getDeals() and render each result with createDealCard()
//   2. Hook up the "Add deal" form to call createDeal()
//   3. Hook up delete buttons to call deleteDeal(id)
//   4. Hook up stage-change controls to call updateDeal(id, { stage })
