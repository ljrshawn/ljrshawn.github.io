var title = document.getElementById("title")

function addAbout() {
    var newdiv = document.createElement("div")
    newdiv.setAttribute('id', 'About')
    newdiv.setAttribute('class', 'container bg-light')
    newdiv.setAttribute('style', 'padding:5% 7%;')
    title.appendChild(newdiv)

    var newRow = document.createElement("div")
    newRow.setAttribute('class', 'row')
    newdiv.appendChild(newRow)

    // Left
    var leftCol = document.createElement("div")
    leftCol.setAttribute('class', 'col')
    newRow.appendChild(leftCol)

    // About
    var leftTopRow = document.createElement("div")
    leftTopRow.setAttribute('class', 'row')
    var h2 = document.createElement("h2")
    h2.appendChild(document.createTextNode("Shawn Lyu"))
    leftTopRow.appendChild(h2)
    var h5 = document.createElement("h5")
    h5.setAttribute('class', 'text-secondary')
    h5.appendChild(document.createTextNode("Master of Computing and Innovation"))
    leftTopRow.appendChild(h5)
    leftCol.appendChild(leftTopRow)

    // Detail
    var leftMidRow = document.createElement("div")
    leftMidRow.setAttribute('class', 'row')
    leftCol.appendChild(leftMidRow)
    var p = document.createElement("p")
    p.innerHTML = "I am Shawn Lyu (Jingran Lyu), currently, a Master's student at the University of Adelaide. " +
                  "A student Software Engineer with 2 years of experience in developing Object Oriented software " +
                  "in Java, C++, and Python, and 6+ months of experience in Full Stack Development with JavaScript, " +
                  "React, MongoDB, and NodeJS. Based in Adelaide, South Australia — currently seeking internship roles."
    leftMidRow.appendChild(p)

    // Social
    var leftSclRow = document.createElement("div")
    leftSclRow.setAttribute('id', 'Social')
    leftSclRow.setAttribute('class', 'row text-center')
    leftSclRow.setAttribute('style', 'margin-right: 60%;margin-top: 10%;')
    leftCol.appendChild(leftSclRow)
    addSocial(leftSclRow)

    // Resume
    var leftBtmRow = document.createElement("div")
    leftBtmRow.setAttribute('id', 'Resume')
    leftBtmRow.setAttribute('class', 'row text-center')
    leftBtmRow.setAttribute('style', 'margin-right: 72%;margin-top: 5%;margin-left: 10%;')
    leftCol.appendChild(leftBtmRow)
    addResume(leftBtmRow)

    // Mid
    var midCol = document.createElement("div")
    midCol.setAttribute('class', 'col-1')
    newRow.appendChild(midCol)

    // Right
    var rightCol = document.createElement("div")
    rightCol.setAttribute('class', 'col-4')
    newRow.appendChild(rightCol)

    // Photo
    var rightTopRow = document.createElement("div")
    rightTopRow.setAttribute('class', 'row text-center')
    rightCol.appendChild(rightTopRow)
    var photo = document.createElement("img")
    photo.setAttribute('src', 'assets/img/DSC02265.JPG')
    photo.setAttribute('alt', 'Could not load image')
    photo.setAttribute('class', 'img-fluid')
    photo.setAttribute('title', 'Shawn Lyu')
    rightTopRow.appendChild(photo)
}

function addSocial(location) {
    // Email
    var colE = document.createElement("div")
    colE.setAttribute('class', 'col')
    location.appendChild(colE)
    var a = document.createElement("a")
    a.setAttribute('href', 'mailto:jingran.lyu@outlook.com')
    a.setAttribute('title', 'Email')
    a.setAttribute('target', '_blank')
    a.setAttribute('rel', 'noopener')
    a.setAttribute('class', 'link-secondary')
    colE.appendChild(a)
    var i = document.createElement("i")
    i.setAttribute('class', 'fa-solid fa-envelope fa-2x')
    a.appendChild(i)

    // Github
    var colG = document.createElement("div")
    colG.setAttribute('class', 'col')
    location.appendChild(colG)
    var a = document.createElement("a")
    a.setAttribute('href', 'https://github.com/ljrshawn')
    a.setAttribute('title', 'Github')
    a.setAttribute('target', '_blank')
    a.setAttribute('rel', 'noopener')
    a.setAttribute('class', 'link-secondary')
    colG.appendChild(a)
    var i = document.createElement("i")
    i.setAttribute('class', 'fa-brands fa-square-github fa-2x')
    a.appendChild(i)

    // Linkedln
    var colL = document.createElement("div")
    colL.setAttribute('class', 'col')
    location.appendChild(colL)
    var a = document.createElement("a")
    a.setAttribute('href', 'https://www.linkedin.com/in/shawn-jr-lyu/')
    a.setAttribute('title', 'Linkedln')
    a.setAttribute('target', '_blank')
    a.setAttribute('rel', 'noopener')
    a.setAttribute('class', 'link-secondary')
    colL.appendChild(a)
    var i = document.createElement("i")
    i.setAttribute('class', 'fa-brands fa-linkedin fa-2x')
    a.appendChild(i)    
}

function addResume(location) {
    var a = document.createElement("a")
    a.setAttribute('href', 'assets/pdf/resume_2022.docx.pdf')
    a.setAttribute('title', 'resume')
    a.setAttribute('class', 'btn btn-secondary')
    a.setAttribute('target', '#')
    a.setAttribute('role', 'button')
    a.innerHTML = "Resume"
    location.appendChild(a)
}

addAbout()