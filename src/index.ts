import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 2, 11, 2, 14]);
const charsCollection = new CharactersCollection("adclpA");

const linkedList = new LinkedList();
linkedList.add(32);
linkedList.add(2);
linkedList.add(3);
linkedList.add(0);

//const sorter = new Sorter(numbersCollection);
//const sorter = new Sorter(charsCollection);
const sorter = new Sorter(linkedList);

sorter.sort();

//console.log(numbersCollection.data);
//console.log(charsCollection.data);
linkedList.print();
