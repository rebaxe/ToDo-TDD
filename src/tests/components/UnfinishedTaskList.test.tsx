/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { shallow } from 'enzyme'
import UnfinishedTasks from '../../components/UnfinishedTasks'
import UnfinishedTaskList from '../../classes/UnfinishedTaskList'

let unfinishedTasks: any

// const simulateInputChange = (wrapper: any, inputSelector: any, newValue: any) => {
//   const input = wrapper.find(inputSelector)
//   input.simulate('change', {
//     target: { value: newValue }
//   })
//   return wrapper.find(inputSelector)
// }

jest.mock('../../classes/UnfinishedTaskList.ts')
jest.mock('../../classes/Task.ts')
const unfinishedTaskList = new UnfinishedTaskList()

describe('Unfinished Tasks component', () => {
  beforeEach(() => {
    unfinishedTasks = shallow(<UnfinishedTasks unfinishedTaskList={unfinishedTaskList} />)
  })

  it('Should render the unfinished task component', () => {
    expect(unfinishedTasks.getElements()).toMatchSnapshot()
  })
})
