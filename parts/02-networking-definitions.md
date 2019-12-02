
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

