/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
import EasyPoint from '../classes/EasyPoint'
import FinishedTaskList from '../classes/FinishedTaskList'
import PointCounter from '../classes/PointCounter'
import UnfinishedTaskList from '../classes/UnfinishedTaskList'

class StubPoint extends EasyPoint {}
const stubPoint = new StubPoint()
const stubPoints = [stubPoint, stubPoint, stubPoint]

class StubFinishedTaskList extends FinishedTaskList {
  getPoints() {
    return stubPoints
  }
}

class StubUnfinishedTaskList extends UnfinishedTaskList {
  getPoints() {
    return stubPoints
  }
}

const finishedTaskList = new StubFinishedTaskList()
const unfinishedTaskList = new StubUnfinishedTaskList()

const pointCounter = new PointCounter(unfinishedTaskList.getPoints(), finishedTaskList.getPoints())

describe('Point counter tests', () => {
  test('TC7a. Get max points', () => {
    expect(pointCounter.getMaxPoints()).toBe(3)
  })
})
