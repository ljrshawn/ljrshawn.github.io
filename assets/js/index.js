var header = document.querySelector("header")
var title = document.getElementById("title")
var container = document.getElementById("container")
var bottom = document.getElementById("bottom")

const name_nav = {
    1: 'Education',
    2: 'Experience',
    3: 'Projects',
    4: 'Languages',
    5: 'Additional',
};

header.setAttribute('class', 'sticky-top')
document.querySelector("body").setAttribute('data-bs-spy', 'scroll')
document.querySelector("body").setAttribute('data-bs-target', '.navbar')
document.querySelector("body").setAttribute('data-bs-offset', '5')
document.querySelector("footer").setAttribute('class', "fixed-bottom text-center")

function addHeader() {
    var newNav = document.createElement("nav")
    newNav.setAttribute('class', 'navbar navbar-expand-lg bg-light navbar-light')
    header.appendChild(newNav)

    var newDiv = document.createElement("div")
    newDiv.setAttribute('class', 'container-fluid')
    newNav.appendChild(newDiv)

    var newUl = document.createElement("ul")
    newUl.setAttribute('class', 'navbar-nav')
    newDiv.appendChild(newUl)

    for (let i = 1; i <= Object.keys(name_nav).length; i++) {
        var newLi = document.createElement("li")
        newLi.setAttribute('class', 'nav-item')

        var newA = document.createElement("a")
        newA.setAttribute('class', 'nav-link')
        newA.setAttribute('href', '#' + name_nav[i])
        newA.appendChild(document.createTextNode(name_nav[i]))

        newLi.appendChild(newA)
        newUl.appendChild(newLi)
    }
}

function addMain() {
    for (let i = 1; i <= Object.keys(name_nav).length; i++) {
        var newDiv = document.createElement("div")
        newDiv.setAttribute('id', name_nav[i])
        newDiv.setAttribute('class', 'container-fluid bg-light text-dark')
        newDiv.setAttribute('style', 'padding:50px 50px;')
        container.appendChild(newDiv)

        var newCon = document.createElement("div")
        newCon.setAttribute('class', 'container')
        var newRow = document.createElement("div")
        newRow.setAttribute('class', 'row')
        newCon.appendChild(newRow)
        var newCol = document.createElement("div")
        newCol.setAttribute('class', 'col')
        var h3 = document.createElement("h3")
        h3.appendChild(document.createTextNode(name_nav[i]))
        newCol.appendChild(h3)
        newRow.appendChild(newCol)
        newDiv.appendChild(newCon)

        addMainContent(newCon, i)
    }
}

function addMainContent(parDiv, index) {
    switch (index) {
        case 1:
            addEducation(parDiv, index)
            break
        case 2:
            addExperience(parDiv, index)
            break
        case 3:
            addProjects(parDiv, index)
            break
        case 4:
            addLanguages(parDiv, index)
            break
        case 5:
            addAdditional(parDiv, index)
            break
    }
}

const name_edu = {
    1: ['The University of Adelaide',
        'Adelaide, Australia',
        'Will Graduate June 2023',
        'Master of Computing and Innovation'],
    2: ['The University of Southampton',
        'Southampton, United Kingdom',
        'Graduated June 2019',
        'Diploma of MicroElectroMechanical Systems'],
    3: ['Beijing Jiao Tong University',
        'Beijing, P.R.China',
        'Graduated June 2017',
        'Bachelor of Electronics Engineer'],
}

function addEducation(parDiv, index) {
    for (let i = 1; i <= Object.keys(name_edu).length; i++) {
        var newRow = document.createElement("div")
        newRow.setAttribute('class', 'row')
        parDiv.appendChild(newRow)

        // School
        var newCol = document.createElement("div")
        newCol.setAttribute('class', 'col')
        var p = document.createElement("p")
        p.setAttribute('class', 'fw-bold')
        p.innerHTML = name_edu[i][0]
        newCol.appendChild(p)
        newRow.appendChild(newCol)

        // Location
        var newCol = document.createElement("div")
        newCol.setAttribute('class', 'col text-center')
        var p = document.createElement("p")
        p.setAttribute('class', 'fw-bold')
        p.innerHTML = name_edu[i][1]
        newCol.appendChild(p)
        newRow.appendChild(newCol)

        // Time
        var newCol = document.createElement("div")
        newCol.setAttribute('class', 'col text-end')
        var p = document.createElement("p")
        p.innerHTML = name_edu[i][2]
        newCol.appendChild(p)
        newRow.appendChild(newCol)

        // Major
        var newRow = document.createElement("div")
        newRow.setAttribute('class', 'row')
        parDiv.appendChild(newRow)
        var newCol = document.createElement("div")
        newCol.setAttribute('class', 'col')
        var p = document.createElement("p")
        p.innerHTML = name_edu[i][3]
        newCol.appendChild(p)
        newRow.appendChild(newCol)
    }
}

const name_exp = {
    1: ['Data science Intern — Ping An Bank',
        'Nov 2020 - Mar 2021',
        'Working on improving the algorithm of the Q&A robot with the team members based ' +
        'on the corpus obtained by the web crawler. Created a script for automatic crawling. (Python)'],
}

function addExperience(parDiv, index) {
    for (let i = 1; i <= Object.keys(name_exp).length; i++) {
        var newRow = document.createElement("div")
        newRow.setAttribute('class', 'row')
        parDiv.appendChild(newRow)

        // Company
        var newCol = document.createElement("div")
        newCol.setAttribute('class', 'col')
        var p = document.createElement("p")
        p.setAttribute('class', 'fw-bold')
        p.innerHTML = name_exp[i][0]
        newCol.appendChild(p)
        newRow.appendChild(newCol)

        // Time
        var newCol = document.createElement("div")
        newCol.setAttribute('class', 'col text-end')
        var p = document.createElement("p")
        p.innerHTML = name_exp[i][1]
        newCol.appendChild(p)
        newRow.appendChild(newCol)

        // Detail
        var newRow = document.createElement("div")
        newRow.setAttribute('class', 'row')
        parDiv.appendChild(newRow)
        var newCol = document.createElement("div")
        newCol.setAttribute('class', 'col')
        var p = document.createElement("p")
        p.innerHTML = name_exp[i][2]
        newCol.appendChild(p)
        newRow.appendChild(newCol)
    }
}

const name_pro = {
    1: ['Distributed system',
        'July 2022',
        'Wrote a web page to simulate and visualize the stability of ' +
        'information passing between cowboys after they are attacked. ' +
        'Specifically, cowboys pass information through raft. After the leader is attacked, ' +
        'a new leader is selected in the shortest possible time, ' +
        'so that the cowboys can avoid the next wave of attacks. ' +
        'I am responsible for the design and optimization of the front end, and participate in ' +
        'the data feedback and reception of the back end. (JavaScript, NodeJS, Html, CSS and MangoDB)'],
    2: ['E-commerce website conduction and operation',
        'Mar 2021',
        'Create an e-commerce website speebuy.com based on the Shopify platform. ' +
        'I was responsible for the construction of the entire webpage, mainly the front-end UI ' +
        'design and coding, as well as the sales and delivery of e-commerce. (JavaScript)'],
    3: ['Titanic',
        'Sep 2020',
        'Create a model using random forests to predict the survival of ' +
        'certain passengers after the sinking of the Titanic. ' +
        'Use Seaborn and Matplotlib to analyze the original data, ' +
        'and perform correlation analysis on multiple sets of data. ' +
        'Clean the data. Finally, predictions are made based on the ' +
        'model obtained from the training data. (Python)'],
}

function addProjects(parDiv, index) {
    for (let i = 1; i <= Object.keys(name_pro).length; i++) {
        var newRow = document.createElement("div")
        newRow.setAttribute('class', 'row')
        parDiv.appendChild(newRow)

        // Project
        var newCol = document.createElement("div")
        newCol.setAttribute('class', 'col')
        var p = document.createElement("p")
        p.setAttribute('class', 'fw-bold')
        p.innerHTML = name_pro[i][0]
        newCol.appendChild(p)
        newRow.appendChild(newCol)

        // Time
        var newCol = document.createElement("div")
        newCol.setAttribute('class', 'col text-end')
        var p = document.createElement("p")
        p.innerHTML = name_pro[i][1]
        newCol.appendChild(p)
        newRow.appendChild(newCol)

        // Detail
        var newRow = document.createElement("div")
        newRow.setAttribute('class', 'row')
        parDiv.appendChild(newRow)
        var newCol = document.createElement("div")
        newCol.setAttribute('class', 'col')
        var p = document.createElement("p")
        p.innerHTML = name_pro[i][2]
        newCol.appendChild(p)
        newRow.appendChild(newCol)
    }
}

function addLanguages(parDiv, index) {

}

function addAdditional(parDiv, index) {

}

function addFooter() {
    let newDiv = document.createElement("div")
    let newContent = document.createTextNode(" © Copyright 2022 Shawn Lyu.")
    newDiv.appendChild(newContent)
    bottom.appendChild(newDiv)

}

addHeader()
addMain()
addFooter()