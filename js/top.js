



$(document).ready(function(){
 
  $(".top").click(function(){
   $("html,body").animate({scrollTop:0},500); 
  });
  $(window).scroll(function(){
   if($(this).scrollTop()>200){
   $(".top").fadeIn("fast");
   }else{
   $(".top").stop().fadeOut("fast"); 
   } 
  });
})



