/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { mount } from 'enzyme'
import EasyPoint from '../../classes/EasyPoint'
import Point from '../../components/Point'

jest.mock('../../classes/EasyPoint')

const mockEasyPoint = new EasyPoint()

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
})
