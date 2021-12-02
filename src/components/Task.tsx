import React from 'react'
import TaskClass from '../classes/Task'
// import Point from './Point'

type Props = {
  task: TaskClass
}

function Task({ task }: Props): JSX.Element {
  return (
    <>
      {/* <input type="checkbox" name="taskCheckbox" id="taskCheckbox" /> */}
      <span className="taskDescription">{task.getDescription()}</span>
      {/* <Point point={task.getComplexity()} /> */}
    </>
  )
}

export default Task
