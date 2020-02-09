const port = 3050;
const io = require('socket.io')(port);
const Message = require('./Message')
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/WhatsAppLite';

MongoClient.connect(url, (err, db) => {
    console.log('Connected to MongoDB!');
        db.close();
})

console.log("Server running on port " + port);

io.on('connection', (socket) => {
    console.log("User connected!");

    socket.on("message", (data) => {
        const username = data.username;
        const message = data.message;
        console.log("Message received from " + data.username);
        io.emit("message", Message.format(message, username));
    })
})