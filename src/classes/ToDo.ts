import FinishedTaskList from './FinishedTaskList'
import UnfinishedTaskList from './UnfinishedTaskList'

class ToDo {
  private unfinishedTaskList = new UnfinishedTaskList()

  private finishedTaskList = new FinishedTaskList()

  // pointCounter = new PointCounter(unfinishedTaskList.getPoints(), finishedTaskList.getPoints())

  getUnFinishedTasks(): UnfinishedTaskList {
    return this.unfinishedTaskList
  }
}

export default ToDo
