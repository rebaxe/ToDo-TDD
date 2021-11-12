import Point from './Point'

class PointCounter {
  constructor(private unfinishedPoints: Point[], private finishedPoints: Point[]) {}

  // eslint-disable-next-line class-methods-use-this
  public getMaxPoints(): number {
    return this.calculateMaxPoints()
  }

  private calculateMaxPoints(): number {
    let maxPoints = 0
    maxPoints = this.calculateUnfinishedPoints()
    maxPoints += this.calculateFinishedPoints()
    return maxPoints
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
