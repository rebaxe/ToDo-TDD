/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
import FinishedTaskList from '../classes/FinishedTaskList'
import UnfinishedTaskList from '../classes/UnfinishedTaskList'
import ToDo from '../classes/ToDo'
import Task from '../classes/Task'
import EasyPoint from '../classes/EasyPoint'

beforeEach(() => {
  jest.mock('../classes/UnfinishedTaskList')
  jest.mock('../classes/FinishedTaskList')
  jest.mock('../classes/Task')
  jest.mock('../classes/EasyPoint.ts')
})

describe('ToDo tests', () => {
  test('TC6a. Mark task as finished', () => {
    const unfinishedTaskList = new UnfinishedTaskList()
    const finishedTaskList = new FinishedTaskList()
    const toDo = new ToDo(unfinishedTaskList, finishedTaskList)

    const task = new Task('test task', false, new EasyPoint())

    const spyAdd = jest.spyOn(finishedTaskList, 'add')
    const spyDelete = jest.spyOn(unfinishedTaskList, 'delete')

    toDo.toggleStatus(task)
    expect(spyAdd).toHaveBeenCalledWith(task)
    expect(spyDelete).toHaveBeenCalledWith(task)
    expect(spyAdd).toHaveBeenCalledTimes(1)
    expect(spyDelete).toHaveBeenCalledTimes(1)
  })
  test('TC6b. Mark task as unfinished', () => {
    const unfinishedTaskList = new UnfinishedTaskList()
    const finishedTaskList = new FinishedTaskList()
    const toDo = new ToDo(unfinishedTaskList, finishedTaskList)

    const task = new Task('test task', true, new EasyPoint())
    const spyAdd = jest.spyOn(unfinishedTaskList, 'add')
    const spyDelete = jest.spyOn(finishedTaskList, 'delete')

    toDo.toggleStatus(task)
    expect(spyAdd).toHaveBeenCalledWith(task)
    expect(spyDelete).toHaveBeenCalledWith(task)
    expect(spyAdd).toHaveBeenCalledTimes(1)
    expect(spyDelete).toHaveBeenCalledTimes(1)
  })
})
