import TaskList from '../classes/TaskList'

describe('Task list tests', () => {
  test('TC2a. Get task list', () => {
    const tasklist = new TaskList()
    const list = tasklist.getTasks()
    expect(list.length).toEqual(0)
  })
})
