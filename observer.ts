export interface Observer {
  update(data: any): void;
}

class Subject {
  private observers: Observer[] = [];

  public addObserver(observer: Observer): void {
    // TODO: Implement this method to add an observer to the list
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    // TODO: Implement this method to remove an observer from the list
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  public notifyObservers(data: any): void {
    // TODO: Implement this method to notify all observers
    for (const observer of this.observers) {
      observer.update(data);
    }
  }

  public someBusinessLogic(): void {
    console.log("Doing some business logic...");
    this.notifyObservers("Some data to be sent to observers.");
  }
}

export default Subject;