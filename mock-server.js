
var dotenv = require('dotenv').config();
console.log(`## mockserver-properties = ${process.env.MOCKSERVER_PROPERTY_FILE} ##`);

var mockserver = require('mockserver-node');

mockserver.start_mockserver({
                serverPort: 80,
                trace: true,
//                verbose: true
            });

/*
mockserver.stop_mockserver({
                serverPort: 80
            });
*/
