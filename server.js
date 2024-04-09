const express = require("express");
const { Server } = require("socket.io");
const { createServer } = require('node:http');

const app = express();
const server = createServer(app);
const io = new Server(server);

// WS / WSS
io.on('connection', (socket) => {
    console.log('User connected');

    socket.on("controllerDataOut", (id, data) => {
        socket.to(id).emit("controllerDataIn", data);
    });
    
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// HTTP / HTTPS
app.get('/', (req, res) => {
    if (req.header('user-agent').indexOf('Mobile') != -1) {
        res.sendFile('index.html', { root : __dirname });
    } else {
        res.sendFile('server.html', { root : __dirname });
    };
});

app.use(express.static(__dirname + '/'));

app.get('*', (req, res) => {
    res.send('Page Not Found');
});
  
server.listen(8080, () => {
    console.log(`Web app listening on port ${8080}`);
});