const tooltip = document.querySelector(".tooltip-wrapper-js");
const shareButton = document.querySelector(".share-btn-js");

shareButton.addEventListener("mouseover", () => {
  toggleTooltipVisibility(true);
});

shareButton.addEventListener("mouseout", () => {
  toggleTooltipVisibility(false);
});

tooltip.addEventListener("mouseover", () => {
  toggleTooltipVisibility(true);
});

tooltip.addEventListener("mouseout", () => {
  toggleTooltipVisibility(false);
});

function toggleTooltipVisibility(isTooltipVisible) {
  if (isTooltipVisible) {
    tooltip.classList.remove("invisible");
    tooltip.classList.add("visible");
  } else {
    tooltip.classList.remove("visible");
    tooltip.classList.add("invisible");
  }
}
