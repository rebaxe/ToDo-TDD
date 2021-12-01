/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { shallow } from 'enzyme'
import Task from '../../../components/Task'
import EasyPoint from '../../../classes/EasyPoint'
import TaskClass from '../../../classes/Task'

jest.mock('../../../classes/Task')
jest.mock('../../../classes/EasyPoint')

const mockTask = new TaskClass('Test task', false, new EasyPoint())

let task: any

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Task component', () => {
  it('Should contain task description', () => {
    jest.spyOn(mockTask, 'getDescription').mockImplementation(() => 'Test task')
    task = shallow(<Task task={mockTask} />)
    const description = task.find('.taskDescription')
    expect(description.text()).toEqual('Test task')
  })
})
