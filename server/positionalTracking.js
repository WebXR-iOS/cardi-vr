class PositionalTracking {
    constructor() {
        var scope = this;

        navigator.mediaDevices.getUserMedia({ audio: false, video: { facingMode: "user" }}).then(function success(stream) {
            document.querySelector("#cameraFeed").srcObject = stream;

            scope.start();
        });
    };

    start() {
        var scope = this;

        this.color = new tracking.ColorTracker(['yellow']);
        this.color.setMinDimension(5);

        tracking.track('#cameraFeed', scope.color);

        this.color.on('track', (event) => {scope.data(scope, event)});
    };

    data(scope, event) {
        if (event.data.length === 0) {
            // No colors were detected in this frame.
            scope.notVisibleController(scope, event);
        } else {
            scope.update(scope, event);
        }
    };

    update(scope, event) {
        event.data.forEach(function(rect) {
            // rect.x, rect.y, rect.height, rect.width, rect.color
        });
    };

    notVisibleController(scope, event) {

    };
};

export { PositionalTracking };