
## Building a TCP client and server with Node

We're going to build a TCP server that multiple clients
can connect to at the same time. When a client connects to
the server, all other connected clients are informed. When
a client sends a message to the server, the server sends
the message to all other connected clients.

- Server needs to be set up to accept incoming connection
  requests

- Client(s) needs to know where to connect to the server

- Server needs to keep a list of all connected clients

[See the working example in /code](#)

