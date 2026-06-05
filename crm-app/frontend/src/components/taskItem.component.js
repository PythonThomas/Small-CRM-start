// taskItem.component.js
// Builds and returns a single task row as a DOM element.
//
// Usage (in tasks.page.js):
//   const item = createTaskItem(task, onToggle, onDelete)
//   document.getElementById('task-list').appendChild(item)

export function createTaskItem(task, onToggle, onDelete) {
  // Root wrapper — styled via .task-item in style.css
  const item = document.createElement('div')
  item.className = 'task-item'

  // Checkbox reflects task.done; toggling calls onToggle(id, newState)
  // so the caller can PATCH the task without the component knowing about the API
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.checked = task.done
  checkbox.addEventListener('change', () => onToggle(task.id, checkbox.checked))

  // Task title (e.g. "Follow up with client")
  const title = document.createElement('span')
  title.className = 'task-title'
  title.textContent = task.title

  // Due date shown as-is from the server (caller can format before passing in)
  const due = document.createElement('span')
  due.className = 'task-due'
  due.textContent = task.due_date

  // Calls onDelete(id) — caller is responsible for the API call and re-render
  const deleteBtn = document.createElement('button')
  deleteBtn.className = 'btn-danger'
  deleteBtn.textContent = 'Delete'
  deleteBtn.addEventListener('click', () => onDelete(task.id))

  // Append all children to the item in display order, then return it
  item.append(checkbox, title, due, deleteBtn)
  return item
}
