// shell.js  —  shared behaviour for the app-shell (header, popups, sidebar).
// Loaded as a module script in every HTML page.

// ── Popup toggle ─────────────────────────────────────────────────────────────

const headerButtons = document.querySelectorAll('.header-button[data-popup]')

function closeAllPopups() {
  document.querySelectorAll('.popup').forEach(p => p.classList.add('hidden'))
  headerButtons.forEach(b => b.setAttribute('aria-expanded', 'false'))
}

headerButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation() // prevent the document click handler from firing
    const popup = document.getElementById(btn.dataset.popup)
    const isOpen = !popup.classList.contains('hidden')

    closeAllPopups()

    // If it was closed, open it; if it was already open, leave it closed
    if (!isOpen) {
      popup.classList.remove('hidden')
      btn.setAttribute('aria-expanded', 'true')
    }
  })
})

// Click anywhere outside the header closes all popups
document.addEventListener('click', e => {
  if (!e.target.closest('.top-bar')) {
    closeAllPopups()
  }
})
