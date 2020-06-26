//Trình chiếu Slideshow

// Đầu tiên ta khởi taok biến index = 0 để khi nhấn vào nút next thì nó sẽ chạy cái slide tiếp theo
let index = 0;
showAuto();

// Ta khởi tạo biến nút

function NhanNut(n) {
index = index + n
show(index);
}

// Ta tạo hàm cho slide thông qua lớp Slide sau đó ta lấy hết những gì đã tham chiếu
// vào 1 biến mới nếu thỏa với điều kiện tham chiếu đó thì giá trị của index trừ đi  1
// Vậy slide này sẽ được trừ đi 1 khi nhấn vào nút next

function show(Index) {
let slides = document.querySelectorAll(".Slide"); 
    slides.forEach(slide =>{
    slide.style.display = "none";
    })

if (Index > slides.length){Index = 1 }
else if (Index <= 0){Index = slides.length}
slides[Index-1].style.display = "block";
}

// Ta tạo hàm cho slide thông qua lớp Slide sau đó ta lấy hết những gì đã tham chiếu
// vào 1 biến mới nếu thỏa với điều kiện tham chiếu đó thì giá trị của index cộng thêm 1
// Vậy slide này sẽ được cộng thêm 1 khi nhấn vào nút next 

//setTimeout(showAuto, 4000) 4000 có nghĩa là slide sẽ tự chuyên qua silde tiếp theo sau 4s


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