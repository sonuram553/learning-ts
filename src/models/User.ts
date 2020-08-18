import { Model } from "./Model";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { ApiSync } from "./ApiSync";
import { Collection } from "./Collection";

export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

const BaseUrl = "http://localhost:3000/users";

export class User extends Model<UserProps> {
  static buildUser(data: UserProps): User {
    return new User(new Attributes(data), new Eventing(), new ApiSync(BaseUrl));
  }

  static buildUserCollection() {
    return new Collection("http://localhost:3000/users", User.buildUser);
  }
}
