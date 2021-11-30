/* eslint-disable prettier/prettier */
import React, { FormEvent, useState } from 'react'

function ToDo(): JSX.Element {
  const [newTask, setNewTask] = useState('')

  const addTask = (e: FormEvent) => {
    e.preventDefault()
  }
  return (
    <div>
      <h1>Fun To Do</h1>
      <form onSubmit={e => addTask(e)}>
        <input type="text" name="todo" onChange={e => setNewTask(e.target.value)} value={newTask} />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default ToDo
