import _ from 'lodash';

// ini kayak diffence, tapi buat ngecek isi object gitu ya
// ini masih lumayan lieur eung

const objects = [{ 'x': 1, 'y': 2, z: 3 }, { 'x': 2, 'y': 1 }];

const result = _.differenceWith(objects, [{ 'x': 1, 'y': 2 , 'z': 3}], _.isEqual);

console.log(result);

// kalau cuman pakai difference hasilnya gini :
// [ { x: 1, y: 2 }, { x: 2, y: 1 } ]