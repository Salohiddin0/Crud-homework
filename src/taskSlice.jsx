import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: []
}

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload)
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload)
    },
    editTask: (state, action) => {
      const { id, newTask } = action.payload
      const task = state.tasks.find(task => task.id === id)
      if (task) task.text = newTask
    },
    toggleComplete: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload)
      if (task) task.completed = !task.completed
    }
  }
})

export const { addTask, deleteTask, editTask, toggleComplete } =
  taskSlice.actions

export default taskSlice.reducer
