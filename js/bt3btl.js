var listSP = new ListSP();
//Danh sách  sản phẩm
function ListSP(){
  this.arrSP=[];
  this.addSP = function(SP){
    this.arrSP.push(SP);
  };
}

// Khởi tạo các biến qua các input tbody tr td và lớp

const checkboxes = document.querySelectorAll('tr input[type="checkbox"]');
const SoLuong = document.querySelectorAll('tr input[type="text"]');
const DonGia = document.querySelectorAll('tbody tr td.DonGia');
const ThanhTien = document.querySelectorAll('tbody tr td.ThanhTien');
const Tong = document.querySelector('tr td.Tong');
// Vì tổng tiền phụ thuộc vào số lượng bạn mua hàng là bao nhiêu nên trước hết hãy gán cho nó bằng 0
Tong.innerHTML = '0';

// Ở bước này ta lọc tiền hay còn nói là dựa trên item(hàng hóa), index(đơn giá), array(số lượng) để lấy số liệu để tính toán

ThanhTien.forEach(function(item, index, array){
  item.innerHTML = 0;
});

SoLuong.forEach(function(item, index, array){
  item.value = 0;
  item.addEventListener('input', function(event){
    ThanhTien[index].innerHTML = act_ThanhTien(DonGia[index].innerHTML, SoLuong[index].value).toString();
    Tong.innerHTML = TinhTong(ThanhTien);
  });
});

checkboxes.forEach(function(item, index, array){
  var test = item.checked = false;
  if(test == false){
    SoLuong[index].disabled = true; 
  }
  item.addEventListener('change', function(event){
    if(item.checked == false){
      SoLuong[index].disabled = true;
    }else{
      SoLuong[index].disabled = false;
    }
  });
});
//

// 
function act_ThanhTien(DonGia = 0, SoLuong = 0){
  return parseInt(DonGia) * parseInt(SoLuong);
}
function TinhTong(ThanhTien){
  let total = 0;
  ThanhTien.forEach(function(item, index, array){
    total += parseInt(item.innerHTML);
  });
  return total;
}
// 
const HangHoa = document.querySelectorAll('.HangHoa');
const SapXepGia = document.querySelector('#SapXepGia');
HangHoa.forEach(function(item, index, array){
  var sp = new SP(item.innerHTML, DonGia[index].innerHTML, SoLuong[index].innerHTML, ThanhTien[index].innerHTML);
  listSP.addSP(sp);
});
// console.log(listSP);



// SapXepGia.addEventListener('change', function(event){
//   if(SapXepGia.selectedIndex===1){
//     var Min2Max = listSP.arrSP.sort(function(a, b) {
//       return parseInt(a.DonGia) - parseInt(b.DonGia);
//     });
//     HangHoa.forEach(function(item, index, array){
//       item.innerHTML = Min2Max[index].HangHoa
//       DonGia[index].innerHTML = Min2Max[index].DonGia;
//       SoLuong[index].value =0;
//       ThanhTien[index].innerHTML = 0;
//     });
//   }
//   else if(SapXepGia.selectedIndex===2){
//     var Max2Min = listSP.arrSP.sort(function(a, b) {
//       return parseInt(b.DonGia) - parseInt(a.DonGia);
//     });
//     HangHoa.forEach(function(item, index, array){
//       item.innerHTML = Max2Min[index].hangHoa
//       DonGia[index].innerHTML = max2Min[index].DonGia;
//       SoLuong[index].value = 0;
//       ThanhTien[index].innerHTML = 0;
//     });
//   }
//   else{
//     alert('Hãy chọn mức giá!');
//   }
// });



// Lọc theo mức giá
act_ThanhTien.addEventListener("change", function () {
  // Duyệt qua các "row"
  tr.forEach(duyet => {
      if (Number(duyet.dataset.act_ThanhTien) <= Number(act_ThanhTien.value) || duyet.dataset.name == "all" || duyet.dataset.name == "total") {
          duyet.style.display = "table-row";
      }else{duyet.style.display = "none";}
  })
})