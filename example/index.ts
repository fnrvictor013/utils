import path from 'path';
import { Client } from '../lib';

console.log('asd');

const asd = new Client().replaceInDoc(
  './example/',
  '/fileExemple.hbs',
  {
    name: 'eu',
    date: '20/20/20'
  }
);

console.log({asd});

console.log('fim');