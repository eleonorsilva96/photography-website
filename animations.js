const burgerMenu = document.getElementById("burger-menu");

const openMenu = burgerMenu.classList;

burgerMenu.addEventListener("click", () => {
  const result = openMenu.toggle("active");

  //in the toggle, if the matching value doesn't exist, add it and return true
  if (result === true) {
    gsap.to(".top", { rotation: 45 });
    gsap.to(".bottom", { y: -10.5, rotation: -45 });
    console.log("works!");
  } else {
    gsap.to(".top", { rotation: 0 });
    gsap.to(".bottom", { y: 0, rotation: 0 });
  }
});