import _ from 'lodash';

// Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

const arr = [0, 1, false, 2, '', 3];
console.log(_.compact(arr));