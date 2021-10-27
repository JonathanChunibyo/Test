import { HeroeIdAsync } from '../../bases/09-promesas';
import heroes from '../../data/heroes';

describe('test para resolver la 09-promesa.js ', () => {


    test('debe retornar un heroe Async', (done) => {

        const id = 1;

        HeroeIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[0]);
                done();
            });
        //console.log(heroes[0]);
    });

    test('debe mandar error cuando el heroe no existe', (done) => {

        const id = 10;

        HeroeIdAsync(id)
            .catch(error => {
                //console.log(error);
                expect(error).toBe('No se encontro el heroe');
                done();
            }
                
            );
    });

})