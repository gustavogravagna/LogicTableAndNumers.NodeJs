const fs = require('fs');
var colors = require('colors');
colors.enable();


const crearArchivo = (base = 5, listar = false, hasta = 10) => {
    return new Promise((resolve, reject) => {

        let salida = '';
        let consola = '';


        for(let i = 1; i<=hasta; i++){
            salida += `${base} x ${i} = ${base * 1}\n`; 
            consola += `${base} ${'x'.red} ${i} ${'='.red} ${base * 1}\n`; 

        }

        // TAREA DEL LISTAR ASI SE HACE
        if(listar){
            console.log('================================'.yellow);
            console.log(`Tabla del ${ base }`.yellow);
            console.log('================================'.yellow);
            console.log(consola)
        }


        fs.writeFileSync(`./salida/Tabla-${base}.txt`,salida);
        // IMPRIMIMOS DE OTRA FORMA console.log(`tabla-${base}.txt creado`)

        resolve(`tabla-${base}.txt`);
        

    })
};

module.exports = {
    crearArchivo
}