interface Events {
  [key: string]: Callback[];
}

type Callback = () => void;

export class Eventing {
  private events: Events = {};

  on(eventName: string, callback: Callback) {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string) {
    const handlers = this.events[eventName] || [];
    for (let callback of handlers) {
      callback();
    }
  }
}
