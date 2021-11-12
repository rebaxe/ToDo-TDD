import Point from './Point'

class PointCounter {
  constructor(private unfinishedPoints: Point[], private finishedPoints: Point[]) {}

  // eslint-disable-next-line class-methods-use-this
  public getMaxPoints(): number {
    return 0
  }
}

export default PointCounter
