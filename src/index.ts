import { Sorter } from './sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([10, 2000, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

// [1, -3, 5, 10] => [-3, 1, 5, 10]
// [a, X, f, e] => [a, e, f, X]
