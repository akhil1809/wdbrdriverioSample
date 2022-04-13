const { config, logPath } = require('../config/wdio.conf');
const path = require('path');
const host = 'localhost';
const port = 4723;
const deviceName =process.env.ANDROID_DEVICE || 'Pixel 4a';
const launchTimeout= 120000;
const readyTimeout= 120000;
const isHeadless= process.env.HEADLESS || false;
const appiumPath = path.join(__dirname,'../../../node_modules/.bin','appium');
const commandTimeout = 30000;
console.log(appiumPath);

const droidConf ={
    ...config,
    hostname: host,
    port: port,
    specs: ['./test/specs/**/*.js'],
    services: [
        ...config.services,
        [
            'appium',
            {
                command: 'appium',
                logPath: logPath,
                args: {
                    address: host,
                    port: port,
                    commandTimeout: commandTimeout,
                    sessionOverride: true,
                    debugLogSpacing: true,
                    logLevel: 'debug',
                },
            },
        ],
    ],
    capabilities: [
        {
            platformName: 'Android',
            'appium:deviceName': deviceName,
            'appium:platformVersion': '12',
            'appium:automationName': 'UiAutomator2',
            'appium:appActivity': 'com.example.myapplication.MainActivity',
            'appium:newCommandTimeout': '240',
            'appium:appPackage': 'com.example.myapplication',

        },
    ],
    
};

console.log(droidConf)
exports.config =droidConf;