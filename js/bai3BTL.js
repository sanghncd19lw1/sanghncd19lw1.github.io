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