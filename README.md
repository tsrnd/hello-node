# Hello Node.js

## REPL Terminal
https://www.tutorialspoint.com/nodejs/nodejs_repl_terminal.htm

## npm install
https://www.tutorialspoint.com/nodejs/nodejs_npm.htm

## Day 2
### callback
- call file without callback

```
$ cd D2/callback/
$ node blocking_code.js

# output : 
Hello nodejs - I'm HuyDoan
```

- call file with callback

```
$ cd D2/callback/
$ node non-blocking_code.js

# output : 
Program Ended
Hello nodejs - I'm HuyDoan
```

### event loop
```
$ cd D2/event-loop/
$ node main.js

# output : 
connection successful.
data received successfully.
Program Ended.
```

### event emitter
```
$ cd D2/event-emitter/
$ node main.js

# output : 
2 Listner(s) listening to connection event
listener1 executed !
listener2 executed !
Listener1 will not listen now.
listener2 executed !
1 Listner(s) listening to connection event
Program Ended.
```

## Day 3
### Buffer 
- document : https://nodejs.org/api/buffer.html

```
$ cd D3/buffers/
$ node main.js

# output : 
Octets written : 20
abcdefghijklmnopqrstuvwxyz
1234 > 0123
[ <Buffer 30 31 32 33>, <Buffer 31 32 33 34> ]
Node.js
```

### Streams

```
$ cd D3/streams/
$ node read.js

# output : 
Program Ended
Hello nodejs - I'm HuyDoan
I'm from Asiantech Company
Nice to meet you !

$ node write.js

# output : 
Program Ended
Write completed.
```

### File system

- file
```
$ cd D3/file_system/
$ node file-info.js
$ node openfile-flags.js
$ node read-file.js
$ node sync-asyn.js
$ node truncate-file.js
$ node write-file.js
```
- directory : same with file : https://www.tutorialspoint.com/nodejs/nodejs_file_system.htm