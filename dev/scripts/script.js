$(".hero").click(function () {
  $('#hamburger').removeClass("is-active");
  $('.drop-down-menu').removeClass("is-active")
});

$("#hamburger").click(function () {
  $(this).toggleClass("is-active");
  $('.drop-down-menu').toggleClass("is-active")
});

$(".c").click(function () {
  let clas = $(this).attr('class');
  console.log(clas);
  let number;
  if (clas === "c c1") { number = 1 }
  else if (clas === "c c2") { number = 2 }
  else if (clas === "c c3") { number = 3 }
  $('.hero').css("background-image", `url(../images/header-slider-img-0${number}.jpg)`)
});

background(1);

function background(x) {
  setInterval(() => {
    console.log('s');
    if (x > 2) x = 0;
    let backgroundA = document.querySelector('.hero');
    let dots = document.querySelectorAll('.c');
    dots.forEach((item, index) => {
      // item.style.background = 'white';
      // if(index==(x-1))item.style.background='blue';

      const color = index === x ? '#429bd6' : "white";
      item.style.background = color;
    })

    backgroundA.style.backgroundImage = `url(../images/header-slider-img-0${x + 1}.jpg)`;
    x++;
  }, 3000)
}