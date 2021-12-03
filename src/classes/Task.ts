import Point from './Point'

class Task {
  constructor(private description: string, private status: boolean, private complexity: Point) {}

  public getDescription(): string {
    return this.description
  }

  public getStatus(): boolean {
    return this.status
  }

  public setStatus(value: boolean) {
    this.status = value
  }

  public getComplexity(): Point {
    return this.complexity
  }
}

export default Task
