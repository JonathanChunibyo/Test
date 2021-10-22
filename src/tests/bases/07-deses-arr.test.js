import '@testing-library/jest-dom';
import { retornaArreglo } from '../../bases/07-deses-arr';

describe('prueba desestructuracion en 07-deses-arr.js', () => {
    test(' devuelve string y numero ', () => {
        const aux = retornaArreglo();
        const [letras,numeros] = retornaArreglo();
        


        expect(aux).toEqual(['AXQW', 1234]);
        //tipo de dato
        expect(typeof letras).toBe('string');
        expect(typeof numeros).toBe('number');
        
    })

})
