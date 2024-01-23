const toPortfolioBtn = document.querySelector("#to-project-page")
const homeBtn = document.querySelector("#back-to-home")

function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function backToHome(){
    return location.replace("/index.html")
}

function toPortfolio(){
    return location.replace("/project.html")
}




