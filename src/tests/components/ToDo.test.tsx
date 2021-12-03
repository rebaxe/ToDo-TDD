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

jest.mock('../../classes/UnfinishedTaskList')
jest.mock('../../classes/FinishedTaskList')
jest.mock('../../classes/PointCounter')
jest.mock('../../classes/Task')
jest.mock('../../classes/EasyPoint')

const mockUnfinishedTaskList = new UnfinishedTaskList()
const mockFinishedTaskList = new FinishedTaskList()
const mockPointCounter = new PointCounter(
  mockUnfinishedTaskList.getPoints(),
  mockFinishedTaskList.getPoints()
)
const mockTask = new Task('test task', false, new EasyPoint())

const todoMock = jest.mock(
  '../../classes/ToDo',
  () => {
    return {
      __esModule: true,
      getPointCounter: jest.fn(() => mockPointCounter)
    }
  },
  { virtual: true }
)
const todoClass = new ToDo(mockUnfinishedTaskList, mockFinishedTaskList, mockPointCounter)

let todo: any

const simulateInputChange = (wrapper: any, inputSelector: any, newValue: any) => {
  const input = wrapper.find(inputSelector)
  input.simulate('change', {
    target: { value: newValue }
  })
  return wrapper.find(inputSelector)
}
beforeEach(() => {
  jest.clearAllMocks()
})

describe('To Do component', () => {
  beforeEach(() => {
    todo = shallow(<ToDoComp todo={todoClass} />)
  })

  it('Should render the to do component', () => {
    expect(todo.getElements()).toMatchSnapshot()
  })

  it('Should render an empty input field', () => {
    const input = todo.find('#add-input')
    expect(input.props().value).toBe('')
  })

  it('Should update input state after clicking on button', () => {
    const updatedState = simulateInputChange(todo, '#add-input', 'new task')
    expect(updatedState.props().value).toEqual('new task')
  })

  it('Should check point with id: easy.', () => {
    const radioBtn = todo.find('#easy')
    radioBtn.simulate('change', {
      target: { checked: true }
    })
    expect(radioBtn.props('checked')).toBeTruthy()
  })

  it('Should check point with id: medium', () => {
    const radioBtn = todo.find('#medium')
    radioBtn.simulate('change', {
      target: { checked: true }
    })
    expect(radioBtn.props('checked')).toBeTruthy()
  })

  it('Should check point with id: hard', () => {
    const radioBtn = todo.find('#hard')
    radioBtn.simulate('change', {
      target: { checked: true }
    })
    expect(radioBtn.props('checked')).toBeTruthy()
  })

  it('Submit button should be disabled', () => {
    const submitBtn = todo.find('#add-btn')
    expect(submitBtn.props().disabled).toBeTruthy()
  })

  it('Should display finished task list', () => {
    jest.spyOn(mockFinishedTaskList, 'getTasks').mockImplementation(() => [mockTask])
    todo = shallow(<ToDoComp todo={todoClass} />)
    const finishedTasks = todo.find('FinishedTasks')
    expect(finishedTasks).toHaveLength(1)
  })

  it('Should display point counter', () => {
    todo = shallow(<ToDoComp todo={todoClass} />)
    const finishedTasks = todo.find('PointCounter')
    expect(finishedTasks).toHaveLength(1)
  })
})
