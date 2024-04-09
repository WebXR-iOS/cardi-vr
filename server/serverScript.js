import { ControllerTracking } from "./controllerTracking.js";

async function setupController() {
  var code = prompt("Enter paring code below (Located on main menu of phone)");

  window.controllerTracking = new ControllerTracking(code);

  (() => {
    document.querySelector("#canvas").width = window.innerWidth;
    document.querySelector("#canvas").height = window.innerHeight;
  
    document.querySelector("#cameraFeed").width = window.innerWidth;
    document.querySelector("#cameraFeed").height = window.innerHeight;
  })();
};

document.querySelector(".setupController").addEventListener("click", setupController);