import TaskList from '../classes/TaskList'

describe('Task list tests', () => {
  test('TC2a. Get task list', () => {
    const tasklist = new TaskList()
    const list = tasklist.getTasks()
    const length = list.length()
    expect(length).toEqual(0)
  })
})
