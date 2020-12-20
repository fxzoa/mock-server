
//var dotenv = require('dotenv').config();
//console.log(`## mockserver-properties = ${process.env.MOCKSERVER_PROPERTY_FILE} ##`);

var mockserver = require('mockserver-node');

mockserver.start_mockserver({
                serverPort: 1080,
                proxyRemotePort: 4000,
                proxyRemoteHost: "localhost",
                trace: true,
//                verbose: true
            });

/*
mockserver.stop_mockserver({
                serverPort: 80
            });
*/
