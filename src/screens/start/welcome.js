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
        renderGroup.background = new THREE.Color( 0x000000 );

        // UI
        var texture = new THREE.TextureLoader().load( "./assets/logos/images/full_logo.png" );
		texture.minFilter = THREE.LinearFilter;
		texture.needsUpdate = true;

        var geometry = new THREE.PlaneGeometry((15 / 12), (4 / 12));
		var material = new THREE.MeshBasicMaterial( 
		  { side:THREE.DoubleSide, map:texture, transparent:true, opacity:1.0 } );

        var logo = new THREE.Mesh(geometry, material);
        logo.position.z = -1;
        logo.position.y = 0.03;
        renderGroup.add(logo);

        setTimeout(() => {
            this.renderScreen(new ActionsInfoScreen(this.root));
        }, 14000);
    };
};

export { WelcomeScreen };