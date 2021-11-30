import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import ToDo from '../../components/ToDo'

Enzyme.configure({ adapter: new Adapter() })
describe('To Do component', () => {
  it('Should render the to do component', () => {
    const todo = shallow(<ToDo />)
    expect(todo.getElements()).toMatchSnapshot()
  })
})
