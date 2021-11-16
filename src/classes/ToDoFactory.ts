import FinishedTaskList from './FinishedTaskList'
import ToDo from './ToDo'
import UnfinishedTaskList from './UnfinishedTaskList'

class TodoFactory {
  private unfinishedTaskList = new UnfinishedTaskList()

  private finishedTaskList = new FinishedTaskList()

  private toDo = new ToDo(this.unfinishedTaskList, this.finishedTaskList)

  public getToDo(): ToDo {
    return this.toDo
  }
}

export default TodoFactory
