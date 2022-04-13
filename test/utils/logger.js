const chalk = require('chalk');

const colors= new Map();
const LOGGER= process.env.LOGGER || true;
console.log(chalk.green());
colors
  .set('INFO', chalk.bold.blueBright)
  .set('ERROR', chalk.bold.red)
  .set('DEBUG', chalk.bold.magneta)
  .set('WARN' ,chalk.bold.yellow);

  const  logFromTest = (level, message, ...optionalParams) => {
      if(LOGGER) {
          const msg= `${new Date().toISOString()} [${level}] ${[
              message,
              ...optionalParams,
          ].join()
          }`;
          console.log(colors.get(level)(msg));
      }
  };

  export default{
      info: (message, ...optionalParams)=>
      logFromTest('INFO', message,optionalParams),
      info: (message, ...optionalParams)=>
      logFromTest('DEBUG', message,optionalParams),
      info: (message, ...optionalParams)=>
      logFromTest('WARN', message,optionalParams),
      info: (message, ...optionalParams)=>
      logFromTest('ERROR', message,optionalParams),
  };
 