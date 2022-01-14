import React from 'react'
import TaskClass from '../classes/Task'
import Point from './Point'

type Props = {
  task: TaskClass
  handleToggleStatus: any
  handleDeleteTask: any
}

function Task({ task, handleToggleStatus, handleDeleteTask }: Props): JSX.Element {
  return (
    <div>
      <input
        type="checkbox"
        name="taskCheckbox"
        id="taskCheckbox"
        checked={task.getStatus()}
        onChange={() => handleToggleStatus(task)}
      />
      <span className="taskDescription">{task.getDescription()}</span>
      <Point point={task.getComplexity()} />
      <button type="button" className="deleteTask" onClick={() => handleDeleteTask(task)}>
        Delete
      </button>
    </div>
  )
}

export default Task
