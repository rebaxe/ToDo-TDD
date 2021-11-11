import Task from '../classes/Task'
import TaskList from '../classes/TaskList'

class StubTask extends Task {
  // eslint-disable-next-line class-methods-use-this
  getDescription() {
    return 'Water plants'
  }
}

describe('Task list tests', () => {
  test('TC2a. Get task list', () => {
    const tasklist = new TaskList()
    const list = tasklist.getTasks()
    expect(list.length).toEqual(0)
  })
  test('TC2b. Add task to list', () => {
    const tasklist = new TaskList()
    const task = new StubTask('Water plants', false)
    tasklist.addTask(task)
    const list = tasklist.getTasks()
    expect(list[0].getDescription()).toBe('Water plants')
  })
})
