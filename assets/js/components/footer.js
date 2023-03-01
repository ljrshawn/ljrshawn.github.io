var bottom = document.getElementById("bottom");

const year = new Date().getFullYear();

function addFooter() {
  let newDiv = document.createElement("div");
  newDiv.setAttribute("class", "container-fluid bg-light text-dark");
  var span = document.createElement("span");
  let newContent = document.createTextNode(`© Copyright ${year} Shawn Lyu.`);
  span.appendChild(newContent);
  newDiv.appendChild(span);
  bottom.appendChild(newDiv);
}

export default addFooter;
