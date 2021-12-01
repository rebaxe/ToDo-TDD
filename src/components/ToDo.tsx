/* eslint-disable prettier/prettier */
import React, { ChangeEvent, FormEvent, useState } from 'react'
import EasyPoint from '../classes/EasyPoint'
import HardPoint from '../classes/HardPoint'
import MediumPoint from '../classes/MediumPoint'
import TaskClass from '../classes/Task'
import ToDoClass from '../classes/ToDo'

type Props = {
  todo: ToDoClass
}

function ToDo({ todo } : Props): JSX.Element {
  // const unfinishedTaskList = todo.getUnfinishedTasks()
  // const finishedTaskList = todo.getFinishedTasks()

  const [taskDescription, setTaskDescription] = useState('')
  const [taskPoint, setTaskPoint] = useState('')
  // const [unfinishedTasks, setUnfinishedTasks] = useState<Array<TaskClass>>(unfinishedTaskList.tasks)

  // const createPoint = () => {
  //   if (taskPoint === '1') {
  //     return new EasyPoint()
  //   }
  //   if (taskPoint === '2') {
  //     return new MediumPoint()
  //   } 
  //     return new HardPoint()
  //   }

  // const addPoint = () => {
  //   if (taskPoint) {
  //     const point = createPoint()
  //     const task = new TaskClass(taskDescription, false, point)
  //     unfinishedTaskList.add(task)
  //     setUnfinishedTasks([...unfinishedTaskList.tasks])
  //   }
  // }

  const handleNewTask = (e: FormEvent) => {
    e.preventDefault()
    setTaskDescription(taskDescription)
    // addPoint()
    // Efter submit ska inputfältet tömmas
    // setNewTask('')
  }  

  const handleSelectPoint = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskPoint(e.target.value)
  }

  
 return (
   <div>
     <h1>Fun To Do</h1>
     <form onSubmit={e => handleNewTask(e)}>
       <input
         id="add-input"
         type="text"
         name="todo"
         onChange={e => setTaskDescription(e.target.value)}
         value={taskDescription}
         placeholder="Add new task..."
       />
       <button id="add-btn" type="submit" disabled={!taskPoint}>
         Add
       </button>
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
     </form>
   </div>
 )
}

export default ToDo
