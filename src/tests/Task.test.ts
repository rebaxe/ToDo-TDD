import Task from '../classes/Task'

describe('Task tests', () => {
  test('TC1. Create new task and get description', () => {
    const task = new Task('Water plants', false)
    const description = task.getDescription()
    expect(description).toBe('Water plants')
  })
  test('TC2. Create new task and get status', () => {
    const task = new Task('Water plants', false)
    const status = task.getStatus()
    expect(status).toBe(false)
  })
  test('TC3. Update task status', () => {
    const task = new Task('Water plants', false)
    task.setStatus(true)
    const status = task.getStatus()
    expect(status).toBe(true)
  })
})
