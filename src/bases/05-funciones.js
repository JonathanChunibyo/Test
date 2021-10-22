//funciones

const saludo = function (nombre) {
    return `Hola, ${nombre}`;
}

console.log(saludo('Jonathelo'));

const saludo2 = (nombre) => {
    return `Hola, ${nombre}`;
}


const saludo3 = (nombre) => `Hola, ${nombre}`;

export const getUser = () => ({
    uid: 'ABCD1',
    name: 'ElseñorPioPio'
});

const user = getUser();

//TAREA



//funcion de flecha 
export const getUsuarioActivo = (nombre = 'no tiene nombre') => ({
    uid: 'ABCD2',
    name: nombre
});


//retornar objeto implicito
