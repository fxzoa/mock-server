
var mockserver = require('mockserver-node');

mockserver.start_mockserver({
                serverPort: 80,
                trace: true
            });

mockserver.stop_mockserver({
                serverPort: 80
            });
