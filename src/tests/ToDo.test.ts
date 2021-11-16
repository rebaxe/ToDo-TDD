/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
import FinishedTaskList from '../classes/FinishedTaskList'
import UnfinishedTaskList from '../classes/UnfinishedTaskList'
import ToDo from '../classes/ToDo'
import Task from '../classes/Task'
import EasyPoint from '../classes/EasyPoint'
import TaskList from '../classes/TaskList'

jest.unmock('../classes/ToDo')

jest.mock('../classes/UnfinishedTaskList', () => {
  return jest.fn().mockImplementation(() => {
    return {
      add: jest.fn(),
      delete: jest.fn()
    }
  })
})

jest.mock('../classes/FinishedTaskList', () => {
  return jest.fn().mockImplementation(() => {
    return {
      add: jest.fn(),
      delete: jest.fn()
    }
  })
})

jest.mock('../classes/Task', () => {
  return jest.fn(() => {
    return {
      getStatus: true,
      setStatus: jest.fn()
    }
  })
})

jest.mock('../classes/EasyPoint.ts')

describe('ToDo tests', () => {
  // test('TC6a. Get list of unfinished tasks', () => {
  //   const unfinishedTaskList = todo.getUnFinishedTasks()
  //   expect(unfinishedTaskList instanceof UnfinishedTaskList).toBeTruthy()
  // })
  // test('TC6b. Get list of finished tasks', () => {
  //   const finishedTaskList = todo.getFinishedTasks()
  //   expect(finishedTaskList instanceof FinishedTaskList).toBeTruthy()
  // })
  // test('TC6c. Get instance of point counter', () => {
  //   const pointCounter = todo.getPointCounter()
  //   expect(pointCounter instanceof PointCounter).toBeTruthy()
  // })
  test('TC6d. Mark task as finished', () => {
    const unfinishedTaskList = new UnfinishedTaskList()
    const finishedTaskList = new FinishedTaskList()
    // const toDo = new ToDo(new UnfinishedTaskList(), new FinishedTaskList())
    const toDo = new ToDo(unfinishedTaskList, finishedTaskList)
    const task = new Task('test', true, new EasyPoint())
    // const mockedTask = Task as jest.Mocked<typeof Task>
    // mockedTask.getStatus.mockReturnValue(true)
    // toDo.toggleStatus(mockedTask)
    expect(toDo.toggleStatus).toHaveBeenCalled()
  })
})
