$(function () {
  const $leftEyeOut = $(".big_eye_left");
  const $rightEyeOut = $(".big_eye_right");
  let $leftEye = $(".small_eye_left");
  let $rightEye = $(".small_eye_right");
  // let $leftRect = $leftEye.
  // console.log('$leftEye.offset().top', $leftEyeOut.offset().top);
  const $win = $(window);
  $('body').on('mousemove', function (e) {
    var center_x = $win.width() / 2;
    const center_y = 170;
    // console.log('e.clientY :', e.clientY);

    /*横軸に関して条件わけ */
    //1. 左目より左にいるとき
    if (e.clientX <= (center_x - $leftEyeOut.width())) {
      $leftEye.animate("left", "0");
      $rightEye.css("right", "70px");
      //2 . 左目の中にいるとき

    } else if (e.clientX >= (center_x - $leftEyeOut.width()) && e.clientX <= center_x - 20) {
      $leftEye.css("left", (e.clientX - center_x + $leftEyeOut.width()) + "px");

    }
    //3. 右目の中にいるとき
    else if (e.clientX >= (center_x) && e.clientX <= (center_x + $rightEyeOut.width()) - 20) {
      $leftEye.css("left", "70px");
      $rightEye.css("left", (e.clientX - center_x + $rightEyeOut.width()) + "px");
      //4. 右目より右にいるとき
    } else {
      $rightEye.css("right", "0");
    }

    /*縦軸に関して条件わけ3つ */
    //1. まぶたより上にいるとき
    if (e.clientY <= center_y - ($leftEyeOut.height() / 2)) {
      $leftEye.css("top", "20px");
      $rightEye.css("top", "20px");
      // 2. 上まぶたより低く、下まぶたより高くにあるとき
    } else if (e.clientY >= (center_y - $leftEyeOut.height() / 2) && e.clientY <= (center_y + $leftEyeOut.height() / 2) - 20) {
      $leftEye.css("top", (e.clientY - $leftEyeOut.height()) + "px");
      $rightEye.css("top", (e.clientY - $rightEyeOut.height()) + "px");
      //下まぶたより低いとき
    } else {
      $leftEye.css("top", "80px");
      $rightEye.css("top", "80px");
    }
  });
})
