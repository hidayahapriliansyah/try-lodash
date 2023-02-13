// Creates a slice of array with n elements dropped from the beginning.
// kalau gak pake argumen banyak pemotong, maka otomatis 1.

import _ from 'lodash';

console.log(_.drop([1, 2, 3]));
console.log(_.drop([1, 2, 3], 2));
console.log(_.drop([1, 2, 3], 5));
console.log(_.drop([1, 2, 3], 0));

const arr = [1, 2, 3, 4, 5];
_.drop(arr, 1);

// return the slice of array