import Point from './Point'
import Task from './Task'

class TaskList {
  readonly tasks: Task[] = []

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

  public getPoints(): Point[] {
    return this.calcAllPoints()
  }

  private calcAllPoints(): Point[] {
    const points: Point[] = []
    this.tasks.forEach(task => {
      points.push(task.getComplexity())
    })
    return points
  }
}

export default TaskList
