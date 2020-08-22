import { Model } from "../models/Model";
import { Collection } from "../models/Collection";

export abstract class CollectionView<T, K> {
  abstract renderItem(model: T): string;

  constructor(
    protected parent: Element,
    protected collection: Collection<T, K>
  ) {
    this.collection.on("change", () => this.render());
  }

  render() {
    let htmlContents = "";
    for (let item of this.collection.models) {
      htmlContents += this.renderItem(item);
    }

    this.parent.innerHTML = "";
    const template = document.createElement("template");
    template.innerHTML = htmlContents;

    this.parent.append(template.content);
  }
}
