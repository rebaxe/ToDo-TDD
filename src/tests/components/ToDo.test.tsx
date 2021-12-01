/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { shallow } from 'enzyme'
import ToDo from '../../components/ToDo'
import ToDoClass from '../../classes/ToDo'
import UnfinishedTaskList from '../../classes/UnfinishedTaskList'
import FinishedTaskList from '../../classes/FinishedTaskList'
import PointCounter from '../../classes/PointCounter'

jest.mock('../../classes/ToDo.ts')
jest.mock('../../classes/UnfinishedTaskList')
jest.mock('../../classes/FinishedTaskList')
jest.mock('../../classes/PointCounter.ts')
const unfinishedTaskList = new UnfinishedTaskList()
const finishedTaskList = new FinishedTaskList()
const pointCounter = new PointCounter(unfinishedTaskList.getPoints(), finishedTaskList.getPoints())
const todoClass = new ToDoClass(unfinishedTaskList, finishedTaskList, pointCounter)

let todo: any

const simulateInputChange = (wrapper: any, inputSelector: any, newValue: any) => {
  const input = wrapper.find(inputSelector)
  input.simulate('change', {
    target: { value: newValue }
  })
  return wrapper.find(inputSelector)
}

describe('To Do component', () => {
  beforeEach(() => {
    todo = shallow(<ToDo todo={todoClass} />)
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

  // it('Should reset input field after clicking on button', () => {
  //   const updatedInput = simulateInputChange(todo, '#add-input', 'new task')
  //   expect(updatedInput.props().value).toEqual('')
  // })
})
