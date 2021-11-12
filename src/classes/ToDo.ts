import FinishedTaskList from './FinishedTaskList'
// import PointCounter from './PointCounter'
import UnfinishedTaskList from './UnfinishedTaskList'

class ToDo {
  private unfinishedTaskList = new UnfinishedTaskList()

  private finishedTaskList = new FinishedTaskList()

  // private pointCounter = new PointCounter(unfinishedTaskList.getPoints(), finishedTaskList.getPoints())

  getUnFinishedTasks(): UnfinishedTaskList {
    return this.unfinishedTaskList
  }

  getFinishedTasks(): FinishedTaskList {
    return this.finishedTaskList
  }

  // getPointCounter(): PointCounter {
  //   return this.pointCounter
  // }
}

export default ToDo
