/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { shallow } from 'enzyme'
import UnfinishedTaskList from '../../classes/UnfinishedTaskList'
import EasyPoint from '../../classes/EasyPoint'
import Task from '../../classes/Task'
import UnfinishedTasks from '../../components/UnfinishedTasks'

jest.mock('../../classes/UnfinishedTaskList')
jest.mock('../../classes/Task')
jest.mock('../../classes/EasyPoint')

const mockTask = new Task('test task', false, new EasyPoint())

const mockUnfinishedTaskList = new UnfinishedTaskList()
let unfinishedTasks: any
const handleToggleStatus = jest.fn()

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Unfinished tasks component', () => {
  it('Should render no tasks', () => {
    jest.spyOn(mockUnfinishedTaskList, 'getTasks').mockImplementation(() => [])
    unfinishedTasks = shallow(
      <UnfinishedTasks
        unfinishedTaskList={mockUnfinishedTaskList.getTasks()}
        handleToggleStatus={handleToggleStatus}
      />
    )
    const p = unfinishedTasks.find('.noTasks')
    expect(p.text()).toEqual('No tasks')
  })

  it('Should render list with one task', () => {
    jest.spyOn(mockUnfinishedTaskList, 'getTasks').mockImplementation(() => [mockTask])
    unfinishedTasks = shallow(
      <UnfinishedTasks
        unfinishedTaskList={mockUnfinishedTaskList.getTasks()}
        handleToggleStatus={handleToggleStatus}
      />
    )
    const list = unfinishedTasks.find('ul')
    expect(list).toHaveLength(1)
  })

  it('Should pass handleToggleStatus to Task', () => {
    jest.spyOn(mockUnfinishedTaskList, 'getTasks').mockImplementation(() => [mockTask])
    unfinishedTasks = shallow(
      <UnfinishedTasks
        unfinishedTaskList={mockUnfinishedTaskList.getTasks()}
        handleToggleStatus={handleToggleStatus}
      />
    )
    const task = unfinishedTasks.find('Task')
    expect(task.props().handleToggleStatus).toBeTruthy()
  })
})
