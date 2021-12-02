/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { mount } from 'enzyme'
import Task from '../../../components/Task'
import EasyPoint from '../../../classes/EasyPoint'
import TaskClass from '../../../classes/Task'

jest.mock('../../../classes/Task')
jest.mock('../../../classes/EasyPoint')

const mockTask = new TaskClass('Test task', false, new EasyPoint())
const handleToggleStatus = jest.fn()

let task: any

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Task component', () => {
  it('Should contain task description', () => {
    jest.spyOn(mockTask, 'getDescription').mockImplementation(() => 'Test task')
    task = mount(<Task task={mockTask} handleToggleStatus={handleToggleStatus} />)
    const description = task.find('.taskDescription')
    expect(description.text()).toContain('Test task')
  })
  it('Should contain a checkbox', () => {
    task = mount(<Task task={mockTask} handleToggleStatus={handleToggleStatus} />)
    const checkbox = task.find('input[type="checkbox"]')
    expect(checkbox).toHaveLength(1)
  })

  it('Should call handleToggleStatus when box is checked', () => {
    task = mount(<Task task={mockTask} handleToggleStatus={handleToggleStatus} />)
    const checkbox = task.find('input[type="checkbox"]')
    checkbox.simulate('change', {
      target: { checked: true }
    })
    expect(handleToggleStatus).toHaveBeenCalled()
  })
})
