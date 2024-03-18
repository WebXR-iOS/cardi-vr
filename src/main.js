/**
 * @author crazyh / https://github.com/crazyh2
 */

import { Render } from "./world/render.js";

class Main {
    constructor() {
        var scope = this;

        this.load();

        document.querySelector("#app-group > button").addEventListener("click", (evt) => {
            scope.launch(evt);
        });
    };

    load() {
        var scope = this;

        this.vrDisplay = new CardboardVRDisplay({});

        navigator.getVRDisplays = function () {
            return new Promise(function (resolve) {
              resolve([scope.vrDisplay]);
            });
        };

        this.render = new Render(this);
    };

    launch(evt) {
        document.querySelector("#vr-group").style.display = "";
        document.querySelector("#app-group").style.display = "none";

        this.render.launch();
    };
};

window.app = new Main();