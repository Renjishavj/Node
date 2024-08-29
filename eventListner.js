//imported baseEmitter
const baseEmitter = require("./eventHandler")

//listening for a hello event 
// baseEmitter.on("hello",(data)=>console.log("got data",data))

baseEmitter.once("hello",(data)=>console.log("got data",data))
