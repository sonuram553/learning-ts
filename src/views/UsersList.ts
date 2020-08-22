import { Model } from "../models/Model";
import { CollectionView } from "./CollectionView";
import { User, UserProps } from "../models/User";

export class UsersList extends CollectionView<User, UserProps> {
  renderItem(model: Model<UserProps>) {
    return `
    <div>
        <p>User Name: ${model.get("name")}</p>
        <p>User Age: ${model.get("age")}</p>
    </div>
    `;
  }
}
