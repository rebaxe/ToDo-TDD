import FinishedTaskList from './FinishedTaskList'
import PointCounter from './PointCounter'
import ToDo from './ToDo'
import UnfinishedTaskList from './UnfinishedTaskList'

class TodoFactory {
  private unfinishedTaskList = new UnfinishedTaskList()

  private finishedTaskList = new FinishedTaskList()

  private pointCounter = new PointCounter(this.unfinishedTaskList, this.finishedTaskList)

  private toDo = new ToDo(this.unfinishedTaskList, this.finishedTaskList, this.pointCounter)

  public getToDo(): ToDo {
    return this.toDo
  }
}

export default TodoFactory
