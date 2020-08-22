import { Model } from "../models/Model";

export abstract class View<T extends Model<K>, K> {
  abstract eventsMap(): { [key: string]: () => void };
  abstract template(): string;

  constructor(protected parent: Element, protected model: T) {
    this.model.on("change", () => {
      this.render();
    });
  }

  bindEvents(fragment: DocumentFragment) {
    const eventsMap = this.eventsMap();

    for (let key in eventsMap) {
      const [eventName, selector] = key.split(":");

      fragment.querySelectorAll(selector).forEach((elem) => {
        elem.addEventListener(eventName, eventsMap[key]);
      });
    }
  }

  render() {
    this.parent.innerHTML = "";

    const template = document.createElement("template");
    template.innerHTML = this.template();
    this.bindEvents(template.content);

    this.parent.append(template.content);
  }
}
