
const { config } = require('../config/wdio.conf');
const driverLogs = 'wdio-chromedriver.log';
const path = require('path');
const chromerPath= path.join(
    __dirname,
    '../../chromedriver',
    'chromedriver'
);
console.log(chromerPath);
//config.before()
const webConfig={
...config,
hostname: 'localhost',
specs: [
    './test/specs/**/*.js'
],
services: ['chromedriver'
    // ...config.services,
    // [
    // 'chromedriver', 
    // {
    //     logFileName: driverLogs, // default
    //     //outputDir: 'driver-logs', // overwrites the config.outputDir
    //     args: ['--silent']
    // },
],

capabilities: [
    {
        browserName: 'chrome',
        acceptInsecureCerts: true,
    },
    
],

beforeTest: async function(){
    await browser.setWindowSize(1280,1024)
    await browser.url('https://www.amazon.in/');
},


};
console.log(webConfig)
exports.config =webConfig;