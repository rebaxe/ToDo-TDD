import FinishedTaskList from '../classes/FinishedTaskList'
import ToDo from '../classes/ToDo'
import UnfinishedTaskList from '../classes/UnfinishedTaskList'

const todo = new ToDo()

describe('ToDo tests', () => {
  test('TC6a. Get list of unfinished tasks', () => {
    const unfinishedTaskList = todo.getUnFinishedTasks()
    expect(unfinishedTaskList instanceof UnfinishedTaskList).toBeTruthy()
  })
  test('TC6b. Get list of finished tasks', () => {
    const finishedTaskList = todo.getFinishedTasks()
    expect(finishedTaskList instanceof FinishedTaskList).toBeTruthy()
  })
})
