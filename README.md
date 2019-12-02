# W2D3 – Networking with TCP (and HTTP)

## Review

__Asynchronous JS:__

- Async code is code that does not execute immediately,
  but at some specified later time or when a particular
  event is triggered.

__Events in JS:__

- Events are actions or occurrences that happen in the
  system you are programming, which the system tells you
  about so you can respond to them as needed.

- The system will give a signal when an event occurs, so
  that the appropriate response (that is, a callback
  function) is taken.

- An __Event Handler__ is a callback function that will be
  called when an event is triggered.

__The event loop:__

- [Philip Roberts: What the heck is the event loop
  anyway?](https://2014.jsconf.eu/speakers/philip-roberts-what-the-heck-is-the-event-loop-anyway.html)

## Networking – some basic definitions

__Protocol:__

- A set of formal rules that guide the 'communication,'
  that is, the transfer of data between machines.

__TCP (Transmission Control Protocol):__

- Connection must first be established between sender and
  receiver.
- Messages are broken into packets. Each packet must
  contain information about who is sending the message,
  who should receive it, how many total messages there
  are, and the number of the current message.
- Packet meta-data is used to re-assemble them into the
  complete message.
- TCP is what's known as a _reliable_ protocol, because
  the sender is informed whether each packet was received
  at the destination. This information is used by the
  sender to re-send any missing packets. An example of a
  popular protocol that is not reliable is called UDP
  (User Datagram Protocol).

__IP (Internet Protocol):__

- Specifies the address of a machine on the network.
- Includes information about routing, that is, an idea of
  how messages can be delivered to their correct
  destinations.
- IPv4 the established standard, IPv6 slowly being
  deployed. An IPv4 address looks like this:
  `123.123.123.123`

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

## A quick introduction to HTTP

__HTTP (HyperText Transfer Protocol):__

- A protocol for sending and receiving files on the web.
  HTTP is the standard protocol web browsers use to
  communicate with web servers (but it's not the only
  one). HTTP is 'layered' on top of TCP.

- HTTPS (the 'S' stands for 'Secure') is like HTTP, only
  encrypted.

__URL (Uniform Resource Locator):__

- Specifies the address of a particular resource, and is
  made up of several parts:

  `https://www.youtube.com:443/watch?v=SMxx9XEF6m0`

  `https://` – the protocol (in this case not HTTP, but
  HTTPS, which is like HTTPS only encrypted)

  `www.youtube.com` – the domain name or host

  `:443` – the port. `443` is the default port for HTTPS,
  `80` is the default port for HTTP.

  `/watch` – the path to the resource.

  `?v=SMzz9XEF6m0` – query parameters (we'll learn more
  about these next week).

__Request / Response cycle:__

- HTTP(S) requests include a URL and a _method._ The URL
  defines the destination of the request, the method
  defines what _kind_ of request is being made.

- One of the most common methods is called a `GET`
  request. GET requests are for fetching a resource over
  HTTP(S).

- Included in every response from an HTTP(S) server is a
  _status code._

Some common status codes are:

Status code | Meaning
---------------------
 200        | Everything's alright
 404        | Resource not found
 500        | Internal server error

## References and further readings

- [What is a URL? by Steve Barley on YouTube](https://www.youtube.com/watch?v=SMxx9XEF6m0)

