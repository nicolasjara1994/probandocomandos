import { heroes } from "../data/heroes";

/* const getHeroeById = (id) => {
     return heroes.find( (heroe) => {
        if(heroe.id === id){
            return true;
        }
});
};
console.log(heroes)
console.log(getHeroeById(4)); */

export const getHeroeById = (id) => {
    return heroes.find( (heroe) => heroe.id === id );
};
console.log(heroes)
console.log(getHeroeById(3));

const getHeroeByName = name => heroes.find( heroe => heroe.name === name );

console.log(getHeroeByName('Spiderman'));


const getHeroesByOwner = (owner) => {
    return heroes.filter( (heroes) => heroes.owner === owner)
}

console.log(getHeroesByOwner('Marvel'));