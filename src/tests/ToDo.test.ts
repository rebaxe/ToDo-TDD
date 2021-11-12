/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
import EasyPoint from '../classes/EasyPoint'
import FinishedTaskList from '../classes/FinishedTaskList'
import PointCounter from '../classes/PointCounter'
import Task from '../classes/Task'
import ToDo from '../classes/ToDo'
import UnfinishedTaskList from '../classes/UnfinishedTaskList'

const todo = new ToDo()

class StubPoint extends EasyPoint {}
const stubPoint = new StubPoint()

class StubTask extends Task {
  getDescription() {
    return 'Water plants'
  }

  getStatus() {
    return false
  }
}

const taskOne = new StubTask('Water plants', false, stubPoint)
const taskTwo = new StubTask('Water plants', true, stubPoint)
const taskThree = new StubTask('Laundry', false, stubPoint)

// class StubTaskTrue extends Task {
//   getDescription() {
//     return 'Water plants'
//   }

//   getStatus() {
//     return true
//   }
// }

class StubFinishedTaskList extends FinishedTaskList {}

class StubUnfinishedTaskList extends UnfinishedTaskList {}
const finishedTaskListStub = new StubFinishedTaskList()
const unfinishedTaskListStub = new StubUnfinishedTaskList()

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
    finishedTaskListStub.add(taskOne)
    finishedTaskListStub.add(taskTwo)
    finishedTaskListStub.add(taskThree)
    todo.toggleStatus(taskOne)
    expect(taskOne.getStatus).toBeTruthy()
  })
})
