/**
 * @author crazyh / https://github.com/crazyh2
 */

import { Screen } from "../screen.js";
import { TextGeometry } from "../../../libraries/three.js";

class ActionsInfoScreen extends Screen {
    constructor(root) {
        super(root);

        this.root = root;
    };

    render(renderGroup) {
        // Add a light and sky
        var light = new THREE.DirectionalLight(0xffffff, 0.4);
        renderGroup.add( light );

        // Fade effect
        renderGroup.background = new THREE.Color( 0x976dc2 );
		renderGroup.fog = new THREE.Fog( 0x976dc2, 200, 1000 );

        // Ground
		const grid = new THREE.GridHelper( 2000, 20, 0x000000, 0x000000 );
        grid.position.y = -300;
		renderGroup.add( grid );

        // UI
        var loader = new THREE.FontLoader();
        loader.load( '/assets/fonts/Roboto-msdf.json', function ( font ) {

            var textGeometry = new THREE.TextGeometry( "text", {

                font: font,

                size: 50,
                height: 10,
                curveSegments: 12,

                bevelThickness: 1,
                bevelSize: 1,
                bevelEnabled: true

            });

            var textMaterial = new THREE.MeshPhongMaterial( 
                { color: 0xff0000, specular: 0xffffff }
            );

            var mesh = new THREE.Mesh( textGeometry, textMaterial );

            mesh.position.z = -1;

            scene.add( mesh );

        }); 
    };
};

export { ActionsInfoScreen };