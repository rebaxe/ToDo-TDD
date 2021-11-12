import TaskList from '../classes/TaskList'
import UnfinishedTaskList from '../classes/UnfinishedTaskList'

describe('Tasklist subclasses', () => {
  test('TC4a. Get task list', () => {
    const unfinishedTaskList = new UnfinishedTaskList()
    expect(unfinishedTaskList instanceof TaskList).toBeTruthy()
  })
})
