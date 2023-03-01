function addHeader(header, navTitle) {
  var newNav = document.createElement("nav");
  newNav.setAttribute("class", "navbar navbar-expand-lg bg-light navbar-light");
  // newNav.setAttribute("style", "margin-right: 10%;");
  header.appendChild(newNav);

  var newDiv = document.createElement("div");
  newDiv.setAttribute("class", "container-fluid");
  newNav.appendChild(newDiv);

  // button
  const btnAtt = {
    class: "navbar-toggler",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#navbarToggler",
    "aria-controls": "navbarToggler",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
  };
  var btn = document.createElement("button");
  Object.keys(btnAtt).forEach((attribute) => {
    btn.setAttribute(attribute, btnAtt[attribute]);
  });
  newDiv.appendChild(btn);

  var btnSpan = document.createElement("span");
  btnSpan.setAttribute("class", "navbar-toggler-icon");
  btn.appendChild(btnSpan);

  // nav
  var newUl = document.createElement("ul");
  newUl.setAttribute("class", "navbar-nav collapse navbar-collapse");
  newUl.setAttribute("id", "navbarToggler");
  newDiv.appendChild(newUl);

  navTitle.map((el) => createNavBar(el, newUl));
}

const createNavBar = (title, newUl) => {
  var newLi = document.createElement("li");
  newLi.setAttribute("class", "nav-item");

  var newA = document.createElement("a");
  newA.setAttribute("class", "nav-link");
  newA.setAttribute("href", "#" + title);
  newA.appendChild(document.createTextNode(title));

  newLi.appendChild(newA);
  newUl.appendChild(newLi);
};

export default addHeader;
