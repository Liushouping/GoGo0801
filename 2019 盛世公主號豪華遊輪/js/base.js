	new WOW().init();

    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 25,
      nav: true,
      navText: [
        "<i class='fas fa-angle-left'></i>",
        "<i class='fas fa-angle-right'></i>"
      ],
      autoplay: true,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
    	  nav: false,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 3,
        }
      }
    });

	$(function(){

		$("#GO").click(function(){
		    jQuery("html,body").animate({
		    scrollTop:0
		    },700);
		});

		$(window).scroll(function() {
		  if ( $(this).scrollTop() > 500){
		    $('#Go_to_top').fadeIn("fast");
		} else {
		    $('#Go_to_top').stop().fadeOut("fast");
		}
	});
	});

	(function() {
	  'use strict';
	  window.addEventListener('load', function() {
	    // Fetch all the forms we want to apply custom Bootstrap validation styles to
	    var forms = document.getElementsByClassName('needs-validation');
	    // Loop over them and prevent submission
	    var validation = Array.prototype.filter.call(forms, function(form) {
	      form.addEventListener('submit', function(event) {
	        if (form.checkValidity() === false) {
	          event.preventDefault();
	          event.stopPropagation();
	        }
	        form.classList.add('was-validated');
	      }, false);
	    });
	  }, false);
	})();

	window.fbAsyncInit = function() {
	    FB.init({
	      xfbml            : true,
	      version          : 'v3.2'
	    });
	};

	(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));


			$(document).ready(function() {
			    $("#popup_image").show();
			});

			$(document).ready(function($){
			  window.onload = function (){
			    $(".bts-popup").delay(1000).addClass('is-visible');
				}
			  
				$('.bts-popup-trigger').on('click', function(event){
					event.preventDefault();
					$('.bts-popup').addClass('is-visible');
				});
				
				$('.bts-popup').on('click', function(event){
					if( $(event.target).is('.bts-popup-close') || $(event.target).is('.bts-popup') ) {
						event.preventDefault();
						$(this).removeClass('is-visible');
					}
				});

				$(document).keyup(function(event){
			    	if(event.which=='27'){
			    		$('.bts-popup').removeClass('is-visible');
				    }
			    });
			});
