// ================ Menu button function performs while responsive============================
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}


// ================ Easy scroll function in navigation bar  ============================
$(document).ready(function(){

	// scroll from top to section
		$(".EXE_DIV0").click(function() {
			$('html, body,section').animate({
			scrollTop: $(".sec1").offset().top
			}, 2000);
			});
		$(".EXE_DIV1").click(function() {
			$('html, body,section').animate({
			scrollTop: $(".about").offset().top
			}, 2000);
			});
		$(".EXE_DIV2").click(function() {
			$('html, body,section').animate({
			scrollTop: $(".skill_bar_section").offset().top
			}, 2000);
			});
		$(".EXE_DIV3").click(function() {
			$('html, body,section').animate({
			scrollTop: $(".portfolio").offset().top
			}, 2000);
			});
		$(".EXE_DIV4").click(function() {
			$('html, body,section').animate({
			scrollTop: $(".Contact").offset().top
			}, 2000);
			});


// ================ Onhover function on portfolio ============================
		$(".login").mouseenter(function(){
			$(".ldisp").css("display","block");
		});
		$(".login").mouseleave(function(){
		    $(".ldisp").css("display", "none");
		  });
		$(".registration").mouseenter(function(){
			$(".Rdisp").css("display","block");
			$(".mainh").css("display","block");
		});
		$(".registration").mouseleave(function(){
		    $(".Rdisp").css("display", "none");
		  });



	// ================ On Hover function on logo ============================
		$(".logo").mouseenter(function(){
			$(".logo1").css("display","none");
			$(".logo2").css("display","inline-block");
		});
		$(".logo").mouseleave(function(){
			$(".logo1").css("display","inline-block");
			$(".logo2").css("display","none");
		  });


		// ================ On Hover function on skills ============================
		  // var offsetTop = $('.skill').offset().top;
			
			$(window).scroll(function() 
				{				
					// the function is
					$('.skill-per').each(function()
						{
							var $this = $(this);
							var per = $this.attr('per');
							$this.css("width",per+'%');
							$({animatedValue: 0}).animate({animatedValue: per},
								{
									duration: 1000,
									step: function()
										{
											// $this.attr('per', Math.floor(this.animatedValue) + '%');
										},
									complete: function()
										{
											$this.attr('per', Math.floor(this.animatedValue) + '%');
										}
								});
						});
		  		});


	// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
		window.onscroll = function() {scrollFunction1()};

		function scrollFunction1() {
		  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		    document.getElementById("header").style.height = "40px";
		    document.getElementById("header2").style.padding = "2px 10px 2px 10px";
		    document.getElementById("logo1,logo2,EXE_DIV").style.fontSize = "16px";
		  } else {
		    document.getElementById("header").style.height = "70px";
		    document.getElementById("header2").style.padding = "20px 40px 0px 40px";
		    document.getElementById("logo1,logo2,EXE_DIV").style.fontSize = "18px";
		  }
		}


	// On Hover function on submit
		// $(".submit").mouseenter(function(){
		// 	$(".submit").css("background-color","#eb9317");
		// 	$(".submit").css("color","#000");
		// });
		// $(".submit").mouseleave(function(){
		// $(".submit").css("background-color","#bd0909");
		// $(".submit").css("color","#fff");
	 //  	});


});