import React from 'react'
import './global.css'
import ToDoComp from './components/ToDo/ToDoComp'
import TodoFactory from './classes/ToDoFactory'

function App(): JSX.Element {
  const todoFactory = new TodoFactory()

  return (
    <>
      <ToDoComp todo={todoFactory.getToDo()} />
    </>
  )
}

export default App
