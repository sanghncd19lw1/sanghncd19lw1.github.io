// bai 2
const btn_dangKy = document.getElementById('dangKy');

btn_dangKy.addEventListener('click', function(){
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const txtMaSV = document.getElementById('txtMaSV');
  const txtTenSV = document.getElementById('txtTenSV');
  const mail = document.getElementById('mail');
  const input_radioGender = document.querySelectorAll('.form-check-input[type="radio"]');
  const input_chkFavors = document.querySelectorAll('.form-check-input[type="checkbox"]');
  const quocTich = document.getElementById('quocTich');
  const ghiChu = document.getElementById('ghiChu');
  ghiChu.maxLength = 2;

  if(txtMaSV.value == ''){
    alert('maSV khong dc de trong');
    // txtMaSV.classList.add('bg-danger');
  }
  if(txtTenSV.value == ''){
    alert('tenSv khong dc de trong');
  }
  if(mail.value == ''){
    alert('email khong dc de trong');
  }
  if(!(mail.value.match(mailformat))){
    alert('email phai dung dinh dang');
  }
  if(!(input_chkFavors[0].checked || input_chkFavors[1].checked ||  input_chkFavors[2].checked || input_chkFavors[3].checked || input_chkFavors[4].checked)){
    alert('chon it nhat 1 so thich');
  }
  if(quocTich.selectedIndex == 0 ){
    alert('moi ban chon quoc gia');
  }
  if(ghiChu.value.length >= ghiChu.maxLength){
    alert('200 nha b ei!');
    ghiChu.value = '';
  }
  else{
    alert('dang ky thanh cong');
  }
});
// 
// bai 3
const checkboxes = document.querySelectorAll('tr input[type="checkbox"]');
const soLuong = document.querySelectorAll('tr input[type="text"]');
const donGia = document.querySelectorAll('tbody tr td.donGia');
const thanhTien = document.querySelectorAll('tbody tr td.thanhTien');
const tong = document.querySelector('tr td.tong');
tong.innerHTML = '0';

thanhTien.forEach(function(item, index, array){
  item.innerHTML = 0;
});

soLuong.forEach(function(item, index, array){
  item.value = 0;
  item.addEventListener('input', function(event){
    thanhTien[index].innerHTML = act_thanhTien(donGia[index].innerHTML, soLuong[index].value).toString();
    tong.innerHTML = tinhTong(thanhTien);
  });
});

checkboxes.forEach(function(item, index, array){
  var test = item.checked = false;
  if(test == false){
    soLuong[index].disabled = true; 
  }
  item.addEventListener('change', function(event){
    if(item.checked == false){
      soLuong[index].disabled = true;
    }else{
      soLuong[index].disabled = false;
    }
  });
});
//

// 
function act_thanhTien(donGia = 0, soLuong = 0){
  return parseInt(donGia) * parseInt(soLuong);
}
function tinhTong(thanhTien){
  let total = 0;
  thanhTien.forEach(function(item, index, array){
    total += parseInt(item.innerHTML);
  });
  return total;
}
// 
