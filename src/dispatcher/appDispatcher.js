/*
 * There can only single dispatcher per app.
 * It is singleton . So only one object created and can be used in all over app
 *
 * Center Hub of application.
 *
 * Holds list of callbacks, stores register with dispatcher.
 *
 * */

var Dispatcher = require('flux').Dispatcher;

modules.exports = new Dispatcher();