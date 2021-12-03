import React from 'react'
import Task from './Task'
import TaskClass from '../classes/Task'

type Props = {
  finishedTaskList: TaskClass[]
  handleToggleStatus: any
}

function FinishedTasks({ finishedTaskList, handleToggleStatus }: Props): JSX.Element {
  return (
    <>
      {!finishedTaskList || finishedTaskList.length < 1 ? null : (
        <ul>
          {finishedTaskList.map((task: TaskClass) => (
            <li>
              <Task task={task} handleToggleStatus={handleToggleStatus} />
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
export default FinishedTasks
