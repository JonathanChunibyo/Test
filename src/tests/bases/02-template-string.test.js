import '@testing-library/jest-dom';
import { getSaludo } from '../../bases/02-template-string';

describe('pruebas a 02-template-string.js ', () => {
    

    test('prueba en el metodo getSaludo ', () => {
   
        const nombre = 'Jonathan';
        const saludo = getSaludo(nombre);

        expect( saludo).toBe('Hola ' + nombre);
    });
    
    test('prueba en el metodo getSaludo sin parametro', () => {
   
        const saludo = getSaludo();

        expect( saludo).toBe('Hola Usuario');
    });
});
