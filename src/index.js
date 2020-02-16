console.info('Loading...')

let taskInput, addButton, taskList, taskDeadLine

const createNewTaskElement = function(taskString, taskDeadLine) {
  let newTask = document.createElement('li')
  let label = document.createElement('label')
  let editInput = document.createElement('input')
  let deleteButton = document.createElement('button')
  let deadLineLabel = document.createElement('label')
  let deadLineInput = document.createElement('input')

  newTask.className = 'task-element'

  label.innerText = taskString
  label.className = 'task-label'

  editInput.type = 'text'
  editInput.value = taskString
  editInput.className = 'task-input task-text'

  deleteButton.innerText = 'Delete'
  deleteButton.className = 'action-button'

  deadLineInput.type = 'date'
  deadLineInput.className = 'task-input task-deadline'
  deadLineInput.value = taskDeadLine

  newTask.appendChild(label)
  newTask.appendChild(editInput)
  newTask.appendChild(deadLineLabel)
  newTask.appendChild(deadLineInput)
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
  const listItem = createNewTaskElement(taskInput.value, taskDeadLine.value)
  taskList.appendChild(listItem)
  bindToList(listItem, listItem)
}

// Bind action to buttons
const initModule = () => {
  taskList = document.getElementById('task-list')
  addButton = document.getElementById('add-new-button')
  taskInput = document.getElementById('new-task-text')
  taskDeadLine = document.getElementById('new-task-deadline')
  let today = new Date().toISOString().substr(0, 10)
  taskDeadLine.value = today
  addButton.addEventListener('click', addNewTask)
}

initModule()
