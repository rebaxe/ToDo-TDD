/* eslint-disable prettier/prettier */
import React, { FormEvent, useState } from 'react'

function ToDo(): JSX.Element {
  const [newTask, setNewTask] = useState('')

 const addTask = (e: FormEvent) => {
   e.preventDefault()
   setNewTask(newTask)
   // Efter submit ska inputfältet tömmas
   // setNewTask('')
 }
 return (
   <div>
     <h1>Fun To Do</h1>
     <form onSubmit={e => addTask(e)}>
       
      
       <input
         id="add-input"
         type="text"
         name="todo"
         onChange={e => setNewTask(e.target.value)}
         value={newTask}
         placeholder="Add new task..."
       />
       <button id="add-btn" type="submit">
         Add
       </button>
       <label htmlFor="easy">
        Easy
        <input type="radio" id="easy" value="1" />
      </label>
      <label htmlFor="medium">
        Medium
        <input type="radio" id="medium" value="2"/>
      </label>
      <label htmlFor="hard">
        Hard
       <input type="radio" id="hard" value="3"/>
      </label>
     </form>
   </div>
 )
}

export default ToDo
