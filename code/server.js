// Require the net module for working with TCP
const net = require('net');

// Create a TCP server
const server = net.createServer();

// Keep a list of all connected clients
const allClients = [];

const broadcast = function(message) {
    console.log('Broadcasting to all clients:', message);

    for (const connectedClient of allClients) {
        connectedClient.write(message);
    }
};

server.on('connection', function(connectedClient) {
    // Expect text input from the connectClient
    connectedClient.setEncoding('utf8');

    broadcast('A new client has connected.');

    allClients.push(connectedClient);

    connectedClient.on('data', function(data) {
        console.log('Received:', data);
        broadcast(data);
    });

    console.log('New connection established.');
});

// Have our server listen on port 4000
server.listen(4000);

