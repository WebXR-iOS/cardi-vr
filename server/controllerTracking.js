import { PositionalTracking  } from "./positionalTracking.js";
import { RotationalTracking } from "./rotationalTracking.js";
import { SocketManager } from "./socketScript.js";

class ControllerTracking {
    constructor(code) {
        this.rotation = { error: "Empty" }; //"Starting" };
        this.position = { error: "Starting" };

        this.socket = new SocketManager();
        this.PositionalTracking = new PositionalTracking(this);
        this.RotationalTracking = new RotationalTracking(this);

        this.connect(code);
    };

    connect(id) {
        var scope = this;

        this.socket.connect(id);

        setInterval(() => {
            scope.send(scope);
        }, 200);
    };

    send(scope) {
        this.socket.send(JSON.stringify({
            position: scope.position,
            rotation: scope.rotation
        }));

        console.log({
            position: scope.position,
            rotation: scope.rotation
        });
    };
};

export { ControllerTracking };