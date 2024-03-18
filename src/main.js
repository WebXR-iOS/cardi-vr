/**
 * @author crazyh / https://github.com/crazyh2
 */

import { Scene } from "./scene.js";

class Main {
    constructor() {
        var scope = this;

        this.load();

        document.querySelector("#app-group > button").addEventListener("click", (evt) => {
            scope.launch(evt);
        });
    };

    load() {
        this.scene = new Scene();

        this.vrDisplay = new CardboardVRDisplay({});

        navigator.getVRDisplays = function () {
            return new Promise(function (resolve) {
              resolve([vrDisplay]);
            });
        };
    };

    launch(evt) {
        document.querySelector("#vr-group").style.display = "";
        document.querySelector("#app-group").style.display = "none";
    };
};

window.app = new Main();