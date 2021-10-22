import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../bases/05-funciones';

describe('Test para funcions en 05-funciones.js', () => {
    test('Funcionalidad en getUser', () => {
        
        const user = {
            uid: 'ABCD1',
            name: 'ElseñorPioPio'
        }
        const testUser = getUser();
console.log(testUser);
console.log(user);
        expect(testUser).toEqual(user);
    })
    test('Test para funcions en 05-funciones.js con valor de nombre ', () => {
        
        const nombre = "Jona-than";
        const usPrueba = {
            uid: 'ABCD2',
            name: 'Jona-than',
        }
        const usuario = getUsuarioActivo(nombre);
        console.log(usPrueba);
        console.log(usuario.name);
        expect(usuario.name).toEqual(nombre);
    })
    
    
    
})
