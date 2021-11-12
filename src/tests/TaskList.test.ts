/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
import EasyPoint from '../classes/EasyPoint'
import Point from '../classes/Point'
import Task from '../classes/Task'
import TaskList from '../classes/TaskList'

class StubTask extends Task {
  getDescription() {
    return 'Water plants'
  }

  getStatus() {
    return false
  }
}

class StubTaskTrue extends Task {
  getDescription() {
    return 'Water plants'
  }

  getStatus() {
    return true
  }
}

class StubPoint extends EasyPoint {}

const stubPoint = new StubPoint()

function comparePoints(point: any) {
  return point as Point
}

function isPoints(points: any) {
  return points.some((point: any) => comparePoints(point))
}

describe('Task list tests', () => {
  test('TC2a. Get task list', () => {
    const tasklist = new TaskList()
    const list = tasklist.getTasks()
    expect(list.length).toEqual(0)
  })
  test('TC2b. Add task to list', () => {
    const tasklist = new TaskList()
    const task = new StubTask('Water plants', false, stubPoint)
    tasklist.add(task)
    const list = tasklist.getTasks()
    expect(list[0].getDescription()).toBe('Water plants')
  })
  test('TC2c. Delete task from list', () => {
    const tasklist = new TaskList()
    const task = new StubTask('Water plants', false, stubPoint)
    tasklist.add(task)
    tasklist.delete(task)
    const list = tasklist.getTasks()
    expect(list.length).toEqual(0)
  })
  test('TC2d. Add tasks to list', () => {
    const tasklist = new TaskList()
    const taskOne = new StubTaskTrue('Water plants', true, stubPoint)
    tasklist.add(taskOne)
    const taskTwo = new StubTask('Water plants', false, stubPoint)
    tasklist.add(taskTwo)
    const taskThree = new StubTaskTrue('Water plants', true, stubPoint)
    tasklist.add(taskThree)
    const list = tasklist.getTasks()
    expect(list.length).toEqual(3)
  })
  test('TC2e. Delete task from list with three tasks', () => {
    const tasklist = new TaskList()
    const taskOne = new StubTaskTrue('Water plants', true, stubPoint)
    tasklist.add(taskOne)
    const taskTwo = new StubTask('Water plants', false, stubPoint)
    tasklist.add(taskTwo)
    const taskThree = new StubTaskTrue('Water plants', true, stubPoint)
    tasklist.add(taskThree)
    tasklist.delete(taskTwo)
    const list = tasklist.getTasks()
    expect(list[1].getStatus()).toBeTruthy()
  })
  test('TC2f. Get task points', () => {
    const tasklist = new TaskList()
    const taskOne = new StubTaskTrue('Water plants', true, stubPoint)
    tasklist.add(taskOne)
    const taskTwo = new StubTask('Water plants', false, stubPoint)
    tasklist.add(taskTwo)
    const taskThree = new StubTaskTrue('Water plants', true, stubPoint)
    tasklist.add(taskThree)
    const points = tasklist.getPoints()
    expect(isPoints(points)).toBeTruthy()
  })
})
