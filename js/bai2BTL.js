// Muốn form đăng ký thành công thì ta phải xét
//  1. Các input type="text" phải điền đầy đủ và đúng định dạng(mail)

// 2. Các input type="radio" (giới tính) phải tích 1 trong 2
// 3. Các input type= "checkbox" (sở thích) phải tích ít nhất là 1 và nếu tích và khác thì ta sẽ cho ng dùng tự nhập sở thích vào
// 4. Ghi chú thì ko được ghi quá 200 kí tự
//  5.Cuối cùng là kiểm tra xem chúng ta đã thực hiện true ở 4 bước trên chưa nếu rồi thì 
// đăng kí thành công còn ko thì báo lỗi những dòng mà ng dùng đã ko nhập hoặc nhập sai


// Lấy tất cả nút Input
let nodeListInput = document.querySelectorAll("input");

// lấy các dòng span để khi có lỗi nó sẽ in ra ở phần span này
let nodelistMessError = document.querySelectorAll(".messError")

// Tiếp đến là khai báo biến cho ghi chú và kiểm tra xem giới tính đã chọn chưa, sở thích đã tích chưa????
function validForm() {
    nodelistMessError.forEach(span => {
        span.innerHTML = "";
    })

// Khởi tạo các biến qua các lớp có bên html
    let note = document.querySelector("#note");
    let isCheckedgt = 0;
    let isCheckedEnjoy = 0;
    let checkForm = false;
    let checkRadio = false;
    let checkBox = false;
    nodeListInput.forEach(input => {
        input.style.background = "white";
        //  Điều kiện của input type="text"

        if (input.type == "text") {
            let otherChecked = document.querySelector("#other-checked");
            if (input.value.length == 0 & input.name != "enjoy") {
                input.style.background = "yellow";
                checkForm = false;
                nodelistMessError.forEach(span => {
                    if (input.name == span.dataset.name){
                        span.innerHTML = "Hãy nhập thông tin vào chỗ còn trống!!!" 
                        //  alert('Đăng ký thất bại vì bạn chưa nhập đủ thông tin'); 
                        //vì dùng alert nên có bao nhiêu lỗi là nó sẽ hiện thị bấy nhiêu lần
                    }
                })
            }else if (input.value.length > 0 & input.name != "enjoy") {
                checkForm = true;
            }
            input.addEventListener("invalid", function () {
                input.style.background = "yellow";
                checkForm = false;
                
                nodelistMessError.forEach(span => {
                    if (input.name == span.dataset.name && input.name == "mssv"){
                        span.innerHTML = "Hãy nhập mã số sinh viên của bạn vào"
                    }
                    if (input.name == span.dataset.name && input.name == "name"){
                        span.innerHTML = "Họ tên không đươc để trống"
                    }
                    if (input.name == span.dataset.name && input.name == "mail"){
                        span.innerHTML = "Mail phải đúng định dạng và không chứa ký tự đặc biệt!"
                    }
                    
                })
            })
          }
          //  Điều kiện của input type="radio"
          if (input.type == "radio") {
              let sex = document.querySelector("#gt");

              if (input.checked) { 
                  isCheckedgt += 1;
              }

              nodelistMessError.forEach(span => {
                  if (input.name == span.dataset.name){
                      if (isCheckedgt == 0){
                          checkRadio = false;
                          sex.style.background = "yellow";
                          span.innerHTML = "Xin hãy chọn 1 trong 2!" 
                      }
                      else{
                          sex.style.background = "white";
                          span.innerHTML = "";
                          checkRadio = true;
                      }
                  }
              })
          }

          // Điều kiện của input type="checkbox"
          if (input.type == "checkbox") {
              let enjoy = document.querySelector("#hobbies");
              if (input.checked) {
                  isCheckedEnjoy += 1;
              }

              nodelistMessError.forEach(span => {
                  if (input.name == span.dataset.name){
                      if (isCheckedEnjoy == 0) {
                          checkCBox = false;
                          enjoy.style.background = "yellow";
                          span.innerHTML = "Vui lòng  chọn ít nhất 1 sở thích!" 
                      }
                      else {
                          enjoy.style.background = "white";
                          span.innerHTML = "";
                          checkBox = true;
                      }
                  }
              })
              
          }
      })
      // Điều kiện ghi chú 
      if (note.value.length > 200) {
          alert("Ghi chú không quá 200 ký tự!")
          checkForm = false;
      }
      // Kiểm tra lại xem thông tin đã điền đầy đủ và hợp chưa
      // nếu ok rồi thì submit ngươc lại thì báo lỗi 
      if (checkForm == checkBox && checkForm == checkRadio && checkForm == true){
          return true;
      }
      else{
          return false;
      }
  }

  // Điều kiện sở thích "Khác" khi được checked
  // Đầu tiên ta khởi tạo biến qua lớp other-hoppy và other-checked
  let otherEnjoy = document.querySelector("#other-hobby");

  let otherChecked = document.querySelector("#other-checked");
  otherChecked.style.display = "none";
  // Ta thêm sự kiện là click có nghĩa là khi nhấn vào khác thì sẽ có 1 ô để nhập sở thích khác vào ngược lại thì không có
  otherEnjoy.addEventListener("click", function () {
      if (otherEnjoy.checked) {
          otherChecked.style.display = "block";
      } else {
          otherChecked.style.display = "none";
      }
  })