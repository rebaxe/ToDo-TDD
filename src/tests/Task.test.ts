import Task from '../classes/Task'

describe('Task tests', () => {
  test('TC1. Create new task', () => {
    const task = new Task('Water plants', false)
    const description = task.getDescription()
    expect(description).toBe('Water plants')
  })
})
