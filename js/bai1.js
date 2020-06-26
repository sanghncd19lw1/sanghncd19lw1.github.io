//Trình chiếu Slideshow
let index = 0;
showAuto();

function NhanNut(n) {
index = index + n
show(index);
}

function show(Index) {
let slides = document.querySelectorAll(".Slide"); 
    slides.forEach(slide =>{
    slide.style.display = "none";
    })
if (Index > slides.length){Index = 1 }
else if (Index <= 0){Index = slides.length}
slides[Index-1].style.display = "block";
}

function showAuto() {
let slides = document.querySelectorAll(".Slide"); 
    slides.forEach(slide =>{
        slide.style.display = "none";
    })
    index++;
    if (index > slides.length) {index = 1}
    slides[index-1].style.display = "block";
    setTimeout(showAuto, 4000)
}