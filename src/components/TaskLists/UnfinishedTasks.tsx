import React from 'react'
import Task from '../Task/Task'
import TaskClass from '../../classes/Task'

type Props = {
  unfinishedTaskList: TaskClass[]
  handleToggleStatus: any
  hasFinishedTasks: boolean
  handleDeleteTask: any
}

function UnfinishedTasks({
  unfinishedTaskList,
  handleToggleStatus,
  hasFinishedTasks,
  handleDeleteTask
}: Props): JSX.Element {
  return (
    <>
      {!unfinishedTaskList || (unfinishedTaskList.length === 0 && !hasFinishedTasks) ? (
        <p className="noTasks">No tasks</p>
      ) : (
        <ul>
          {unfinishedTaskList.map((task: TaskClass) => (
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
export default UnfinishedTasks
