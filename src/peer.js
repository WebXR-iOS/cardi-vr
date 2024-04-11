/**
 * @author crazyh / https://github.com/crazyh2
 */

class PeerManager {
    constructor(root) {
        this.root = root;
        var scope = this;

        this.cameraScale = 10;

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

        if(!res.position || !res.rotation) return;

        var position = res.position;
        var rotation = res.rotation;
        var posNotFound = false;

        if(position.error) {
            if(position.error == "Starting") return;
        };

        if(position.error) {
            if(rotation.error == "Starting") return;
        };

        if(position.error) {
            if(position.error == "Empty") posNotFound = true;
        };

        scope.update(scope, position, rotation, posNotFound);
    };

    update(scope, position, rotation, posNotFound) {
        if(posNotFound == false) {
            var posx = (position.x + (position.width / 2));
            var posy = (position.y + (position.height / 2));
            var posz = position.z;

            var worldX = (posx / position.cameraWidth) * 2 - 1;
            var worldY = -(posy / position.cameraHeight) * 2 + 1;

            this.root.render.scene.hand.position.set(worldX * scope.cameraScale, worldY * scope.cameraScale, posz);
        } else {
            this.root.render.scene.hand.position.set(0, -0.3, -0.2);
        };
    };

    launch(evt) {
        this.started = true;
    };
};

export { PeerManager };