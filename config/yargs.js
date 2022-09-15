const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "la base debe ser un numero";
    }
    return true;
  })
  //
  .option("h", {
    alias: "hasta",
    type: "number",
    default: false,
    describe: 'Hasta que tabla llega'
  })
  .option('hasta',{

  })
  .argv;

module.exports = argv;
