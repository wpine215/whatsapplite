import io from "./socket.io"

// const apiUrl = "http://localhost:3050";
const apiUrl = "http://155.41.67.64:3050";

class Socket {

    socket = null;

    constructor(displayName) {
        this.socket = io(apiUrl);
        this.displayName = displayName;
    }

    sendMessage(message) {
        this.socket.emit("message", {username: this.displayName, message: message});
    }
}
export default Socket;