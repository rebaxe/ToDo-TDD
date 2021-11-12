import FinishedTaskList from './FinishedTaskList'
import UnfinishedTaskList from './UnfinishedTaskList'

class ToDo {
  private unFinishedTaskList = new UnfinishedTaskList()

  private finishedTaskList = new FinishedTaskList()

  // pointCounter = new PointCounter(unfinishedTaskList.getPoints(), finishedTaskList.getPoints())

  // eslint-disable-next-line class-methods-use-this
  getUnFinishedTasks(): any {
    return ''
  }
}

export default ToDo
