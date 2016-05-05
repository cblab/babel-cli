'use strict';

var names = ['John', 'Henry', 'Chris', 'Joseph'];
names = names.map(function (name) {
  return $(name) + 'is cool';
});
console.log(names);