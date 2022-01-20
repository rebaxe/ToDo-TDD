/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { mount } from 'enzyme'
import ProgressBar from '../../components/ProgressBar/ProgressBar'

let bar: any

beforeEach(() => {
  jest.clearAllMocks()
})

describe('ProgressBar component', () => {
  it('Should display 0%', () => {
    bar = mount(<ProgressBar completed={0} fillColor="" outlineColor="" label="0" labelColor="" />)
    const label = bar.find('span')
    expect(label.text()).toEqual('0%')
  })
  it('Should display 50%', () => {
    bar = mount(
      <ProgressBar completed={50} fillColor="" outlineColor="" label="50" labelColor="" />
    )
    const label = bar.find('span')
    expect(label.text()).toEqual('50%')
  })
  it('Should display 100%', () => {
    bar = mount(
      <ProgressBar completed={100} fillColor="" outlineColor="" label="100" labelColor="" />
    )
    const label = bar.find('span')
    expect(label.text()).toEqual('100%')
  })
})
