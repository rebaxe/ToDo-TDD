import React from 'react'
import './global.css'
import ToDo from './components/ToDo'
import TodoFactory from './classes/ToDoFactory'

function App(): JSX.Element {
  const todoFactory = new TodoFactory()

  return (
    <>
      <ToDo todo={todoFactory.getToDo()} />
    </>
  )
}

export default App
