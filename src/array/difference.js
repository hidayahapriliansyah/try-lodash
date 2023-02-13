import _ from 'lodash';

// console.log(_.difference([2, 1], [2, 1]));

const arr = [2, 4, 5, 8, 'a'];
const otherArr = ['a', 5];

console.log(_.difference(arr, otherArr));
