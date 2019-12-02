
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
  _status code._ Some common status codes are:

    Status code | Meaning
    ------------|--------
     200        | Everything's alright
     404        | Resource not found
     500        | Internal server error

