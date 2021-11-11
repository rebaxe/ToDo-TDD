import Task from './Task'

class TaskList {
  private tasks: Task[] = []

  public getTasks(): Task[] {
    return this.tasks
  }

  public add(task: Task) {
    this.tasks.push(task)
  }

  public delete(taskToDelete: Task) {
    const index = this.tasks.indexOf(taskToDelete)
    this.tasks.splice(index, 1)
  }
}

export default TaskList
