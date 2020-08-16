import { User } from "./models/User";

const user = new User({ id: 1, name: 'Sharun' });

user.on("change", () => {
  console.log("User was changed");
});

user.on("save", () => {
  console.log("User was saved");
});

user.on("error", () => {
  console.log("Error occurred during save process!");
});

user.save();
