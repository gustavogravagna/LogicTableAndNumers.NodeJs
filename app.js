const { crearArchivo } = require('././helpers/multiplicar');
const argv = require('./config/yargs');



// require simples
require('colors');




crearArchivo( argv.b, argv.l, argv.h )
     .then(nombreArchivo => console.log(nombreArchivo.yellow, 'Creada'))
     .catch(err => console.log(err));



// TAREA 1 QUE MI FUNCION DE CREAR ARCHIVO ME RETORNE UNA INFORMACION SI SE HISO CORRECAMTEN
// O NOS DA UN ERROR, QUIERE IMPRIMIR EL ERROR. Con then y catch
// CONVIERTIENDO TODA LA FUNCION ENTERA EN UNA PROMESA


// TAREA 2
// HACEMOS QUE 'L HAGA ALGO
// OPTION('L')
// LISTAR
// BOOLEAN
// DEFAULT: FALSE

// AYUDA: LE MANDAMOS L COMO ARGUMENTO A CREARARCHIVO() ( ES DECIR LO PEDIMOS EN ESA FUNCION)
// ENTONCES CUANDO YO EJECUTE NODE APP.JS B 6 , SI ESCRIBO L MUESTRA EL LISTADO DE LA TABLA
// SI NO ESCRIBO NADA SOLO IMPRIME LA SALIDA QUE ES LA QUE ESTA EN MULTIPLICAR.JS