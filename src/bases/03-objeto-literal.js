const persona = {
nombre: 'Jonathan',
apellido: 'Rubio',
edad: 22,
nacimiento: 1999,
ced: 99010911784,
direccion: {
    ciudad: 'cucuta',
    pais: 'colombia',
    postal: '11919',
    dir: {
        manzana: 12,
        lote: 8,
        barrio: 'palmeras alta',
    }
}
};


console.table(persona);

const persona2 = {...persona};
persona2.nombre = 'juancho';

console.log(persona);
console.log(persona2);