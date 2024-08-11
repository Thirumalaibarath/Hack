const socketServer = require("ws");

const socket = new socketServer.Server({port : 8000});

socket.on("connection",ws=>
{
    // console.log("New Client");
    ws.on("message", data =>{

        console.log(`Client message ${data}`)

    })

})