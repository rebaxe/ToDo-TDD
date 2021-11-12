import Point from './Point'

class HardPoint implements Point {
  private point = 3

  getPoint(): number {
    return this.point
  }
}

export default HardPoint
