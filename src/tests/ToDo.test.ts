/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
import FinishedTaskList from '../classes/FinishedTaskList'
import PointCounter from '../classes/PointCounter'
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
  test('TC6c. Get instance of point counter', () => {
    const pointCounter = todo.getPointCounter()
    expect(pointCounter instanceof PointCounter).toBeTruthy()
  })
  test('TC6d. Mark task as finished', () => {
    // To Do
  })
})
