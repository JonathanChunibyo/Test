//promesa
import { infoHeroes } from './08-imp-exp';




export const HeroeIdAsync = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const heroe = infoHeroes(id);
            if (heroe) {
                resolve(heroe);
            }else{
                reject('No se encontro el heroe');
            }
        }, 1000)
    });
}
/* 
HeroeIdAsync(1)
.then( console.log )
.catch(err => console.warn(err)); */

//otra manera de catch donde toma el primer argumento
// .catch(console.warn);