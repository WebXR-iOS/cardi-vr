import { ControllerTracking } from "./controllerTracking.js";

async function setupController() {
  window.controllerTracking = new ControllerTracking();
};

document.querySelector(".setupController").addEventListener("click", setupController);