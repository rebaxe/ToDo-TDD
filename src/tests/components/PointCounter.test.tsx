/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { shallow } from 'enzyme'
import ToDoComp from '../../components/ToDoComp'
import ToDo from '../../classes/ToDo'
import UnfinishedTaskList from '../../classes/UnfinishedTaskList'
import FinishedTaskList from '../../classes/FinishedTaskList'
import PointCounterClass from '../../classes/PointCounter'
import EasyPoint from '../../classes/EasyPoint'
import Task from '../../classes/Task'

jest.mock('../../classes/UnfinishedTaskList')
jest.mock('../../classes/FinishedTaskList')
jest.mock('../../classes/PointCounter')
jest.mock('../../classes/Task')
jest.mock('../../classes/EasyPoint')

const mockUnfinishedTaskList = new UnfinishedTaskList()
const mockFinishedTaskList = new FinishedTaskList()
const mockPointCounter = new PointCounterClass(
  mockUnfinishedTaskList.getPoints(),
  mockFinishedTaskList.getPoints()
)
const mockTask = new Task('test task', false, new EasyPoint())

let counterWrapper: any

// const simulateInputChange = (wrapper: any, inputSelector: any, newValue: any) => {
//   const input = wrapper.find(inputSelector)
//   input.simulate('change', {
//     target: { value: newValue }
//   })
//   return wrapper.find(inputSelector)
// }
beforeEach(() => {
  jest.clearAllMocks()
})

describe('Point counter component', () => {
  it('Counter should present 0/0 points', () => {
    jest.spyOn(mockPointCounter, 'getFinishedPoints').mockImplementation(() => 0)
    jest.spyOn(mockPointCounter, 'getMaxPoints').mockImplementation(() => 0)
    counterWrapper = shallow(<PointCounter pointCounter={mockPointCounter} />)
    const counter = counterWrapper.find('span')
    expect(counter.text()).toContain('0 / 0')
  })
})
