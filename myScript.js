//variables for navbar
let home = document.getElementById("home")
let aboutMe = document.getElementById("about")
let projects = document.getElementById("projects")
let contactMe = document.getElementById("contact-me")


//variables sections 
let homeSection = document.getElementById("welcome-section")
let aboutMeSection = document.getElementById("about-me")
let projectsSection = document.getElementById("projects-section")
let contactMeSection = document.getElementById("contact-me-section")

aboutMeSection.style.display = "none"
projectsSection.style.display = "none"
contactMeSection.style.display = "none"


//event listeners to switch between sections
home.addEventListener("click", function() {
    aboutMeSection.style.display = "none"
    projectsSection.style.display = "none"
    contactMeSection.style.display = "none"
    homeSection.style.display = "flex"
})


aboutMe.addEventListener("click", function(){
    homeSection.style.display = "none"
    projectsSection.style.display = "none"
    contactMeSection.style.display = "none"
    aboutMeSection.style.display = "flex"
})


projects.addEventListener("click", function() {
    homeSection.style.display = "none"
    contactMeSection.style.display = "none"
    aboutMeSection.style.display = "none"
    projectsSection.style.display = "flex"
})

contactMe.addEventListener("click", function(){
    homeSection.style.display = "none"
    aboutMeSection.style.display = "none"
    projectsSection.style.display = "none"
    contactMeSection.style.display = "flex"
})


home.addEventListener("click", function(currrentSection){
    
})


//FUNCTIONS 
//function to show current section on navbar 

