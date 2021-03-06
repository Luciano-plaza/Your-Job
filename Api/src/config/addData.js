const { exec } = require('node:child_process'); //prueba

const executeComand = (DbEmpty) => {
  if (DbEmpty) { //agrega los datos fake a la base de datos
    //ejecuta dos comdos de terminal, (cd src)me ubica en ./src y luego ejecuta el segundo comanddo
    exec('cd src && npx sequelize-cli db:seed:all', (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.error(`stderr: ${stderr}`);
      console.log(`stdout: Datos estaticos cargados a la base de datos`);
    });
  }
}

module.exports = {
  executeComand
}