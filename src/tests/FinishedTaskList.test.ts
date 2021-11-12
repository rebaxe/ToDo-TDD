import TaskList from '../classes/TaskList'
import FinishedTaskList from '../classes/FinishedTaskList'

describe('Tasklist subclasses', () => {
  test('TC3a. Get task list', () => {
    const finishedTaskList = new FinishedTaskList()
    expect(finishedTaskList instanceof TaskList).toBeTruthy()
  })
})
