import _ from 'lodash';

var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'firman',  'active': true },
  { 'user': 'pebbles', 'active': false },
  { 'user': 'jeera',  'active': '' },
  // { 'user': 'farah',  'active': 'ups' },
  { 'user': 'array',  'active': [] }, // ini diaggap true cok
  { 'user': 'ob',  'active': {} }, // ini juga true
];

// dia bakal nyari dari kanan object yang key active nya true, dari mulai sana dia ngeslicing
// semua false sebelum nemu true bakal didrop

console.log(_.dropRightWhile(users, function(o) { return !o.active; }));
// => objects for ['barney']