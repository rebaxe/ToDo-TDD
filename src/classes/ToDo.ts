import FinishedTaskList from './FinishedTaskList'
import PointCounter from './PointCounter'
import Task from './Task'
import UnfinishedTaskList from './UnfinishedTaskList'

class ToDo {
  private unfinishedTaskList = new UnfinishedTaskList()

  private finishedTaskList = new FinishedTaskList()
  // constructor(
  //   private unfinishedTaskList: UnfinishedTaskList,
  //   private finishedTaskList: FinishedTaskList
  // ) {}

  private pointCounter = new PointCounter(
    this.unfinishedTaskList.getPoints(),
    this.finishedTaskList.getPoints()
  )

  public getUnFinishedTasks(): UnfinishedTaskList {
    return this.unfinishedTaskList
  }

  public getFinishedTasks(): FinishedTaskList {
    return this.finishedTaskList
  }

  public getPointCounter(): PointCounter {
    return this.pointCounter
  }

  public toggleStatus(task: Task) {
    if (task.getStatus()) {
      // task.setStatus(false)
      // this.moveToUnfinishedList(task)
    } else {
      //task.setStatus(true)
      // this.moveToFinishedList(task)
    }
  }

  private moveToFinishedList(task: Task) {
    this.unfinishedTaskList.delete(task)
    this.finishedTaskList.add(task)
  }

  private moveToUnfinishedList(task: Task) {
    this.finishedTaskList.delete(task)
    this.unfinishedTaskList.add(task)
  }
}

export default ToDo
