/* eslint-disable class-methods-use-this */
import Point from './Point'

class MediumPoint implements Point {
  private point = 2

  getPoint(): number {
    return this.point
  }
}

export default MediumPoint
