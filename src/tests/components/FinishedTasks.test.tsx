/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { shallow } from 'enzyme'
import EasyPoint from '../../classes/EasyPoint'
import Task from '../../classes/Task'
import FinishedTaskList from '../../classes/FinishedTaskList'
import FinishedTasks from '../../components/FinishedTasks'

jest.mock('../../classes/FinishedTaskList')
jest.mock('../../classes/Task')
jest.mock('../../classes/EasyPoint')

const mockTask = new Task('test task', false, new EasyPoint())

const mockFinishedTaskList = new FinishedTaskList()
let finishedTasks: any
const handleToggleStatus = jest.fn()

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Unfinished tasks component', () => {
  it('Should render no tasks', () => {
    jest.spyOn(mockFinishedTaskList, 'getTasks').mockImplementation(() => [])
    finishedTasks = shallow(
      <FinishedTasks
        finishedTaskList={mockFinishedTaskList.getTasks()}
        handleToggleStatus={handleToggleStatus}
      />
    )
    expect(finishedTasks.children()).toHaveLength(0)
  })
  it('Should render list with one task', () => {
    jest.spyOn(mockFinishedTaskList, 'getTasks').mockImplementation(() => [mockTask])
    finishedTasks = shallow(
      <FinishedTasks
        finishedTaskList={mockFinishedTaskList.getTasks()}
        handleToggleStatus={handleToggleStatus}
      />
    )
    const list = finishedTasks.find('ul')
    expect(list).toHaveLength(1)
  })
  it('Should pass handleToggleStatus to Task', () => {
    jest.spyOn(mockFinishedTaskList, 'getTasks').mockImplementation(() => [mockTask])
    finishedTasks = shallow(
      <FinishedTasks
        finishedTaskList={mockFinishedTaskList.getTasks()}
        handleToggleStatus={handleToggleStatus}
      />
    )
    const task = finishedTasks.find('Task')
    expect(task.props().handleToggleStatus).toBeTruthy()
  })
})
