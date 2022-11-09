import createShipVisual from "./createShipVisual";
import generateGrid from "./generateGrid";

const shipPlacementInterfaceGenerator = (gameboard) => {
  const main = document.querySelector("main");
  const placementInterface = document.createElement("div");
  placementInterface.classList.add("placementInterface");
  const gameBoard = document.createElement("div");
  gameBoard.classList.add("gameboard");
  placementInterface.appendChild(gameBoard);
  const title = document.createElement("h2");
  title.textContent = "Place ships (Drag and drop)";
  placementInterface.appendChild(title);
  const ShipVisualContainer = document.createElement("div");
  ShipVisualContainer.classList.add("shipVisualContainer");
  const currentShipVisual = document.createElement("div");
  currentShipVisual.classList.add("shipVisual");
  ShipVisualContainer.appendChild(currentShipVisual);

  placementInterface.appendChild(ShipVisualContainer);
  const currentShip = document.createElement("h3");
  placementInterface.appendChild(currentShip);
  const form = document.createElement("form");
  form.classList.add("coordinateForm");
  const selectOrientation = document.createElement("select");
  selectOrientation.classList.add("orientationSelection");
  const horizontalOption = document.createElement("option");
  horizontalOption.value = "horizontal";
  horizontalOption.textContent = "horizontal";
  const verticalOption = document.createElement("option");
  verticalOption.value = "vertical";
  verticalOption.textContent = "vertical";
  selectOrientation.appendChild(horizontalOption);
  selectOrientation.appendChild(verticalOption);
  form.appendChild(selectOrientation);
  const errorDiv = document.createElement("div");
  errorDiv.classList.add("errorDiv");
  form.appendChild(errorDiv);
  placementInterface.appendChild(form);
  main.appendChild(placementInterface);

  generateGrid(gameboard, 3);
};

export default shipPlacementInterfaceGenerator;
