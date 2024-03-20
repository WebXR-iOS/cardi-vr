/**
 * @author crazyh / https://github.com/crazyh2
 */

import { Screen } from "../screen";

class ActionsInfoScreen extends Screen {
    constructor(root) {
        super(root);

        this.root = root;
    };

    render(renderGroup) {
        const container = new ThreeMeshUI.Block({
            width: 1.2,
            height: 0.7,
            padding: 0.2,
            fontFamily: './assets/Roboto-msdf.json',
            fontTexture: './assets/Roboto-msdf.png',
        });
           
        const text = new ThreeMeshUI.Text({
            content: "Some text to be displayed"
        });
           
        container.add( text );

        renderGroup.add( container );
    };
};

export { ActionsInfoScreen };