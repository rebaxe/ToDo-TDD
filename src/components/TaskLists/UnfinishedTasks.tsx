import React from 'react'
import { motion } from 'framer-motion'
import Task from '../Task/Task'
import TaskClass from '../../classes/Task'

type Props = {
  unfinishedTaskList: TaskClass[]
  handleToggleStatus: any
  hasFinishedTasks: boolean
  handleDeleteTask: any
}

const list = {
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 2,
      staggerChildren: 0.5
    }
  },
  hidden: {
    opacity: 0
  }
}

const item = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      duration: 0.7,
      bounce: 0.4
    }
  },
  hidden: { opacity: 0, x: -100 }
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
        <motion.ul initial="hidden" animate="visible" variants={list}>
          {unfinishedTaskList.map((task: TaskClass) => (
            <motion.li variants={item}>
              <Task
                task={task}
                handleToggleStatus={handleToggleStatus}
                handleDeleteTask={handleDeleteTask}
              />
            </motion.li>
          ))}
        </motion.ul>
      )}
    </>
  )
}
export default UnfinishedTasks
