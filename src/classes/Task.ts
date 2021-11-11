class Task {
  constructor(readonly description: string, private status: boolean) {}

  // eslint-disable-next-line class-methods-use-this
  public getDescription(): string {
    return ''
  }
}

export default Task
