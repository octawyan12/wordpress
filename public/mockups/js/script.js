/**
 * @author sanduleasaadrian@gmail.com
 **/

$(document).ready(function() {
    clickActive('#nav');
    keyboardNavigation('#nav');
	 $(".page-content").hover( function(e){
    	$(this).children().animate({
			opacity: 0.25
			}, 10, function() {
				$(this).hover(function(e){
					$(e.currentTarget).animate({
						opacity:1
					},50,function(){
						// Animation complete.						
						});
					},  function(){
							$(this).animate({
								opacity:0.25
							},10,function(){
								// Animation complete.
							});	
					});
			});
		}, function(){
    	$(this).children().animate({
			opacity: 1
			}, 10, function() {
			// Animation complete.
			});
		});   
});

  // function getURLParameter(name) {
    // return decodeURI((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]);
// }

function clickActive(object) {
	$(object+" li a").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500, easing: "linear"
        });
        var target = $(this).attr("href");
        var curent = $("ul" + object +  " li a.active").attr("href");
        $('ul' + object + ' li a.active').removeClass("active");
        $(this).addClass("active");
        $(curent).children().delay(500).fadeOut();
        $(target).children().delay(550).fadeIn();
        return false;
    });
	
}

function keyboardNavigation(object) {
	$(document.documentElement).keyup(function (event) {  	 
	  if (event.keyCode == 38) {
		  	if($("ul" + object +  " li a.active").parent().index() >= 1){
		  	$("ul"  + object +  " li a.active").parent().prev().find('a').click();
			 var name = $('ul' + object +   ' li a.active').attr("href");
			$(name).children().fadeIn();            
		  	}	  	
  		} else if (event.keyCode == 40) {
		  	if($("ul" + object +  " li").size() - 1 === $("ul" + object +  " li a.active").parent().index()){	  		
		  	}
		  	else{
			  	$('ul' + object +  ' li a.active').parent().next().find('a').click();
			  	$(name).children().fadeIn();	
		  	}  	
	  }
  });
}
 

function thumbActive(id){
                if(issue_changing || !navi_open)return;
                for(var o in thumb_wraps){
                    if(o > 0){
                        var thumb   = thumb_wraps[o].inner;
                            opacity = 1,
                            css3 = {tx:0,ty:0,tz:0};
                        var scale = 1;
                        if(o == id){
                            opacity = 1;
                            css3.tz = 100;
                            scale = 1.1;
                        }else if(id == 0){
                            opacity = 1;
                        }else{
                            opacity = .5;
                            css3.tz = -200;
                            scale = 0.9;
                        }
                        if(modCSSTransforms && modCSSTransitions){
                            thumb.css({opacity:opacity});
                            if(UA.isIE){
                                thumb.css(css3_scale(scale));
                            }else{
                                thumb.css(css3_XYZ(css3.tx,css3.ty,css3.tz));    
                            }
                        }else{
                            thumb.stop().animate({opacity:opacity},600,'easeOutQuint');
                        }
                    }
                }
            }
