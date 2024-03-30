/**
 * @author crazyh / https://github.com/crazyh2
 */

import * as THREE from "../libraries/three.module.min.js";

class ScreenManager {
    constructor(root) {
        this.root = root;
    };

    renderScreen(screenGroup) {
        screenGroup.render(screenGroup.renderGroup);

        this.root.scene = screenGroup.renderGroup;
        this.root.scene.add(this.root.camera);
    };
};

export { ScreenManager };