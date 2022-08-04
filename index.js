console.log("welcome in web site:");

let navLink = document.getElementById("nav-links");

// showMenu finction:
function showMenu() {
    console.log("showMenu trigger:");
  navLink.style.right = "0";
}
// hideMenu function:
function hideMenu() {
    console.log("hideMenu trigger:");
  navLink.style.right = "-200px";
}
