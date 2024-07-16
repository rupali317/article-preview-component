const tooltip = document.querySelector(".tooltip-wrapper-js");
const shareButton = document.querySelector(".share-btn-js");

shareButton.addEventListener("click", () => {
  toggleTooltip();
});

tooltip.addEventListener("click", () => {
  toggleTooltip();
});

function toggleTooltip() {
  tooltip.classList.toggle("invisible");
}
