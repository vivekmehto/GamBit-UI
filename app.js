const toggleBtn = document.querySelector(".btn-toggle");
const badgeToggle = document.querySelector(".badge-toggle");

toggleBtn.addEventListener("click", () => {
  if (badgeToggle.style.display !== "none") {
    badgeToggle.style.display = "none";
  } else {
    badgeToggle.style.display = "flex";
  }
});
