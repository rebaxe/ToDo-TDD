/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { mount } from 'enzyme'
import EasyPoint from '../../classes/EasyPoint'
import Point from '../../components/Point'
import MediumPoint from '../../classes/MediumPoint'

jest.mock('../../classes/EasyPoint')
jest.mock('../../classes/MediumPoint')

const mockEasyPoint = new EasyPoint()
const mockMediumPoint = new MediumPoint()

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
    const easyPoint = point.find('.mediumPoint')
    expect(easyPoint).toHaveLength(1)
  })
})
