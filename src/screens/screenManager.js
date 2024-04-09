/**
 * @author crazyh / https://github.com/crazyh2
 */

class ScreenManager {
    constructor(root) {
        this.root = root;

        this.currentScreen = null;
    };

    renderScreen(screenGroup) {
        screenGroup.render(screenGroup.renderGroup);

        this.root.scene = screenGroup.renderGroup;
        this.root.scene.add(this.root.camera);
        this.root.scene.add(this.root.hand);

        this.currentScreen = screenGroup;
    };
};

export { ScreenManager };