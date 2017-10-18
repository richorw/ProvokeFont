	$(document).ready(function(){
		//Grid Flip
		// set up hover panels
		// although this can be done without JavaScript, we've attached these events
		// because it causes the hover to be triggered when the element is tapped on a touch device
		$('.hover').hover(function(){
			$(this).addClass('flip');
		},function(){
			$(this).removeClass('flip');
		});

		//SlideShow
		var slideIndex = 0;
		showSlides();

		function showSlides() {
		    var i;
		    var slides = document.getElementsByClassName("sample-img");
		    var dots = document.getElementsByClassName("dot");
		    for (i = 0; i < slides.length; i++) {
		       slides[i].style.display = "none";  
		    }
		    slideIndex++;
		    if (slideIndex > slides.length) {slideIndex = 1}    
		    for (i = 0; i < dots.length; i++) {
		        dots[i].className = dots[i].className.replace(" active", "");
		    }
		    slides[slideIndex-1].style.display = "block";  
		    dots[slideIndex-1].className += " active";
		    setTimeout(showSlides, 3000); // Change image every 2 seconds
		}

		//tryout
		$( ".selector-size" )
		  .change(function () {
		    $( ".selector-size option:selected" ).each(function() {
		      var textsize = $(this).text();
		      $( '.tryout-text').css( "font-size", textsize );
		    });
		  })
		.change();	

		var candy = [
		"Provocative Materials for Thought",
		"a platform for a new photographic expression",
		"A quick brown fox jumps over a lazy dog",
		"IN LENS WE MEET"
		];
		var n = Math.floor(Math.random() * candy.length + 1)-1; 
		$(".tryout-text").text(candy[n]);	
		});

//autofocus
		$(window).on("load", function() {
  		$(".tryout-text").focus();
		});

//tryout 



