//  Muốn form đăng ký thành công thì ta phải xét
//  1. Các input type="text" phải điền đầy đủ và đúng định dạng(mail)

// 2. Các input type="radio" (giới tính) phải tích 1 trong 2
// 3. Các input type= "checkbox" (sở thích) phải tích ít nhất là 1 và nếu tích và khác thì ta sẽ cho ng dùng tự nhập sở thích vào
// 4. Ghi chú thì ko được ghi quá 200 kí tự
//  5.Cuối cùng là kiểm tra xem chúng ta đã thực hiện true ở 4 bước trên chưa nếu rồi thì 
// đăng kí thành công còn ko thì báo lỗi những dòng mà ng dùng đã ko nhập hoặc nhập sai



// lấy mọi nút input 
const listtxt = document.querySelectorAll('input')
// console.log(listtxt);
// text xem là các nut input có được lấy chưa


// lấy các dòng p để khi có lỗi nó sẽ in ra ở phần p này
const listloi = document.querySelectorAll('.messError');
// console.log(listloi);
//  text coi listloi đã chạy chưa

const M_error = document.querySelector('.messError1');
console.log(M_error); 


const validForm = document.getElementById('dangKy');

btn_dangKy.addEventListener('click', function(){
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// tạo hàm kiểm tra form  
// forEach là dùng để lọc 
function validForm() {
  listloi.forEach(p => {
    p.innerHTML  ="";
  })

  // tiếp đến là khai báo biến cho ghi chú và kiểm tra xem giới tính đã chọn chưa, sở thích đã tích chưa????
  const noted = document.querySelector('#note');
  const clickgt = 0;
  const clickst = 0;
  const clickForm = false;
  const clickradio = false;
  const clickcheckbox = false;

  listtxt.forEach(input => {
    input.style.background = "white";

    // Điều kiện của input type="text"
    if (input.type == "text") {//if 1
      const otherclick = document.querySelector('#other-enjoy');
      if (input.value.length == 0 & input.name !="enjoy") {
        input.style.background = "yellow";
        clickForm = false;
        listloi.forEach (p => {
          if (input.name == p.dataset.name){
            p.innerHTML = "Hãy nhập thông tin vào"
          }
        })
      
      }else if (input.value.length > 0 & input.name != "enjoy") {
        clickForm = true;
      }
      input.addEventListener('invalid',function ()  {
        input.style.background = "yellow";
        clickForm = false;
        listloi.forEach(p => {
          if (input.name == p.dataset.name && input.name == "mssv") {
            p.innerHTML = "Hãy nhập mã số sinh viên của bạn"
          }
          if (input.name == p.dataset.name && input.name == "name") {
            p.innerHTML = "Hãy nhập họ và tên của bạn"
          }
          if (input.name == p.dataset.name && input.name == "mail") {
            p.innerHTML = "Hãy nhập mail của bạn"

          }
        })
      })
    }
  })

}

