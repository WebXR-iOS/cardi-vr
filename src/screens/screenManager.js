/**
 * @author crazyh / https://github.com/crazyh2
 */

class ScreenManager {
    constructor(root) {
        this.root = root;
    };

    renderScreen(screenGroup) {
        screenGroup.render(screenGroup.renderGroup);

        this.root.scene = screenGroup.renderGroup;
        this.root.camera.add(this.root.reticle);
        this.root.scene.add(this.root.camera);
    };
};

export { ScreenManager };