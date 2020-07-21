import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([10, 2, -1, 2, 14]);
const sorter = new Sorter(numbersCollection);
//const sorter = new Sorter("baBdkeeXAsa");

sorter.sort();

console.log(numbersCollection.data);
