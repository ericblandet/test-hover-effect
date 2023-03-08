// This script is necessary since there is no way to do it simply in CSS
// because no "previous sibling selector exists !"

const centerCenter = document.querySelector("#center-center");
const elementNames = [
  "top-left",
  "top-center",
  "top-right",
  "center-left",
  "center-right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
];

// For each picture except centerCenter, we change centerCenter image when coming in and put it back when going out + blur
elementNames.forEach((elName) => {
  let element = document.querySelector(`#${elName}`);
  element.addEventListener("mouseenter", (event) => {
    centerCenter.style.backgroundImage = `url('../images/arrows/${elName}.png')`;
    centerCenter.style.filter = "blur(0px)";
    element.style.filter = "blur(0px)";
  });
  element.addEventListener("mouseleave", (event) => {
    centerCenter.style.backgroundImage = `url('../images/default_picture.jpg')`;
    centerCenter.style.filter = "blur(1.5px)";
    element.style.filter = "blur(1.5px)";
  });
});

// when hovering centerCenter we unblur!
centerCenter.addEventListener("mouseenter", (event) => {
  centerCenter.style.filter = "blur(0px)";
});
centerCenter.addEventListener("mouseleave", (event) => {
  centerCenter.style.filter = "blur(1.5px)";
});
