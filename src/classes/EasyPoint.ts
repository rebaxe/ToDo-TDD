/* eslint-disable class-methods-use-this */
import Point from './Point'

class EasyPoint implements Point {
  private point = 1

  getPoint(): number {
    return 1
  }
}

export default EasyPoint
