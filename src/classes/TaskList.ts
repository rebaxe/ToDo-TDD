import Task from './Task'

class TaskList {
  private tasks: Task[] = []

  public getTasks(): Task[] {
    return this.tasks
  }
}

export default TaskList
