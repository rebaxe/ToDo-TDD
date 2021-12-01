/* eslint-disable prettier/prettier */
import React, { ChangeEvent, FormEvent, useState } from 'react'

function ToDo(): JSX.Element {
  const [taskDescription, setTaskDescription] = useState('')
  const [taskPoint, setTaskPoint] = useState('')

  const handleNewTask = (e: FormEvent) => {
    e.preventDefault()
    setTaskDescription(taskDescription)
    // Efter submit ska inputfältet tömmas
    // setNewTask('')
  }  

  const handleSelectPoint = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setTaskPoint(e.target.value)
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
       <button id="add-btn" type="submit">
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
