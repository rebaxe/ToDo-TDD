import Task from './Task'

class TaskList {
  private tasks: Task[] = []

  public getTasks(): Task[] {
    return this.tasks
  }

  public add(task: Task) {
    this.tasks.push(task)
  }
}

export default TaskList
