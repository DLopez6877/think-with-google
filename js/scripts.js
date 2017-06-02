////////////////////////    USER INTERFACE    ////////////////////////
$(function(){
  $(".card").hover(
    function(){ $(this).addClass('glow') },
    function(){ $(this).removeClass('glow') }
  )
  $(".feature").hover(
    function(){ $(this).addClass('glow') },
    function(){ $(this).removeClass('glow') }
  )

  $(function () {
  count = 0;
  wordsArray = ["adore", "admire", "adore", "honor", "adore", "praise"];
  setInterval(function () {
    count++;
    $("#changeText").fadeOut(400, function () {
      $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
    });
  }, 5000);
  });
});
