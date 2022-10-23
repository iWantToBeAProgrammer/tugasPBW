const hamburger = document.querySelector ('.hamburger')
const navbar = document.querySelector ('.nav-bar ul')

hamburger.addEventListener ('click', function() {
    navbar.classList.toggle ('flex')
})

function animation(x) {
    x.classList.toggle ("change")
}