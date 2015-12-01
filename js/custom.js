jQuery(function($) {'use strict',

  $(function() {
      var path = window.location.href; // Mengambil data URL pada Address bar
      $('nav li a').each(function() {
          // Jika URL pada menu ini sama persis dengan path...
          if (this.href === path) {
              // Tambahkan kelas "active" pada menu ini
              $(this).addClass('active');
          }
      });
  });

//$(function() {
//    var path = window.location.href; // Mengambil data URL pada Address bar
//    $('#selayang .left-menu .nav>li').each(function() {
//        // Jika URL pada menu ini sama persis dengan path...
//        if (this.href === path) {
//            // Tambahkan kelas "active" pada menu ini
//            $(this).addClass('active');
//        }
//    });
//});


   // accordian back end
   	$('.panel-heading').on('click', function(){
   		$(this).closest('.panel-group').children().each(function(){
   		$(this).find('>.panel-heading').removeClass('active');
   		 });

   	 	$(this).closest('.panel-heading').toggleClass('active');
   	});

    //  jQuery('.leftpanel .nav .parent > a').click(function() {
     //
    //      var coll = jQuery(this).parents('.collapsed').length;
     //
    //      if (!coll) {
    //         jQuery('.leftpanel .nav .parent-focus').each(function() {
    //            jQuery(this).find('.children').slideUp('fast');
    //            jQuery(this).removeClass('parent-focus');
    //         });
     //
    //         var child = jQuery(this).parent().find('.children');
    //         if(!child.is(':visible')) {
    //            child.slideDown('fast');
    //            if(!child.parent().hasClass('active'))
    //               child.parent().addClass('parent-focus');
    //         } else {
    //            child.slideUp('fast');
    //            child.parent().removeClass('parent-focus');
    //         }
    //      }
    //      return false;
    //   });

      // Add class nav-hover to mene. Useful for viewing sub-menu
      jQuery('.leftpanel .nav li').hover(function(){
         $(this).addClass('nav-hover');
      }, function(){
         $(this).removeClass('nav-hover');
      });


});
