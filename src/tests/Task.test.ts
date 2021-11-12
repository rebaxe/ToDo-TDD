import EasyPoint from '../classes/EasyPoint'
import Point from '../classes/Point'
import Task from '../classes/Task'

class StubPoint extends EasyPoint {}

const stubPoint = new StubPoint()
const task = new Task('Water plants', false, stubPoint)

describe('Task tests', () => {
  test('TC1a. Create new task and get description', () => {
    const description = task.getDescription()
    expect(description).toBe('Water plants')
  })
  test('TC1b. Create new task and get status', () => {
    const status = task.getStatus()
    expect(status).toBe(false)
  })
  test('TC1c. Update task status', () => {
    task.setStatus(true)
    const status = task.getStatus()
    expect(status).toBe(true)
  })
  test('TC1d. Get task complexity point', () => {
    const complexity = task.getComplexity()
    expect(complexity as Point).toBeTruthy()
  })
})
