/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
import FinishedTaskList from '../../classes/FinishedTaskList'
import UnfinishedTaskList from '../../classes/UnfinishedTaskList'
import ToDo from '../../classes/ToDo'
import Task from '../../classes/Task'
import EasyPoint from '../../classes/EasyPoint'
import PointCounter from '../../classes/PointCounter'

jest.mock('../../classes/Task')
jest.mock('../../classes/UnfinishedTaskList')
jest.mock('../../classes/FinishedTaskList')
jest.mock('../../classes/EasyPoint.ts')
jest.mock('../../classes/PointCounter.ts')

const unfinishedTaskList = new UnfinishedTaskList()
const finishedTaskList = new FinishedTaskList()
const pointCounter = new PointCounter(unfinishedTaskList.getPoints(), finishedTaskList.getPoints())
const toDo = new ToDo(unfinishedTaskList, finishedTaskList, pointCounter)
const task = new Task('test task', false, new EasyPoint())

beforeEach(() => {
  jest.clearAllMocks()
})

describe('ToDo tests', () => {
  it('TC6a. Mark task as finished calls correct methods on lists', () => {
    jest.spyOn(task, 'getStatus').mockImplementation(() => false)
    const spyAdd = jest.spyOn(finishedTaskList, 'add')
    const spyDelete = jest.spyOn(unfinishedTaskList, 'delete')

    toDo.toggleStatus(task)

    expect(spyAdd).toHaveBeenCalledWith(task)
    expect(spyDelete).toHaveBeenCalledWith(task)
    expect(spyAdd).toHaveBeenCalledTimes(1)
    expect(spyDelete).toHaveBeenCalledTimes(1)
  })
  it('TC6b. Mark task as unfinished calls correct methods on lists', () => {
    jest.spyOn(task, 'getStatus').mockImplementation(() => true)
    const spyAdd = jest.spyOn(unfinishedTaskList, 'add')
    const spyDelete = jest.spyOn(finishedTaskList, 'delete')

    toDo.toggleStatus(task)

    expect(spyAdd).toHaveBeenCalledWith(task)
    expect(spyDelete).toHaveBeenCalledWith(task)
    expect(spyAdd).toHaveBeenCalledTimes(1)
    expect(spyDelete).toHaveBeenCalledTimes(1)
  })
  it('TC6c. Get instance of a point counter', () => {
    const counter = toDo.getPointCounter()
    expect(counter instanceof PointCounter).toBeTruthy()
  })
})
