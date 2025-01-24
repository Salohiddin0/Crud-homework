import React from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import './App.css'

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1>Task Managment App</h1>
      </div>
      <TaskForm />
      <TaskList />
    </div>
  )
}

export default App
