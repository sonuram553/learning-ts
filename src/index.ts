import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

/* const numbersCollection = new NumbersCollection([10, 0, 11, 2, 14]);
numbersCollection.sort();
console.log(numbersCollection.data); */

/* const charsCollection = new CharactersCollection("kladXjkAb");
charsCollection.sort();
console.log(charsCollection.data); */

const linkedList = new LinkedList();
linkedList.add(3);
linkedList.add(90);
linkedList.add(10);
linkedList.add(1);

linkedList.sort();
linkedList.print();
