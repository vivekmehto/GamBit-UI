const burger = document.querySelector("#burger");
const sidebarAside = document.querySelector("#sidebar-aside");

burger.addEventListener("click", () => {
  if (sidebarAside.style.display === "none") {
    sidebarAside.style.display = "block";
  } else {
    sidebarAside.style.display = "none";
  }
});
