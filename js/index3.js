'use strict';

const mensaje1 = 'Nekgikis VII';
const mensaje2 = 'Faraón de Egipto';
const mensaje3 = 'Hijo de Nekgikis VI';
const mensaje4 = 'Quiere reclutar a los mejores developers';
const mensaje5 = '¿Quieres ser uno de ellos?';
const mensaje6 = 'Resuelve este problema y envíanos tu solución';

console.log(mensaje1);

const promise = Promise.resolve();
promise.then(() => {
  console.log(mensaje3);
});

setTimeout(function () {
  console.log(mensaje4);
}, 0);

const promise2 = Promise.resolve();
promise2.then(() => {
  setTimeout(() => {
    console.log(mensaje6);
  });
}, 0);

setTimeout(() => {
  const promise3 = Promise.resolve();
  promise3.then(() => {
    console.log(mensaje5);
  });
}, 0);

console.log(mensaje2);
