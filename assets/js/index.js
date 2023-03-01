import addHeader from "./components/header.js";
import addAbout from "./components/about.js";
import addMain from "./components/details.js";
import addFooter from "./components/footer.js";
import navTitle from "../db/navTitle.js";

var header = document.querySelector("header");
var container = document.getElementById("container");

header.setAttribute("class", "sticky-top justify-content-end bg-light");
header.setAttribute("style", "display: flex;");

document.querySelector("body").setAttribute("data-bs-spy", "scroll");
document.querySelector("body").setAttribute("data-bs-target", ".navbar");
document.querySelector("body").setAttribute("data-bs-offset", "5");
document.querySelector("footer").setAttribute("class", "text-center");
container.setAttribute("class", "container bg-light");

addHeader(header, navTitle);
addAbout();
addMain(container, navTitle);
addFooter();
