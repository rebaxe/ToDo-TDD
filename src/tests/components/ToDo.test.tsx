/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { shallow } from 'enzyme'
import ToDo from '../../components/ToDo'

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
    todo = shallow(<ToDo />)
  })

  it('Should render the to do component', () => {
    expect(todo.getElements()).toMatchSnapshot()
  })

  it('Should render an empty input field', () => {
    const input = todo.find('input')
    expect(input.props().value).toBe('')
  })

  it('Should update state after clicking on button', () => {
    const updatedState = simulateInputChange(todo, '#add-input', 'new task')
    expect(updatedState.props().value).toEqual('new task')
  })

  it('Should reset input field after clicking on button', () => {
    const updatedInput = simulateInputChange(todo, '#add-input', 'new task')
    expect(updatedInput.props().value).toEqual('')
  })
})
