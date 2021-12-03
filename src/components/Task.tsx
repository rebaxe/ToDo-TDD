import React from 'react'
import TaskClass from '../classes/Task'
import Point from './Point'

type Props = {
  task: TaskClass
  handleToggleStatus: any
}

function Task({ task, handleToggleStatus }: Props): JSX.Element {
  return (
    <>
      <input
        type="checkbox"
        name="taskCheckbox"
        id="taskCheckbox"
        checked={task.getStatus()}
        onChange={() => handleToggleStatus(task)}
      />
      <span className="taskDescription">{task.getDescription()}</span>
      <Point point={task.getComplexity()} />
    </>
  )
}

export default Task
