import { shallow } from 'enzyme'
import ToDo from '../../components/ToDo'

describe('To Do component', () => {
  it('Should render the to do component', () => {
    const todo = shallow(<ToDo />)
    expect(todo).toMatchSnapshot()
  })
})
