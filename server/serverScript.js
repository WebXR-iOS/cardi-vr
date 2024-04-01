import { PositionalTracking } from "./positionalTracking.js";

async function setupController() {
  window.positionTracking = new PositionalTracking();
};

document.querySelector(".setupController").addEventListener("click", setupController);