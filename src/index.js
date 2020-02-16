console.info('Loading...')

let taskInput, addButton, taskList

const createNewTaskElement = function(taskString) {
  let newTask = document.createElement('li')
  let label = document.createElement('label')
  let editInput = document.createElement('input')
  let deleteButton = document.createElement('button')

  newTask.className = 'task-element'

  label.innerText = taskString
  label.className = 'task-label'

  editInput.type = 'text'
  editInput.value = taskString
  editInput.className = 'task-input'

  deleteButton.innerText = 'Delete'
  deleteButton.className = 'action-button'

  newTask.appendChild(label)
  newTask.appendChild(editInput)
  newTask.appendChild(deleteButton)

  return newTask
}

const deleteTask = button => {
  const task = button.parentNode
  const list = task.parentNode
  taskList.removeChild(task)
}

const bindToList = task => {
  var deleteButton = task.getElementsByTagName('button')[0]
  deleteButton.onclick = () => deleteTask(deleteButton)
}

const addNewTask = () => {
  const listItem = createNewTaskElement(taskInput.value)
  taskList.appendChild(listItem)
  taskInput.value = ''
  bindToList(listItem, listItem)
}

// Bind action to buttons
const initModule = () => {
  taskList = document.getElementById('task-list')
  addButton = document.getElementById('add-new-button')
  taskInput = document.getElementById('new-task') // new-task
  addButton.addEventListener('click', addNewTask)
}

initModule()
