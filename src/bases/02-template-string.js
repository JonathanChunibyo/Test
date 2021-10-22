
const nombre   = 'Jonathan Adonay';
const apellido = 'Rubio Jimenez';

const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto2 = ` ${nombre} ${apellido} `;

/* console.log(nombreCompleto);
console.log(nombreCompleto2);
 */
export function getSaludo(nombre= 'Usuario'){
//console.log(nombre);
    return 'Hola ' + nombre;
}