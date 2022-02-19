const images = [{
    img: "audi1.jpg"
}, {
    img: "audi2.jpg"
}, {
    img: "audi3.jpg"
}, {
    img: "audi4.jpg"
}]
var i = 0;
img = document.querySelector(".img")
const radio1 = document.getElementById("radio1")
const radio2 = document.getElementById("radio2")
const radio3 = document.getElementById("radio3")
const radio4 = document.getElementById("radio4")
const radioBtn = document.querySelectorAll(".radio-btn")
var type;

function next() {
    interval(false)
    i = (i + 1) % (images.length)
    img.src = images[i].img
    radio(i)
    interval(true)
}

function prev() {
    interval(false)
    i = (i - 1) % (images.length)
    if (i < 0) {
        i = 3
    }
    radio(i)
    img.src = images[i].img
    interval(true)
}

function interval(e) {
    if (e) {
        type = setInterval(() => {
            img.src = images[i].img
            radio(i);
            i = (i + 1) % (images.length);
        }, 4000)
    }
    if (!e) {
        clearInterval(type)
    }

}
window.addEventListener("DOMContentLoaded", () => {
    interval(true)
})

function radio(e) {


    if (e == 0) {
        radio3.style.backgroundColor = "white"
        radio2.style.backgroundColor = "white"
        radio4.style.backgroundColor = "white"
        radio1.style.backgroundColor = "black"
    } else if (e == 1) {
        radio3.style.backgroundColor = "white"
        radio1.style.backgroundColor = "white"
        radio4.style.backgroundColor = "white"
        radio2.style.backgroundColor = "black"
    } else if (e == 2) {
        radio2.style.backgroundColor = "white"
        radio1.style.backgroundColor = "white"
        radio4.style.backgroundColor = "white"
        radio3.style.backgroundColor = "black"
    } else if (e == 3) {
        radio3.style.backgroundColor = "white"
        radio2.style.backgroundColor = "white"
        radio1.style.backgroundColor = "white"
        radio4.style.backgroundColor = "black"
    }
}

function imageShow(e) {
    interval(false)
    img.src = images[e].img
    radio(e)
    interval(true)
}