/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { shallow } from 'enzyme'
import ToDo from '../../components/UnfinishedTasks'

let unfinishedTasks: any

// const simulateInputChange = (wrapper: any, inputSelector: any, newValue: any) => {
//   const input = wrapper.find(inputSelector)
//   input.simulate('change', {
//     target: { value: newValue }
//   })
//   return wrapper.find(inputSelector)
// }

describe('Unfinished Tasks component', () => {
  beforeEach(() => {
    unfinishedTasks = shallow(<UnfinishedTasks />)
  })

  it('Should render the unfinished task component', () => {
    expect(unfinishedTasks.getElements()).toMatchSnapshot()
  })
})
