import { Model } from "../models/Model";

export abstract class View<T extends Model<K>, K> {
  abstract template(): string;

  regions: { [key: string]: Element } = {};

  constructor(protected parent: Element, protected model: T) {
    this.model.on("change", () => {
      this.render();
    });
  }

  regionsMap(): { [key: string]: string } {
    return {};
  }

  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  onRender() {}

  bindEvents(fragment: DocumentFragment) {
    const eventsMap = this.eventsMap();

    for (let key in eventsMap) {
      const [eventName, selector] = key.split(":");

      fragment.querySelectorAll(selector).forEach((elem) => {
        elem.addEventListener(eventName, eventsMap[key]);
      });
    }
  }

  mapRegions(fragment: DocumentFragment) {
    const map = this.regionsMap();
    for (let key in map) {
      const elem = fragment.querySelector(map[key]);
      if (elem) this.regions[key] = elem;
    }
  }

  render() {
    this.parent.innerHTML = "";

    const template = document.createElement("template");
    template.innerHTML = this.template();
    this.bindEvents(template.content);
    this.mapRegions(template.content);

    this.onRender();

    this.parent.append(template.content);
  }
}
