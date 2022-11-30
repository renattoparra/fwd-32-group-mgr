$(".hero").click(function () {
  $("#hamburger").removeClass("is-active");
  $(".drop-down-menu").removeClass("is-active");
});

$("#hamburger").click(function () {
  $(this).toggleClass("is-active");
  $(".drop-down-menu").toggleClass("is-active");
});

$(".dot").click(function () {
  const targetDotClass = $(this).attr('class');
  const dotNumber = targetDotClass.charAt(8);

  $(".dot").removeClass("dot-active");
  $(this).toggleClass("dot-active");
  $(".hero").css("background-image", `url(../images/header-slider-img-0${dotNumber}.jpg)`);
});

changeBackground(0);

function changeBackground(dotNumber) {
  setInterval(() => {
    ++dotNumber;

    if (dotNumber > 3) {
      dotNumber = 0;
      return;
    }

    $(".dot").removeClass("dot-active");
    $(`.dot-${dotNumber}`).toggleClass("dot-active");
    $(".hero").css("background-image", `url(../images/header-slider-img-0${dotNumber}.jpg)`);
  }, 3000);
}