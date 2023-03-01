import aboutMe from "../../db/aboutData.js";

var title = document.getElementById("title");
title.setAttribute("class", "container bg-light");

function addAbout() {
  var newdiv = document.createElement("div");
  newdiv.setAttribute("id", "About");
  newdiv.setAttribute("class", "container-fluid bg-light text-dark");
  newdiv.setAttribute("style", "padding:4% 12%; padding-top: 10%");
  title.appendChild(newdiv);

  var newRow = document.createElement("div");
  newRow.setAttribute("class", "row");
  newdiv.appendChild(newRow);

  // Left
  var leftCol = document.createElement("div");
  leftCol.setAttribute("class", "col");
  newRow.appendChild(leftCol);

  // About
  var leftTopRow = document.createElement("div");
  leftTopRow.setAttribute("class", "row");
  var h2 = document.createElement("h2");
  h2.appendChild(document.createTextNode(aboutMe.name));
  leftTopRow.appendChild(h2);
  var h5 = document.createElement("h5");
  h5.setAttribute("class", "text-secondary");
  h5.appendChild(document.createTextNode(aboutMe.curPosition));
  leftTopRow.appendChild(h5);
  leftCol.appendChild(leftTopRow);

  // Detail
  var leftMidRow = document.createElement("div");
  leftMidRow.setAttribute("class", "row");
  leftCol.appendChild(leftMidRow);
  var p = document.createElement("p");
  p.innerHTML = aboutMe.introduction;
  leftMidRow.appendChild(p);

  // Social
  var leftSclRow = document.createElement("div");
  leftSclRow.setAttribute("id", "Social");
  leftSclRow.setAttribute("class", "row text-center");
  leftCol.appendChild(leftSclRow);
  addSocial(leftSclRow);

  // Mid
  var midCol = document.createElement("div");
  midCol.setAttribute("class", "col-1");
  newRow.appendChild(midCol);

  // Right
  var rightCol = document.createElement("div");
  rightCol.setAttribute("class", "col-4");
  newRow.appendChild(rightCol);

  // Photo
  var rightTopRow = document.createElement("div");
  rightTopRow.setAttribute("class", "row text-center");
  rightCol.appendChild(rightTopRow);
  var photo = document.createElement("img");
  photo.setAttribute("src", aboutMe.photo);
  photo.setAttribute("alt", "Could not load image");
  photo.setAttribute("class", "img-fluid");
  photo.setAttribute("title", aboutMe.name);
  rightTopRow.appendChild(photo);
}

function addSocial(location) {
  // Email
  var colE = document.createElement("div");
  colE.setAttribute("class", "col-1");
  location.appendChild(colE);
  var a = document.createElement("a");
  a.setAttribute("href", `mailto:${aboutMe.email}`);
  a.setAttribute("title", "Email");
  a.setAttribute("target", "_blank");
  a.setAttribute("rel", "noopener");
  a.setAttribute("class", "link-primary");
  colE.appendChild(a);
  var i = document.createElement("i");
  i.setAttribute("class", "fa-solid fa-envelope fa-2x");
  a.appendChild(i);

  // Blank
  var colB = document.createElement("div");
  colB.setAttribute("class", "col-1");
  location.appendChild(colB);

  // Github
  var colG = document.createElement("div");
  colG.setAttribute("class", "col-1");
  location.appendChild(colG);
  var a = document.createElement("a");
  a.setAttribute("href", aboutMe.github);
  a.setAttribute("title", "Github");
  a.setAttribute("target", "_blank");
  a.setAttribute("rel", "noopener");
  a.setAttribute("class", "link-primary");
  colG.appendChild(a);
  var i = document.createElement("i");
  i.setAttribute("class", "fa-brands fa-square-github fa-2x");
  a.appendChild(i);

  // Blank
  var colB = document.createElement("div");
  colB.setAttribute("class", "col-1");
  location.appendChild(colB);

  // Linkedin
  var colL = document.createElement("div");
  colL.setAttribute("class", "col-1");
  location.appendChild(colL);
  var a = document.createElement("a");
  a.setAttribute("href", aboutMe.linkedin);
  a.setAttribute("title", "Linkedln");
  a.setAttribute("target", "_blank");
  a.setAttribute("rel", "noopener");
  a.setAttribute("class", "link-primary");
  colL.appendChild(a);
  var i = document.createElement("i");
  i.setAttribute("class", "fa-brands fa-linkedin fa-2x");
  a.appendChild(i);

  // Blank
  var colB = document.createElement("div");
  colB.setAttribute("class", "col-1");
  location.appendChild(colB);

  // Resume
  addResume(location);
}

function addResume(location) {
  var colR = document.createElement("div");
  colR.setAttribute("class", "col-2");
  location.appendChild(colR);

  var a = document.createElement("a");
  a.setAttribute("href", aboutMe.resume);
  a.setAttribute("title", "resume");
  a.setAttribute("class", "btn btn-primary btn-sm");
  a.setAttribute("target", "#");
  a.setAttribute("role", "button");
  a.innerHTML = "Resume";
  colR.appendChild(a);
}

export default addAbout;
