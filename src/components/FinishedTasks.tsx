import React from 'react'
import Task from './Task/Task'
import TaskClass from '../classes/Task'

type Props = {
  finishedTaskList: TaskClass[]
  handleToggleStatus: any
  handleDeleteTask: any
}

function FinishedTasks({
  finishedTaskList,
  handleToggleStatus,
  handleDeleteTask
}: Props): JSX.Element {
  return (
    <>
      {!finishedTaskList || finishedTaskList.length < 1 ? null : (
        <ul>
          {finishedTaskList.map((task: TaskClass) => (
            <li>
              <Task
                task={task}
                handleToggleStatus={handleToggleStatus}
                handleDeleteTask={handleDeleteTask}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
export default FinishedTasks
