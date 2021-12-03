/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { shallow } from 'enzyme'
import App from '../../App'

jest.mock('../../classes/HardPoint')

let app: any

beforeEach(() => {
  jest.clearAllMocks()
})

describe('App component', () => {
  it('Render app component', () => {
    app = shallow(<App />)
    const todo = app.find('ToDoComp')
    expect(todo).toHaveLength(1)
  })
})
