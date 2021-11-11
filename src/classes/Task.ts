class Task {
  constructor(readonly description: string, private status: boolean) {}

  public getDescription(): string {
    return this.description
  }

  public getStatus(): boolean {
    return this.status
  }

  public setStatus(value: boolean) {
    this.status = false
  }
}

export default Task
