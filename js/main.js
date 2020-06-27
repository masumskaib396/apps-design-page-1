(function($) {
"use strict";

/*------------------------------------------------------------------
[Table of contents]


-------------------------------------------------------------------*/

/*--------------------------------------------------------------
CUSTOM PRE DEFINE FUNCTION
------------------------------------------------------------*/
/* is_exist() */
jQuery.fn.is_exist = function(){
  return this.length;
}


$(function(){


/*--------------------------------------------------------------
Cool MENU TOGGLE JS
--------------------------------------------------------------*/

$('.menu-toggle').click(function() {
  $('.cool--menu').toggleClass('opening');
  $(this).toggleClass('open');
})

$('.cool--menu ul li a').on('click', function(){
  $('.cool--menu ul li a').removeClass('active');
  $(this).addClass('active');

})

/*--------------------------------------------------------------
COOL MAP TOGGLE JS
--------------------------------------------------------------*/
$('.cool--map-slide').on('click', function(){
  $('.cool--map').slideToggle();

})


  

});/*End document ready*/


$(window).on("resize", function(){

}); // end window resize


$(window).on("load" ,function(){



}); // End window LODE




})(jQuery);






