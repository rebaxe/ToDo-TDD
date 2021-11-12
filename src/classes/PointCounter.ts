import Point from './Point'

class PointCounter {
  constructor(private unfinishedPoints: Point[], private finishedPoints: Point[]) {}

  public getMaxPoints(): number {
    return this.calculateUnfinishedPoints() + this.calculateFinishedPoints()
  }

  public calculateFinishedPoints() {
    let points = 0
    this.finishedPoints.forEach(point => {
      points += point.getPoint()
    })
    return points
  }

  private calculateUnfinishedPoints() {
    let points = 0
    this.unfinishedPoints.forEach(point => {
      points += point.getPoint()
    })
    return points
  }
}

export default PointCounter
