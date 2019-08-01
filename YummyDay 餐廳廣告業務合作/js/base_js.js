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
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 3
        }
      }
    })
    /**/
      $(document).on("click", 'a[href^="#"]', function() {

        $("html, body").animate(
          {
            scrollTop: $($.attr(this, "href")).offset().top
          },
          1000
        );
      });
    /**/
      $(function(){
        $("#GO").click(function(){
            jQuery("html,body").animate({
            scrollTop:0
            },700);
        });
        $(window).scroll(function() {
           if ( $(this).scrollTop() > 500){
              $('#scrolltop').fadeIn("fast");
           } else {
              $('#scrolltop').stop().fadeOut("fast");
           }
        });
      });
    /**/
      new WOW().init();

      $('#btn-validate').submit(function(event) { 
        console.log('form submitted.'); 

      if (!grecaptcha.getResponse()) { 
        swal("取消", "驗證碼出現問題","error"); 
        console.log('captcha not yet completed.'); 

        event.preventDefault(); //prevent form submit 
        grecaptcha.execute(); 
      } else { 
        console.log('form really submitted.'); 
      } 
      }); 