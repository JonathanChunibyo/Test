import { infoHeroes, heroeOwner } from "../../bases/08-imp-exp";
import heroooes, { heroes } from '../../data/heroes'

describe('prueba en archivo 08-imp-exp.js', () => {
    test('debe retornar un heroe por ID ', () => {
        
        const heroeId = 3;
        const heroe = infoHeroes(heroeId);

        const heroeData = heroes.find( h => h.id === heroeId);

        /* console.log(heroe);
        console.log(heroeData);
 */
        expect(heroe).toEqual(heroeData);

    })
    test('debe retornar un undefined si el heroe no existe ', () => {
        
        const heroeId = 12;
        const heroe = infoHeroes(heroeId);

        expect(heroe).toBe(undefined);

    })
    test('debe retornar arreglo con los heroes de DC ', () => {
        
        const owner = 'DC';
        const heroesDC = heroeOwner(owner);
        const heroeOw = heroes.filter( (element) => element.owner === owner);
        
        expect( heroesDC ).toEqual(heroeOw);
        /* console.log(heroeOwnerData);
         */
        
        
        //expect(heroesDC.owner).toEqual(owner);
    })
    test('debe retornar cant arreglo con los heroes de Marvel ', () => {
        
        const owner = 'Marvel';
        const heroesDC = heroeOwner(owner);

        /* console.log(heroesDC);
        console.log(heroeOwnerData);
         */
        
        const cantDatos = heroesDC.length;

        expect(cantDatos).toBe(2);
    })
})
