import ToDo from '../classes/ToDo'
import ToDoFactory from '../classes/ToDoFactory'

describe('To Do factory tests', () => {
  test('TC8a. Get instance of to do', () => {
    const factory = new ToDoFactory()
    const todo = factory.getToDo()
    expect(todo instanceof ToDo).toBeTruthy()
  })
})
