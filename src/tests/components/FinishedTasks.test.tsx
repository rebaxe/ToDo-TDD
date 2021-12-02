/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { shallow } from 'enzyme'
import EasyPoint from '../../classes/EasyPoint'
import Task from '../../classes/Task'
import FinishedTaskList from '../../classes/FinishedTaskList'

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
        unfinishedTaskList={mockFinishedTaskList.getTasks()}
        handleToggleStatus={handleToggleStatus}
      />
    )
    expect(finishedTasks.children()).toHaveLength(0)
  })
})
