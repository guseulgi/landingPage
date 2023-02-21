const subBtn = document.querySelector("#sub .btn-menu");
const subMenu = document.querySelector("#sub .sub-menu");

subBtn.addEventListener('click', function(){
  if(subMenu.classList.contains('hide') === true) {
    subMenu.classList.remove('hide');
  } else {
    subMenu.classList.add('hide');
  }
});