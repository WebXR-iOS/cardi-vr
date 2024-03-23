/**
 * @author crazyh / https://github.com/crazyh2
 */

import { Screen } from "../screen.js";

class ActionsInfoScreen extends Screen {
    constructor(root) {
        super(root);

        this.root = root;
    };

    render(renderGroup) {
        /*const container = new ThreeMeshUI.Block({
            width: 1.2,
            height: 0.7,
            padding: 0.2,
            fontFamily: './assets/fonts/Roboto-msdf.json',
            fontTexture: './assets/fonts/Roboto-msdf.png',
        });
           
        const text = new ThreeMeshUI.Text({
            content: "Some text to be displayed"
        });
           
        container.add( text );

        container.position.z = -1;

        renderGroup.add( container );*/

        var geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
        var material = new THREE.MeshNormalMaterial();
        var cube = new THREE.Mesh(geometry, material);

        // Position cube mesh
        cube.position.z = -1;

        // Add cube mesh to your three.js scene
        renderGroup.add(cube);
    };
};

export { ActionsInfoScreen };