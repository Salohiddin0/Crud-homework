import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTask, toggleComplete } from './taskSlice'

const TaskList = () => {
  const tasks = useSelector(state => state.tasks.tasks)
  const dispatch = useDispatch()

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Task List</h2>
      {tasks.map(task => (
        <div
          key={task.id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px',
            padding: '10px',
            border: '1px solid #ccc',
            backgroundColor: task.completed ? '#d4f7d4' : '#fff'
          }}
        >
          <div>
            <strong>{task.text}</strong>
          </div>
          <div>
            <button onClick={() => dispatch(toggleComplete(task.id))}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => dispatch(deleteTask(task.id))}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskList
