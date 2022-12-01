const persona = {
    nombre: 'Nicolas',
    apellido: 'Jara',
    edad: 27,
    direccion:{
        ciudad: 'Santiago',
        region: 'Metropolitana',
        comuna: 'PAC'
    }
}

const persona2 = {...persona};
persona2.nombre = 'Manuel';
persona2.direccion.ciudad = 'Colchagua';
persona2.direccion.region = 'Ohiggins';
persona2.direccion.comuna = 'Chimbarongo';




console.log(persona);
console.log(persona2);