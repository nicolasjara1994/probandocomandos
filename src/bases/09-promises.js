
import { getHeroeById } from "./bases/08-exp-imp";

/* const promesa = new Promise( (resolve, reject) => {
setTimeout( () => {
    const heroe = getHeroeById(4);
    resolve(heroe);
    //reject('No se pudo encontrar el heroe solicitado')
},2000)
});
promesa.then( (heroe) => {
    console.log(heroe)
    console.log('Heroe importado con exito')
})
//.catch(err => console.error(err) ); */

const getHeroeByIdAsync = (id) => {

return new Promise( (resolve, reject) => {
    setTimeout( () => {
        const p1 = getHeroeById(3);
        console.log(p1)
        if(p1 !== undefined){
            resolve(p1);
        }else{
            reject('No se encontró el heroe solicitado')
        }
    },2000)
    });
};

getHeroeByIdAsync()
    .then(heroe => console.log('Heroe: ', heroe))
    .catch(err => console.log(err));
    