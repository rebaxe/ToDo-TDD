import React from 'react'
import Task from './Task'
import TaskClass from '../classes/Task'

type Props = {
  unfinishedTaskList: TaskClass[]
  handleToggleStatus: any
}

function UnfinishedTasks({ unfinishedTaskList, handleToggleStatus }: Props): JSX.Element {
  return (
    <>
      {!unfinishedTaskList || unfinishedTaskList.length === 0 ? (
        <p className="noTasks">No tasks</p>
      ) : (
        <ul>
          {unfinishedTaskList.map((task: TaskClass) => (
            <li>
              <Task task={task} handleToggleStatus={handleToggleStatus} />
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
export default UnfinishedTasks
