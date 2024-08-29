//import baseEmitter from handled
const baseEmitter = require("./eventHandler")

/**
 * created a timeout
 * made the emitter emit a hello event every 1 seconds
 * 
 */
setInterval(()=>{
  baseEmitter.emit("hello", "data")
},1000)  


