// Desestructuración

const persona = {
    nombre: 'Maria',
    apellido: 'jimenez',
    edad: 45,
    sexo: 'f'
};
const persona2 = {
    nombre: 'chopper',
    apellido: 'perez',
    sexo: 'f'
};


const { nombre, apellido, edad } = persona;

console.log(nombre, apellido, edad);

const retornaPersona = (usuario) => {
    console.log(usuario);
}
const retornaPersona2 = (usuario) => {
    const { nombre, apellido, edad } = usuario;
    console.log(nombre, apellido, edad);
}
retornaPersona(persona);
retornaPersona2(persona);

//simplificado
//uso predefinido de variables
const retornaPersona3 = ({ nombre, apellido, sexo, edad = 22 }) => {
    console.log(nombre, apellido, sexo, edad);
}

retornaPersona3(persona);

//persona sin edad predefinida
retornaPersona3(persona2);

const retornaPersona4 = ({ nombre, apellido, sexo, edad = 22 }) => {

    return {
        nombreFamiliar: nombre,
        edadFamiliar: edad,
        gustos: {
            comida: 'perros calientes',
            bebida: 'jugo de mora',
            color: 'azul'
        }
    }

}
const familia = retornaPersona4(persona2);
console.log(familia);

//busqueda anidada
const { nombreFamiliar, edadFamiliar, gustos: {comida, bebida, color} } = 
retornaPersona4(persona);

const gustospersona = {
    comidax: comida,
    bebiday: bebida,
    colorz: color
}
console.log(nombreFamiliar, edadFamiliar);
console.log(gustospersona);
