// Require the net module for working with TCP, and the stdin module for
// receiving input form the command line
const net = require('net');
const stdin = process.stdin;

// Interpret incoming data from stdin as text
stdin.setEncoding('utf8');

// Connect to the server on localhost, port 4000
const client = net.createConnection({
    host: 'localhost',
    port: 4000
});

// Expect text input over the TCP connection
client.setEncoding('utf8');

// Listen for the connect event, which triggers when the connection to the
// server has been established
client.on('connect', function() {
    console.log('Connected to the server.');
});

// Listen for data incoming from the server
client.on('data', function(data) {
    console.log(data);
});

// Listen for data incoming from the command line
stdin.on('data', function(data) {

    // Send user input to the server
    client.write(data);
});

