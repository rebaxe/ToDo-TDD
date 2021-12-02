import React from 'react'
import Task from './Task'
import TaskClass from '../classes/Task'

type Props = {
  finishedTaskList: TaskClass[]
  handleToggleStatus: any
}

function FinishedTasks({ finishedTaskList, handleToggleStatus }: Props): JSX.Element {
  return <>{(!finishedTaskList || finishedTaskList.length === 0) && null}</>
}
export default FinishedTasks
