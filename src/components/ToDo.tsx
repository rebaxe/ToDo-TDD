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
    </div>
  )
}

export default ToDo
