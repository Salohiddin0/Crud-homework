import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from './taskSlice'
import { v4 as uuidv4 } from 'uuid'

const TaskForm = () => {
  const [taskText, setTaskText] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = () => {
    if (!taskText.trim()) return alert('Task text cannot be empty!')
    const newTask = {
      id: uuidv4(),
      text: taskText,
      completed: false
    }
    dispatch(addTask(newTask))
    setTaskText('')
  }

  return (
    <div
      style={{
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <input
        type='text'
        value={taskText}
        onChange={e => setTaskText(e.target.value)}
        placeholder='Add Task'
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  )
}

export default TaskForm
