import EasyPoint from '../classes/EasyPoint'

describe('Point tests', () => {
  test('TC5a. Get value from easypoint', () => {
    const point = new EasyPoint()
    expect(point.getPoint()).toBe(1)
  })
})
