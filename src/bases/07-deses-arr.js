/* const personajes = ['Goku','Vegeta','Trunks'];
personajes.push('Picolo')

const [,,,p] = personajes;

console.log(p);

const retornaArreglo = () => {
    return ['AAA',2,3];
};

const [letters] = retornaArreglo();
console.log(letters); */

const retornaArreglo = (valor) => {
    return [valor, ()=>{console.log('Hola mundo!')}]
}

const [valor, setNombre] = retornaArreglo('Nicolas')

console.log(valor);
setNombre();