class Task {
  constructor(readonly description: string, private status: boolean) {}

  public getDescription(): string {
    return this.description
  }

  // eslint-disable-next-line class-methods-use-this
  public getStatus(): boolean {
    return true
  }
}

export default Task
