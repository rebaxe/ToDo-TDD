/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { shallow } from 'enzyme'
import UnfinishedTaskList from '../../classes/UnfinishedTaskList'
import FinishedTaskList from '../../classes/FinishedTaskList'
import PointCounterClass from '../../classes/PointCounter'
import PointCounter from '../../components/PointCounter/PointCounter'

jest.mock('../../classes/UnfinishedTaskList')
jest.mock('../../classes/FinishedTaskList')
jest.mock('../../classes/PointCounter')
jest.mock('../../classes/Task')
jest.mock('../../classes/EasyPoint')

const mockUnfinishedTaskList = new UnfinishedTaskList()
const mockFinishedTaskList = new FinishedTaskList()
const mockPointCounter = new PointCounterClass(mockUnfinishedTaskList, mockFinishedTaskList)

let counterWrapper: any

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Point counter component', () => {
  it('Counter should not show when no tasks', () => {
    jest.spyOn(mockPointCounter, 'getFinishedPoints').mockImplementation(() => 0)
    jest.spyOn(mockPointCounter, 'getMaxPoints').mockImplementation(() => 0)
    counterWrapper = shallow(<PointCounter pointCounter={mockPointCounter} />)
    const counter = counterWrapper.find('span')
    expect(counter).toEqual({})
  })

  it('Counter should present 0/1 points', () => {
    jest.spyOn(mockPointCounter, 'getFinishedPoints').mockImplementation(() => 0)
    jest.spyOn(mockPointCounter, 'getMaxPoints').mockImplementation(() => 1)
    counterWrapper = shallow(<PointCounter pointCounter={mockPointCounter} />)
    const counter = counterWrapper.find('span')
    expect(counter.text()).toContain('0 / 1')
  })

  it('Counter should present 1/3 points', () => {
    jest.spyOn(mockPointCounter, 'getFinishedPoints').mockImplementation(() => 1)
    jest.spyOn(mockPointCounter, 'getMaxPoints').mockImplementation(() => 3)
    counterWrapper = shallow(<PointCounter pointCounter={mockPointCounter} />)
    const counter = counterWrapper.find('span')
    expect(counter.text()).toContain('1 / 3')
  })
})