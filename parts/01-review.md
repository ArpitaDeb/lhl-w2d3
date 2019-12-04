
## Review

__Asynchronous JS:__

- not synchronous JS

    - JS executes one task at a time
    - synchronous JS exectues in order

- setTimeout – this code runs later, after a specific
  amount of time has passed
- `readFile`, and other I/O operations

- Async code is code that does not execute immediately,
  but at some specified later time or when a particular
  event is triggered.

__Events in JS:__

- could be: an input from a user, (lots of events in the
  browser), stdin `data`

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

