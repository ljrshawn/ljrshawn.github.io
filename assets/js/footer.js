var bottom = document.getElementById("bottom")

function addFooter() {
    let newDiv = document.createElement("div")
    newDiv.setAttribute('class', 'container-fluid bg-light text-dark')
    var span = document.createElement("span")
    let newContent = document.createTextNode(" © Copyright 2022 Shawn Lyu.")
    span.appendChild(newContent)
    newDiv.appendChild(span)
    bottom.appendChild(newDiv)
}

addFooter()