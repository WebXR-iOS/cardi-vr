import { Peer } from "../libraries/peerjs.esm.js";

class SocketManager {
    constructor() {
        console.log("Waiting for Peer connection");

        this.peer = new Peer();
        this.conn = null;
    };

    connect(id) {
        if(this.conn !== null) return false;

        this.conn = this.peer.connect(id);

        var scope = this;

        this.conn.on('open', function(){
            console.log("Peer connected");
        });

        this.conn.on('data', function(data){
            scope.data(data, scope);
        });

        return true;
    };

    data(data, scope) {
        if(this.conn == null) return false;

        console.log("Data recieved: " + data);
        return true;
    };

    send(data) {
        if(this.conn == null) return false;

        this.conn.send(data);
        return true;
    };
};

export { SocketManager };