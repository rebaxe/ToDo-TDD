/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { mount } from 'enzyme'
import EasyPoint from '../../classes/EasyPoint'
import Point from '../../components/Point'
import MediumPoint from '../../classes/MediumPoint'
import HardPoint from '../../classes/HardPoint'

jest.mock('../../classes/EasyPoint')
jest.mock('../../classes/MediumPoint')
jest.mock('../../classes/HardPoint')

const mockEasyPoint = new EasyPoint()
const mockMediumPoint = new MediumPoint()
const mockHardPoint = new HardPoint()

let point: any

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Point component', () => {
  it('Should be an easy task', () => {
    point = mount(<Point point={mockEasyPoint} />)
    const easyPoint = point.find('.easyPoint')
    expect(easyPoint).toHaveLength(1)
  })
  it('Should be a medium task', () => {
    point = mount(<Point point={mockMediumPoint} />)
    const mediumPoint = point.find('.mediumPoint')
    expect(mediumPoint).toHaveLength(1)
  })
  it('Should be a hard task', () => {
    point = mount(<Point point={mockHardPoint} />)
    const hardPoint = point.find('.hardPoint')
    expect(hardPoint).toHaveLength(1)
  })
})
