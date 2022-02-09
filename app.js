const burger = document.querySelector(".burger");
const sidebarAside = document.querySelector("#sidebar-aside");
const mainIntro = document.querySelector(".main-intro");

burger.addEventListener("click", () => {
  if (sidebarAside.style.display === "none") {
    sidebarAside.style.display = "block";
    mainIntro.style.marginLeft = "200px";
  } else {
    sidebarAside.style.display = "none";
    mainIntro.style.marginLeft = "20px";
  }
});
