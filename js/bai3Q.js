var listSanPham = new ListSanPham()
//Danh sách  sản phẩm
function ListSanPham(){
  this.arrSanPham=[];
  this.addSanPham = function(sanPham){
    this.arrSanPham.push(sanPham);
  };
}   

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
const hangHoa = document.querySelectorAll('.hangHoa');
const sapXepGia = document.querySelector('#sapXepGia');
hangHoa.forEach(function(item, index, array){
  var sp = new SanPham(item.innerHTML, donGia[index].innerHTML, soLuong[index].innerHTML, thanhTien[index].innerHTML);
  listSanPham.addSanPham(sp);
});
console.log(listSanPham);



sapXepGia.addEventListener('change', function(event){
  if(sapXepGia.selectedIndex===1){
    var min2Max = listSanPham.arrSanPham.sort(function(a, b) {
      return parseInt(a.donGia) - parseInt(b.donGia);
    });
    hangHoa.forEach(function(item, index, array){
      item.innerHTML = min2Max[index].hangHoa
      donGia[index].innerHTML = min2Max[index].donGia;
      soLuong[index].value =0;
      thanhTien[index].innerHTML = 0;
    });
  }
  else if(sapXepGia.selectedIndex === 2){
    var max2Min = listSanPham.arrSanPham.sort(function(a, b) {
      return parseInt(b.donGia) - parseInt(a.donGia);
    });
    hangHoa.forEach(function(item, index, array){
      item.innerHTML = max2Min[index].hangHoa
      donGia[index].innerHTML = max2Min[index].donGia;
      soLuong[index].value = 0;
      thanhTien[index].innerHTML = 0;
    });
  }
  else{
    alert('chon muc gia!');
  }
});





 // slideshow
var slideIndex = 1;
showSlides(slideIndex);

// currentSlide()
function currentSlide(n) {
  showSlides(slideIndex = n);
}
// ~currentSlide()

// next|previous control
function plusSlides(n){
  showSlides(slideIndex +=n);
}
// next|previous control
function showSlides(n){
  var i;
  var slides = document.querySelectorAll('.mySlides');
  var dots = document.querySelectorAll('.dot');
  if(n > slides.length){
    slideIndex = 1;
  }
  if(n < 1){
    slideIndex = slides.length;
  }
  slides.forEach(function(slide, index){
    slide.style.display = "none";
    slides[slideIndex-1].style.display = 'block';
  });

  dots.forEach(function(dot, index){
    dot.className = dot.className.replace("active", "");
  });
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}
  
