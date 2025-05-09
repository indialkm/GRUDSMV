import { unique, groupBy, sumBy } from './utils/arrayUtils.js';

/***** Use unique ****/
const num01 = [1, 4, 4, 3, 21, 22, 21,25,25,25];
console.log("Números sem as repetições no conjunto: ", unique(num01) );


/***** Use groupBy ****/

const carrinho = [

    {roupa: 'Vestido vermelho', categoria: 'Vestido'},
    {roupa: 'Calça social', categoria: 'Calça'},
    {roupa: 'Vestido floral', categoria: 'Vestido'},
    {roupa: 'Vestido de noite', categoria: 'Vestido'},
    {roupa: 'Calça jeans', categoria: 'Calça'},
   
];

const carrinhoItens = groupBy(carrinho, 'categoria');

console.log(carrinhoItens ) ;

/***** Use sumBy ****/

const carrinhoTotal = [
    { preco: 15.00, produto: 'Pants' },
    { preco: 55.00, produto: 'Dress' },
    { preco: 15.00, produto: 'Dress' },
    { preco: 35.00, produto: 'Pants' },
    { preco: 405.00, produto: 'Dress' },
];

const total = sumBy(carrinhoTotal, 'preco');
console.log('Total da compra:', total); 

