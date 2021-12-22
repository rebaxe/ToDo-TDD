import FinishedTaskList from './FinishedTaskList'
import UnfinishedTaskList from './UnfinishedTaskList'

class PointCounter {
  constructor(
    private unfinishedTasks: UnfinishedTaskList,
    private finishedTasks: FinishedTaskList
  ) {}

  public getMaxPoints(): number {
    return this.calculateUnfinishedPoints() + this.calculateFinishedPoints()
  }

  public getFinishedPoints(): number {
    return this.calculateFinishedPoints()
  }

  public getProgress(): number {
    return this.calculateFinishedPoints() / this.getMaxPoints()
  }

  private calculateFinishedPoints() {
    let points = 0
    const finishedPoints = this.finishedTasks.getPoints()
    finishedPoints.forEach(point => {
      points += point.getPoint()
    })
    return points
  }

  private calculateUnfinishedPoints() {
    let points = 0
    const unfinishedPoints = this.unfinishedTasks.getPoints()
    unfinishedPoints.forEach(point => {
      points += point.getPoint()
    })
    return points
  }
}

export default PointCounter
