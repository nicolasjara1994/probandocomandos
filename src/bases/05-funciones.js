
//Tarea: Transformar a función flecha que retorne un objeto implicito

/* function getUsuarioActivo (nombre) {
    return{
        uid: 'ABC123',
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo ('Nico');
console.log(usuarioActivo);
 */

const getUsuarioActivo = nombre =>
    ({
        uid: 'ABC123',
        username: nombre
    });

console.log(getUsuarioActivo('Nicolas'))