import React from 'react'
import TaskClass from '../classes/Task'
// import Point from './Point'

type Props = {
  task: TaskClass
}

function Task({ task }: Props): JSX.Element {
  return (
    <div>
      {/* <input type="checkbox" name="taskCheckbox" id="taskCheckbox" /> */}
      {/* {task.getDescription()} */}
      {/* <Point point={task.getComplexity()} /> */}
    </div>
  )
}

export default Task
