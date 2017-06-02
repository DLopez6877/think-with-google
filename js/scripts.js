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

});
