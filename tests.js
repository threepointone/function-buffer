var functionbuffer = require('./index.js'),
    slice = [].slice;

var a = functionbuffer(function() {
    console.log('a:', slice.call(arguments, 0))
});

var ctr = 0;
setInterval(function() {
    a.push(ctr++, Math.random() * 5);
}, 100);

setInterval(function() {
    a.start();
}, 2000);

setTimeout(function() {
    setInterval(function() {
        a.stop();
    }, 2000);
}, 1000);