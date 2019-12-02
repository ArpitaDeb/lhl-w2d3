const net = require('net');

const server = net.createServer();
const allClients = [];

const broadcast = function(message) {
    console.log('Broadcasting to all clients: ' + message);
    for (const connectedClient of allClients) {
        connectedClient.write(message);
    }
};

server.on('connection', function(connectedClient){
    connectedClient.setEncoding('utf8');
    broadcast('A new client has connected.');

    allClients.push(connectedClient);

    connectedClient.on('data', function(data) {
        broadcast(data);
    });

    connectedClient.write('Welcome!');
    console.log('New connection established.');
});

server.listen(4000);

