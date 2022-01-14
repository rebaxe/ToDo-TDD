import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import TaskClass from '../classes/Task'
import Point from './Point'
import styles from './Task.module.css'

type Props = {
  task: TaskClass
  handleToggleStatus: any
  handleDeleteTask: any
}

function Task({ task, handleToggleStatus, handleDeleteTask }: Props): JSX.Element {
  return (
    <div className={styles.taskContainer}>
      <div className={styles.taskWrapper}>
        <div className={styles.boxDescriptionWrapper}>
          <input
            type="checkbox"
            name="taskCheckbox"
            id="taskCheckbox"
            checked={task.getStatus()}
            onChange={() => handleToggleStatus(task)}
          />
          <div className={styles.taskDescription}>{task.getDescription()}</div>
        </div>
        <Point point={task.getComplexity()} />
      </div>
      <button type="button" className={styles.deleteTask} onClick={() => handleDeleteTask(task)}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </div>
  )
}

export default Task
