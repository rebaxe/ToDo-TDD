import ToDo from '../classes/ToDo'
import UnfinishedTaskList from '../classes/UnfinishedTaskList'

const todo = new ToDo()

describe('ToDo tests', () => {
  test('TC6a. Get list of unfinished tasks', () => {
    const unfinishedTaskList = todo.getUnFinishedTasks()
    expect(unfinishedTaskList instanceof UnfinishedTaskList).toBeTruthy()
  })
})
