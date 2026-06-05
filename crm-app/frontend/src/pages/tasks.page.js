// tasks.page.js  —  page controller for tasks.html

import { getTasks, createTask, updateTask, deleteTask } from '../api/tasks.api.js'
import { createTaskItem } from '../components/taskItem.component.js'

// TODO: add your page logic here
// Suggested steps:
//   1. Call getTasks() and render each result with createTaskItem()
//   2. Hook up the "Add task" form to call createTask()
//   3. Hook up checkbox toggles to call updateTask(id, { done: true/false })
//   4. Hook up delete buttons to call deleteTask(id)
