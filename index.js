module.exports = functionbuffer;


var slice = [].slice;

function functionbuffer(fn) {
    if (!(this instanceof functionbuffer)) return new functionbuffer(fn);
    this.fn = fn || function() { /* args */
        // no op
    };
    this.arr = [];
    this.running = false;
};

functionbuffer.prototype.start = function() {
    for (var i = 0; i < this.arr.length; i++) {
        this.fn.apply(null, this.arr[i]);
    }
    this.arr = [];
    this.running = true;
};

functionbuffer.prototype.stop = function() {
    this.running = false;
};

functionbuffer.prototype.push = function() {
    var args = slice.call(arguments, 0);
    if (!this.running) {
        this.arr.push(args);
    } else {
        this.fn.apply(null, args);
    }
};