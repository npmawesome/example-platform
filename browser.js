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

var open = require('open');

open('file://' + process.cwd() + '/browser.html');