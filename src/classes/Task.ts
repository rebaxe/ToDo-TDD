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

  // eslint-disable-next-line class-methods-use-this
  public getComplexity(): any {
    return 0
  }
}

export default Task
