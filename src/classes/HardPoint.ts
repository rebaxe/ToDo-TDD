/* eslint-disable class-methods-use-this */
import Point from './Point'

class HardPoint implements Point {
  private point = 3

  getPoint(): number {
    return 876
  }
}

export default HardPoint
