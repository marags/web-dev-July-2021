

let position = 0
const slider = document.getElementById("slider");

function previousImage() {
    console.log("PREV " + position)
    if (position < 0) {
        position += 400; 
    }
    slider.style.transform = `translate(${position}px)`;
}

function nextImage() {
    console.log("NEXT " + position)
    if (position > -800) {
        position -= 400;  
    }
    slider.style.transform = `translate(${position}px)`;
}