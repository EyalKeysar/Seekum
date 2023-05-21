let toggleDiv = document.getElementById("AddContentDiv");
let extraContent = document.getElementById("AddContentFormDiv");
let toggleButton = document.getElementById("AddContentToggleButtonID");

toggleButton.addEventListener("click", function() {
  extraContent.classList.toggle("AddContentFormStyle");
  toggleButton.textContent = toggleButton.textContent == "ADD CONTENT" ? "Fill the form." : "ADD CONTENT"; // toggle button text.
});