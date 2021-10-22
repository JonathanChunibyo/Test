//arreglos

const arr = [];
const arrstring = ['H','O','L','A'];
const arr2 = new Array(10);

let num = arr2.length; 
let aux = 0;

for (let index = 0; index < num; index++) {
    arr2.push(aux);
    aux++;
}

aux=10;

for (let index = 0; index < num; index++) {
    arr.push(aux);
    aux--;
}

const arr3 = [ ...arr , 5];

const arr4 = arr.map(
    function(dato){
return dato*2;
    }
);

const arr5 = arrstring.map(
    function(dato){
        return dato + ' soy un espacio ';
    }
);

const arr6 = arrstring.map(
    function(dato){
        return dato + '';
    }
);

console.log(arr);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arrstring);
console.log(arr5);
console.log(arr6);