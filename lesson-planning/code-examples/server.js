// Require the net module for working with TCP
const net = require('net');

// Create TCP server
const server = net.createServer();

// Declare an array for keeping track of all connected clients
// and a function for sending messages to all users
const allClients = [];

const broadcast = function(message) {
    console.log('Broadcasting to all clients: ' + message);

    // Send a message to every connected client
    for (const connectedClient of allClients) {
        connectedClient.write(message);
    }
};

// Listen for connection events
server.on('connection', function(connectedClient){
    // Expect text input from the newly connected client
    connectedClient.setEncoding('utf8');

    // Message all connected clients about the new connection
    broadcast('A new client has connected.');

    // Add the newly connected client to the list of all the others
    allClients.push(connectedClient);

    // Listen for incoming data for the newly connected client
    connectedClient.on('data', function(data) {
        // Broadcast data from client to every client
        broadcast(data);
    });

    // Send a welcome message to the newly connected client
    connectedClient.write('Welcome!');

    console.log('New connection established.');
});

// Have the serve listen on port 4000
server.listen(4000);

