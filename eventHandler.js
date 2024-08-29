//imported event emitter class
const eventEmitter = require("events")
//created event emitter instance as baseEmitter
const baseEmitter = new eventEmitter();
//exported the instance 
module.exports = baseEmitter