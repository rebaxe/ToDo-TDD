/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { shallow } from 'enzyme'
import UnfinishedTaskList from '../../classes/UnfinishedTaskList'
import EasyPoint from '../../classes/EasyPoint'
import Task from '../../classes/Task'
import UnfinishedTasks from '../../components/UnfinishedTasks'

jest.mock('../../classes/UnfinishedTaskList')
jest.mock('../../classes/FinishedTaskList')
jest.mock('../../classes/PointCounter')
jest.mock('../../classes/Task')
jest.mock('../../classes/EasyPoint')

const mockTask = new Task('test task', false, new EasyPoint())

// const unfinishedTaskListMock = jest.mock(
//   '../../classes/UnfinishedTaskList',
//   () => {
//     return {
//       __esModule: true,
//       getTasks: jest.fn(() => mockTask)
//     }
//   },
//   { virtual: true }
// )

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

describe('Unfinished tasks component', () => {
  it('Should render no tasks', () => {
    jest.spyOn(mockUnfinishedTaskList, 'getTasks').mockImplementation(() => [])
    unfinishedTasks = shallow(
      <UnfinishedTasks unfinishedTaskList={mockUnfinishedTaskList.getTasks()} />
    )
    const p = unfinishedTasks.find('.noTasks')
    expect(p.text()).toEqual('No tasks')
  })

  it('Should render list with one task', () => {
    jest.spyOn(mockUnfinishedTaskList, 'getTasks').mockImplementation(() => [mockTask])
    unfinishedTasks = shallow(
      <UnfinishedTasks unfinishedTaskList={mockUnfinishedTaskList.getTasks()} />
    )
    const list = unfinishedTasks.find('ul')
    expect(list).toHaveLength(1)
  })
})
