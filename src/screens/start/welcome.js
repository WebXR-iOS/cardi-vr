/**
 * @author crazyh / https://github.com/crazyh2
 */

import { Screen } from "../screen.js";
import { TextBox } from "../../../utils/TextBox.js";
import { ActionsInfoScreen } from "./actionsInfo.js";

class WelcomeScreen extends Screen {
    constructor(root) {
        super(root);

        this.root = root;
    };

    render(renderGroup) {
        // Add a light and sky
        var light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set( 0, 1, 0 ); //default; light shining from top
        light.castShadow = true; // default false
        renderGroup.add( light );

        // Fade effect
        renderGroup.background = new THREE.Color( 0x976dc2 );
		renderGroup.fog = new THREE.Fog( 0x976dc2, 200, 1000 );

        // Ground
		const grid = new THREE.GridHelper( 2000, 20, 0x000000, 0x000000 );
        grid.position.y = -300;
		renderGroup.add( grid );

        // UI
        var texture = new THREE.TextureLoader().load( "./assets/logos/images/full_logo.png" );
		texture.minFilter = THREE.LinearFilter;
		texture.needsUpdate = true;

        var geometry = new THREE.PlaneGeometry(5, (4 / 3));
		var material = new THREE.MeshBasicMaterial( 
		  { side:THREE.DoubleSide, map:texture, transparent:true, opacity:1.0 } );

        var logo = new THREE.Mesh(geometry, material);
        logo.position.z = -1;
        logo.position.y = 0.03;
        renderGroup.add(logo);

        setTimeout(() => {
            this.renderScreen(new ActionsInfoScreen(this.root));
        }, 8000);
    };
};

export { WelcomeScreen };