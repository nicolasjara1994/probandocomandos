const persona = {
    nombre: 'nico',
    edad: 27,
    pais: 'Chile'
}

//const {nombre, pais} = persona

//console.log(nombre, pais);

const retornaPersona = (usuario) => {
    console.log(usuario)
}

retornaPersona(persona);

const heroe = {
    nombre: 'Tony',
    apellido:'Stark',
    edad:45,
    pais:'USA'
}

//Aquí se define qué datos quiero extraer del objeto y se puede asignar nuevos con un valor por defecto
const getHeroe = ({nombre, pais, poder = 'Misil'}) => {

    //está retornando un nuevo objeto usando las variables anteriores y asignandolas a nuevas constantes.
    return{
        naame: nombre,
        country: pais,
        power: poder,
        comidas:{
            desayuno:'Frutas',
            almuerzo:'Lasagna',
            once:'Pan con queso'
        }
    }
};
//desestructuración anidada de objeto comidas{}  //aquí es donde se indica a qué objeto se está haciendo referencia
const {naame,country, comidas:{almuerzo}} = getHeroe(heroe);
//que sería lo mismo que hacerlo así 
// const {almuerzo} = comidas;

console.log(naame, country, almuerzo);



const sumarNumeros = (num1, num2) => {
    console.log(num1 + num2)
}

const resultado = sumarNumeros(4,5);