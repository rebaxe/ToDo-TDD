/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { shallow } from 'enzyme'
import ToDoComp from '../../components/ToDoComp'
import ToDo from '../../classes/ToDo'
import UnfinishedTaskList from '../../classes/UnfinishedTaskList'
import FinishedTaskList from '../../classes/FinishedTaskList'
import PointCounter from '../../classes/PointCounter'
import EasyPoint from '../../classes/EasyPoint'
import Task from '../../classes/Task'
import UnfinishedTasks from '../../components/UnfinishedTasks'

jest.mock('../../classes/UnfinishedTaskList')
jest.mock('../../classes/FinishedTaskList')
jest.mock('../../classes/PointCounter')
jest.mock('../../classes/Task')
jest.mock('../../classes/EasyPoint')

// const todoMock = ToDoClass as jest.MockedClass<typeof ToDoClass>

const task = new Task('test task', false, new EasyPoint())

const unfinishedTaskListMock = jest.mock(
  '../../classes/UnfinishedTaskList',
  () => {
    return {
      __esModule: true
    }
  },
  { virtual: true }
)

const mockUnfinishedTaskList = new UnfinishedTaskList()

let unfinishedTasks: any

// const simulateInputChange = (wrapper: any, inputSelector: any, newValue: any) => {
//   const input = wrapper.find(inputSelector)
//   input.simulate('change', {
//     target: { value: newValue }
//   })
//   return wrapper.find(inputSelector)
// }

beforeEach(() => {
  jest.clearAllMocks()
})

describe('To Do component', () => {
  beforeEach(() => {
    unfinishedTasks = shallow(
      <UnfinishedTasks unfinishedTaskList={mockUnfinishedTaskList.getTasks()} />
    )
  })

  it('Should render no tasks', () => {
    const p = unfinishedTasks.find('.noTasks')
    expect(p.text()).toEqual('No tasks')
  })

  it('Should render list with one task', () => {
    const list = unfinishedTasks.find('ul')
    expect(list).toHaveLength(1)
  })
})
