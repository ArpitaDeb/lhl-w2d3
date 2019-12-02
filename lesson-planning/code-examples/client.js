const net = require('net');
const stdin = process.stdin;

// Interpret incoming data from stdin as text
stdin.setEncoding('utf8');

const client = net.createConnection({
    host: 'localhost',
    port: 4000
});

client.on('connect', function() {
    console.log('Connected to the server.');
});

client.on('data', function(data) {
    console.log(data);
});

client.setEncoding('utf8');

stdin.on('data', function(data) {
    client.write(data);
});
