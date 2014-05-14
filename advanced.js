/*
 * example-platformjs
 *
 * Copyright(c) 2014 npmawesome.com
 * MIT Licensed
 *
 * @author André König <andre.koenig@posteo.de>
 * 
 */

/**
 * Usage:
 *
 *     node basic.js
 * 
 */

'use strict';

var platform = require('platform');

var ua = 'Mozilla/5.0 (X11; Linux i686; rv:30.0) Gecko/20100101 Firefox/30.0';

console.log('Result from parsing the user agent string: %s \n', ua);

var browser = platform.parse(ua);

console.log(browser.name); // Firefox
console.log(browser.description); // Firefox 30.0 on Linux i686
console.log(browser.version); // 30.0
console.log(browser.layout); // Gecko
console.log(browser.os.family); // Linux i686