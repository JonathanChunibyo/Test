import heroes from '../data/heroes';

//Buscarlo por una caracteristica en particular con find
function heroeID(heroes) {
    return heroes.id === 1;
}

//console.log(heroes.find(heroeID));

// const en vez de function
//find

export const infoHeroes = (id) => heroes.find( (element) => element.id === id);

//filter
export const heroeOwner = (owner) => heroes.filter( (element) => element.owner === owner);

/* 
console.log(heroeID2(4));
console.log(heroeOwner('DC'));

console.log(personajes);
console.log(dado);
 */