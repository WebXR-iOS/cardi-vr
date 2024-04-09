/**
 * @author crazyh / https://github.com/crazyh2
 */

class PeerManager {
    constructor(root) {
        this.root = root;
        var scope = this;

        this.started = false;

        this.peerId = this.makeid(3) + "-" + this.makeid(3) + "-" + this.makeid(3);

        this.socket = io();

        this.socket.on('connect', function() {
            scope.peerId = scope.socket.id;

            document.querySelector(".socketCode").innerText = "Code: " + scope.peerId;

            scope.socket.on('controllerDataIn', function(data) {
                scope.data(scope, data);
            });
        });
    };

    makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    };

    data(scope, res) {
        if(scope.started !== true) return;

        if(!(position in res && rotation in res)) return;

        var position = res.position;
        var rotation = res.rotation;
        var posNotFound = false;

        if(error in position) {
            if(position.error == "Starting") return;
        };

        if(error in rotation) {
            if(rotation.error == "Starting") return;
        };

        if(error in position) {
            if(position.error == "Empty") posNotFound = true;
        };

        scope.update(scope, position, rotation, posNotFound);
    };

    update(scope, position, rotation, posNotFound) {
        if(posNotFound == false) {
            this.root.render.scene.hand.position.x = position.x;
            this.root.render.scene.hand.position.y = position.y;
            this.root.render.scene.hand.position.z = position.z;
        };
    };

    launch(evt) {
        this.started = true;
    };
};

export { PeerManager };