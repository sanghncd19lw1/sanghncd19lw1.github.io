//----------------------Slide Show---------------------//
let slides = document.querySelectorAll(".slide");
let left = 100;
let index = 0;
let cutPercent = ""; // lưu position đã cut ký tự "%"
// Set vị trí các slide nối đuôi nhau theo hàng ngang
setPos()
function setPos() {
    slides.forEach(slide => {
        slide.style.left = left + "%";
        left += 100;
    })
}
function run(move) {
    slides.forEach(slide => {
        cutPercent = slide.style.left.slice(0, slide.style.left.length - 1)
        slide.style.left = cutPercent - move + "%";
    })
    if (move == 100) { index++; }
    else { index--; }
    if (index > slides.length) {
        index = 1;
        left = 0;
        setPos()
    }
    if (index <= 0) {
        index = slides.length;
        left = -400;
        setPos()
    }
}
// Slide tự chuyển
autoRun()
function autoRun() {
    slides.forEach(slide => {
        // Cut ký tự "%" ở cuối str
        cutPercent = slide.style.left.slice(0, slide.style.left.length - 1);
        slide.style.left = cutPercent - 100 + "%";
    })
    index++;
    if (index > slides.length) {
        index = 1;
        left = 0;
        setPos()
    }
    setTimeout(autoRun, 3000)
}


//----------------------Form---------------------//
// Điều kiện của form khi submit
// Lấy tất cả nút Input
let nodeListInput = document.querySelectorAll("input");
let nodelistMessError = document.querySelectorAll(".messError")
function validForm() {
    nodelistMessError.forEach(span => {
        span.innerHTML = "";
    })
    let note = document.querySelector("#note");
    let isCheckedSex = 0;
    let isCheckedHobby = 0;
    let checkForm = false;
    let checkRadio = false;
    let checkCBox = false;
    nodeListInput.forEach(input => {
        input.style.background = "#f1f1f1";
        // Các điều kiện của input type text
        if (input.type == "text") {
            let otherChecked = document.querySelector("#other-checked");
            if (input.value.length == 0 & input.name != "hobby") {
                input.style.background = "yellow";
                checkForm = false;
                nodelistMessError.forEach(span => {
                    if (input.name == span.dataset.name){
                        span.innerHTML = "Vui lòng nhập thông tin!"
                    }
                })
            }else if (input.value.length > 0 & input.name != "hobby") {
                checkForm = true;
            }
            input.addEventListener("invalid", function () {
                input.style.background = "yellow";
                checkForm = false;
                nodelistMessError.forEach(span => {
                    if (input.name == span.dataset.name && input.name == "mssv"){
                        span.innerHTML = "Mã Sinh Viên Gồm 10 Chữ Số Từ 1-9!"
                    }
                    if (input.name == span.dataset.name && input.name == "fullname"){
                        span.innerHTML = "Họ tên không được chứa chữ số!"
                    }
                    if (input.name == span.dataset.name && input.name == "mail"){
                        span.innerHTML = "Mail phải đúng định dạng và không chứa ký tự đặc biệt!"
                    }
                })
            })
            // if (input.name == "hobby") {
            //     if (otherChecked.style.display == "block") {
            //         if (input.value.length == 0) {
            //             errorForm(input);
            //             checkForm = false;
            //             nodelistMessError.forEach(span => {
            //                 if (input.name == span.dataset.name){
            //                     span.innerHTML = "Vui lòng nhập sở thích!"
            //                 }
            //             })
            //         }
            //         input.addEventListener("invalid", function () {
            //             errorForm(input);
            //             checkForm = false;
            //             nodelistMessError.forEach(span => {
            //                 if (input.name == span.dataset.name && input.name == "hobby"){
            //                     span.innerHTML = "Sở thích không chứa số!"
            //                 }
            //             })
            //         })
            //     } else { input.style.background = "#f1f1f1" }
            // }
        }
        // Điều kiện của input type radio
        if (input.type == "radio") {
            let sex = document.querySelector("#sex");

            if (input.checked) { 
                isCheckedSex += 1;
            }

            nodelistMessError.forEach(span => {
                if (input.name == span.dataset.name){
                    if (isCheckedSex == 0){
                        checkRadio = false;
                        sex.style.background = "yellow";
                        span.innerHTML = "Vui lòng chọn 1 trong 2!" 
                    }
                    else{
                        sex.style.background = "#f1f1f1";
                        span.innerHTML = "";
                        checkRadio = true;
                    }
                }
            })
        }

        // Điều kiện của input type checkbox
        if (input.type == "checkbox") {
            let hobbies = document.querySelector("#hobbies");
            if (input.checked) {
                isCheckedHobby += 1;
            }

            nodelistMessError.forEach(span => {
                if (input.name == span.dataset.name){
                    if (isCheckedHobby == 0) {
                        checkCBox = false;
                        hobbies.style.background = "yellow";
                        
                        
                        span.innerHTML = "Vui lòng  chọn ít nhất 1 sở thích!" 
                    }
                    else {
                        hobbies.style.background = "#f1f1f1";
                        span.innerHTML = "";
                        checkCBox = true;
                    }
                }
            })
            
        }
    })
    // Điều kiện ghi chú 
    if (note.value.length > 300) {
        alert("Ghi chú không quá 300 ký tự!")
        checkForm = false;
    }
    // Kiểm tra lần cuối xem thông tin đã hợp lên hay không
    if (checkForm == checkCBox && checkForm == checkRadio && checkForm == true){
        return true;
    }
    else{
        return false;
    }
}
// thêm thuộc tính autocomplete="off" cho các thẻ input
nodeListInput.forEach(obj => {
    obj.autocomplete = "off";
})
// Điều kiện sở thích "Khác" khi được checked
let otherHobby = document.querySelector("#other-hobby");
let otherChecked = document.querySelector("#other-checked");
otherChecked.style.display = "none";
otherHobby.addEventListener("click", function () {
    if (otherHobby.checked) {
        otherChecked.style.display = "block";
    } else {
        otherChecked.style.display = "none";
    }
})


// Bán Hàng
let price = document.querySelector("#price"); // Biến lưu mức giá
let tr = document.querySelectorAll("tr"); // Lấy tất cả các row
let th = document.querySelectorAll(".money"); // Lấy tất cả các col "Thành Tiền"
let money = document.querySelector("#money"); // Lấy ô tổng tiền
let total = 0; // Biến lưu tổng tiền
 // Lấy tất cả input có type "checkbox"
let nodeListCBox = document.querySelectorAll("input[type='checkbox']");
 // Lấy tất cả input có type "number"
let nodeListNum = document.querySelectorAll("input[type='number']");

// Set display cho row là "table-row"
tr.forEach(trObj => {
    trObj.style.display = "table-row";
})
// Lọc theo mức giá
price.addEventListener("change", function () {
    // Duyệt qua các "row"
    tr.forEach(trObj => {
        if (Number(trObj.dataset.price) <= Number(price.value) || trObj.dataset.name == "info" || trObj.dataset.name == "total") {
            trObj.style.display = "table-row";
        }else{trObj.style.display = "none";}
    })
})
// Tính tiền mỗi sản phẩm
nodeListNum.forEach(inpNumObj =>{
    inpNumObj.addEventListener("change", function (){
        th.forEach(thObj =>{
            if (inpNumObj.name == thObj.dataset.name){
                amount = Number(inpNumObj.value);
                spice = Number(thObj.dataset.price);
                thObj.innerHTML = amount*spice;
            }
        })
    })
})
// Set input "Number" mặc đinh là ẩn
nodeListNum.forEach(inpNumObj =>{
    inpNumObj.disabled = true;
})
// Tổng tiền
calculatorMoney()
function calculatorMoney(){
    tr.forEach(trObj => {
        if (trObj.style.display == "table-row"){
            nodeListCBox.forEach(inpCBoxOjb => {
                if (inpCBoxOjb.checked & inpCBoxOjb.name == trObj.dataset.name) {
                    th.forEach(thObj => {
                        if (inpCBoxOjb.name == trObj.dataset.name & trObj.dataset.name == thObj.dataset.name){
                            total += Number(thObj.innerHTML);
                            money.innerHTML = String(total);
                        }
                    })
                }else{money.innerHTML = total} 
            })
        }else{money.innerHTML = total}   
    })
    total = 0;
    setTimeout(calculatorMoney, 0)
}

// Click để disabled input
nodeListCBox.forEach(inpCBoxOjb =>
{
    inpCBoxOjb.addEventListener("click", function()
    {
        nodeListNum.forEach(inpNumObj => 
        {
            if (inpCBoxOjb.name == inpNumObj.name)
            {
                th.forEach(thObj =>
                {
                    if(inpCBoxOjb.name == thObj.dataset.name)
                    {
                        if (inpCBoxOjb.checked)
                        {
                            inpNumObj.disabled = false;
                            thObj.style.opacity = "1";
                        }else
                        {
                            inpNumObj.disabled = true;
                            thObj.style.opacity = "0";
                        } 
                    }
                })                 
            }
        })
    })
})