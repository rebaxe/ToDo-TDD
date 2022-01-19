/* eslint-disable prettier/prettier */
import React, { ChangeEvent, FormEvent, useState } from 'react'
import EasyPoint from '../../classes/EasyPoint'
import HardPoint from '../../classes/HardPoint'
import MediumPoint from '../../classes/MediumPoint'
import TaskClass from '../../classes/Task'
import ToDoClass from '../../classes/ToDo'
import FinishedTasks from '../TaskLists/FinishedTasks'
import PointCounter from '../PointCounter/PointCounter'
import UnfinishedTasks from '../TaskLists/UnfinishedTasks'
import styles from './TodoComp.module.css'

type Props = {
  todo: ToDoClass
}

function ToDoComp({ todo } : Props): JSX.Element {
  const unfinishedTaskList = todo.getUnfinishedTasks()
  const finishedTaskList = todo.getFinishedTasks()
  const pointCounterClass = todo.getPointCounter()

  const [taskDescription, setTaskDescription] = useState('')
  const [taskPoint, setTaskPoint] = useState('')
  const [unfinishedTasks, setUnfinishedTasks] = useState<Array<TaskClass>>(unfinishedTaskList.getTasks())
  const [finishedTasks, setFinishedTasks] = useState<Array<TaskClass>>(finishedTaskList.getTasks())


  const createPoint = () => {
    if (taskPoint === '1') {
      return new EasyPoint()
    }
    if (taskPoint === '2') {
      return new MediumPoint()
    } 
    return new HardPoint()
  }

  const resetInputText = () => {
    setTaskDescription('')
  }

  const addPoint = () => {
    if (taskPoint) {
      const point = createPoint()
      const task = new TaskClass(taskDescription, false, point)
      unfinishedTaskList.add(task)
      setUnfinishedTasks([...unfinishedTaskList.getTasks()])
      resetInputText()
    }
  }

  const handleNewTask = (e: FormEvent) => {
    e.preventDefault()
    setTaskDescription(taskDescription)
    addPoint()
  }  

  const handleSelectPoint = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskPoint(e.target.value)
  }

  const handleToggleStatus = (task: TaskClass) => {
    todo.toggleStatus(task)
    if (task.getStatus() === false) {
      setUnfinishedTasks([...unfinishedTaskList.getTasks()])
      setFinishedTasks([...finishedTaskList.getTasks()])
    } else {
      setUnfinishedTasks([...unfinishedTaskList.getTasks()])
      setFinishedTasks([...finishedTaskList.getTasks()])
    }
  }

  const handleDeleteTask = (task: TaskClass) => {
    if (task.getStatus() === false) {
      unfinishedTaskList.delete(task)
      setUnfinishedTasks([...unfinishedTaskList.getTasks()])
    } else {
      finishedTaskList.delete(task)
      setFinishedTasks([...finishedTaskList.getTasks()])
    }
  }

  const hasFinishedTasks = (): boolean => {
    return finishedTasks.length > 0
  }
  
  return (
    <div className={styles.todoContainer}>
      <div className={styles.todoHeadingWrapper}>
      <h1>Fun To Do</h1>
        <PointCounter pointCounter={pointCounterClass}/>
      </div>
      <div className={styles.taskListWrapper}>
        <UnfinishedTasks unfinishedTaskList={unfinishedTasks} handleToggleStatus={handleToggleStatus} hasFinishedTasks={hasFinishedTasks()} handleDeleteTask={handleDeleteTask} />
        {(!finishedTasks || finishedTasks.length < 1) ? null : <FinishedTasks finishedTaskList={finishedTasks} handleToggleStatus={handleToggleStatus} handleDeleteTask={handleDeleteTask} /> }
      </div>
      <div className={styles.addTaskForm} >
        <form onSubmit={e => handleNewTask(e)}>
          <div className={styles.formInputs}>
            <input
              id="add-input"
              type="text"
              name="todo"
              onChange={e => setTaskDescription(e.target.value)}
              value={taskDescription}
              placeholder="Add new task..."
            />
            <button id="add-btn" type="submit" disabled={!taskPoint || !taskDescription}>
              Add
            </button>
          </div>
          <div className="form-labels">
            <label htmlFor="easy">
              Easy
              <input type="radio" name="point" id="easy" value="1" onChange={e => handleSelectPoint(e)}/>
            </label>
            <label htmlFor="medium">
              Medium
              <input type="radio" name="point" id="medium" value="2" onChange={e => handleSelectPoint(e)}/>
            </label>
            <label htmlFor="hard">
              Hard
              <input type="radio" name="point" id="hard" value="3" onChange={e => handleSelectPoint(e)}/>
            </label>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ToDoComp
