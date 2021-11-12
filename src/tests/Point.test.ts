import EasyPoint from '../classes/EasyPoint'
import HardPoint from '../classes/HardPoint'
import MediumPoint from '../classes/MediumPoint'

describe('Point tests', () => {
  test('TC5a. Get value from easy point', () => {
    const point = new EasyPoint()
    expect(point.getPoint()).toBe(1)
  })
  test('TC5b. Get value from medium point', () => {
    const point = new MediumPoint()
    expect(point.getPoint()).toBe(2)
  })
  test('TC5c. Get value from hard point', () => {
    const point = new HardPoint()
    expect(point.getPoint()).toBe(3)
  })
})
