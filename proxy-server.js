
var dotenv = require('dotenv').config();
console.log(`## mockserver-properties = ${process.env.MOCKSERVER_PROPERTY_FILE} ##`);

var mockserver = require('mockserver-node');

mockserver.start_mockserver({
                serverPort: 1080,
                proxyRemotePort: process.env.proxyRemotePort,
                proxyRemoteHost: process.env.proxyRemoteHost,
                trace: true,
                verbose: true
            });

/*
mockserver.stop_mockserver({
                serverPort: 80
            });
*/
