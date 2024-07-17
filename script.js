const tooltip = document.querySelector("#tooltip-wrapper-js");
const shareButton = document.querySelector("#share-btn-js");

shareButton.addEventListener("click", () => {
  toggleTooltip();
});

tooltip.addEventListener("click", () => {
  toggleTooltip();
});

function toggleTooltip() {
  tooltip.classList.toggle("invisible");
  toggleShareButtonAttributes();
}

function toggleShareButtonAttributes() {
  if (tooltip.classList.contains("invisible")) {
    shareButton.removeAttribute("aria-describedby");
    shareButton.setAttribute("aria-expanded", "false");
  } else {
    shareButton.setAttribute("aria-describedby", "tooltip");
    shareButton.setAttribute("aria-expanded", "true");
  }
}

/* RRC: Understand the purpose of the attributes by experimenting */
