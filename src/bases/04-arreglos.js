const personas =
[
    {   
        nombre: 'Nico',
        edad: 27,
        peliculas:['Spiderman','Batman','El efecto mariposa']
    },
    {   
        nombre: 'Roberto',
        edad: 25
    },
    {   
        nombre: 'Juan',
        edad: 17
    },
    {   
        nombre: 'Ignacio',
        edad: 28
    },
];

personas[0].peliculas.push('Ironman');

console.log(personas[0])


const arreglito = [];

arreglito.push('hola',1)
console.log(arreglito)


let arreglo1 = [1,2,3,4]
let arreglo2 = [...arreglo1, 5];

const arreglo3 = arreglo2.map(e => {
    return e * 2;
})
console.log(arreglo1) 
console.log(arreglo2)
console.log(arreglo3)


