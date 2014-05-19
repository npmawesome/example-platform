'use strict';

var platform = require('platform');

console.log(platform.name);  // e.g. Node.js
console.log(platform.version); // e.g. 0.10.26
console.log(platform.os.architecture); // e.g. 32
console.log(platform.os.family); // e.g. Linux
console.log(platform.description); // e.g. Node.js 0.10.26 on Linux
