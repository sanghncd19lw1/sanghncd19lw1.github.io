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