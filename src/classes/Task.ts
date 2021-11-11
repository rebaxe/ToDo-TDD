class Task {
  constructor(readonly description: string, private status: boolean) {}

  public getDescription(): string {
    return this.description
  }

  public getStatus(): boolean {
    return this.status
  }
}

export default Task
