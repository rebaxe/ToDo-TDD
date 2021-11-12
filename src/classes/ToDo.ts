import FinishedTaskList from './FinishedTaskList'
import PointCounter from './PointCounter'
import UnfinishedTaskList from './UnfinishedTaskList'

class ToDo {
  private unfinishedTaskList = new UnfinishedTaskList()

  private finishedTaskList = new FinishedTaskList()

  private pointCounter = new PointCounter(
    this.unfinishedTaskList.getPoints(),
    this.finishedTaskList.getPoints()
  )

  getUnFinishedTasks(): UnfinishedTaskList {
    return this.unfinishedTaskList
  }

  getFinishedTasks(): FinishedTaskList {
    return this.finishedTaskList
  }

  // eslint-disable-next-line class-methods-use-this
  getPointCounter(): any {
    return ''
  }
}

export default ToDo
