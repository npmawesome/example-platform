'use strict';

var platform = require('platform');

var ua = 'Mozilla/5.0 (X11; Linux i686; rv:30.0) Gecko/20100101 Firefox/30.0';

var browser = platform.parse(ua);

console.log('Result from parsing the user agent string: %s \n', ua);

console.log(browser.name); // Firefox
console.log(browser.description); // Firefox 30.0 on Linux i686
console.log(browser.version); // 30.0
console.log(browser.layout); // Gecko
console.log(browser.os.family); // Linux i686
