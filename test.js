const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page3Animation () {

    const elemContainer = document.querySelector("#elem-container")
    const fixedImage = document.querySelector("#fixed-image")

    elemContainer.addEventListener("mouseenter", () => {
        fixedImage.style.display = "block"
    })

    elemContainer.addEventListener("mouseleave", () => {
        fixedImage.style.display = "none"
    })

    const elems = document.querySelectorAll(".elem")
    elems.forEach(elem => {
        elem.addEventListener("mouseenter", () => {
            const image = elem.getAttribute("data-image")
            fixedImage.style.backgroundImage = `url(${image})`
        })
    })

}

const loader = document.querySelector("#loader")
setTimeout(() => {
    loader.style.top = "-100%"
}, 4200)

page3Animation()