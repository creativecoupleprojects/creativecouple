
$( document ).ready(function() {
    console.log( "document loaded" );
});

$( window ).on( "load", function() {
    console.log( "window loaded" );
});

           var homeIcon = new Vivus('home-icon', {
                type: 'scenario',
                duration: 100,
              start: "manual"
                }
                );  
            var workIcon = new Vivus('work-icon', {
                    type: 'scenario',
                    duration: 100,
                  start: "manual"
                    }
                    );  
            var cultureIcon = new Vivus('culture-icon', {
                        type: 'scenario',
                        duration: 100,
                      start: "manual"
                        }
                        );  
            var approachIcon = new Vivus('approach-icon', {
                            type: 'scenario',
                            duration: 100,
                          start: "manual"
                            }
                            );  
            var servicesIcon = new Vivus('services-icon', {
                                type: 'scenario',
                                duration: 100,
                              start: "manual"
                                }
                                );  
             var infographicsIcon = new Vivus('infographics-icon', {
                                    type: 'scenario',
                                    duration: 100,
                                  start: "manual"
                                    }
                                    );  
             var clientsIcon = new Vivus('clients-icon', {
                                        type: 'scenario',
                                        duration: 100,
                                      start: "manual"
                                        }
                                        );  
            var contactIcon = new Vivus('contact-icon', {
                                            type: 'scenario',
                                            duration: 100,
                                          start: "manual"
                                            }
                                            );  
            $("#home-link").hover(function(){
                                                homeIcon.stop().reset().play(2);
                                                },function(){
                                                  
                                                 homeIcon.play(-2);
                                                 
                                                });
            $("#work-link").hover(function(){
                        workIcon.stop().reset().play(2);
                        },function(){
                          
                         workIcon.play(-2);
                         
                        });
            $("#culture-link").hover(function(){
                            cultureIcon.stop().reset().play(2);
                            },function(){
                              
                             cultureIcon.play(-2);
                             
                            });
            $("#approach-link").hover(function(){
                                approachIcon.stop().reset().play(2);
                                },function(){
                                  
                                 approachIcon.play(-2);
                                 
                                });
            $("#services-link").hover(function(){
                                    servicesIcon.stop().reset().play(2);
                                    },function(){
                                      
                                     servicesIcon.play(-2);
                                     
                                    });
            $("#infographics-link").hover(function(){
                                        infographicsIcon.stop().reset().play(2);
                                        },function(){
                                          
                                         infographicsIcon.play(-2);
                                         
                                        });
            $("#clients-link").hover(function(){
                                            clientsIcon.stop().reset().play(2);
                                            },function(){
                                              
                                             clientsIcon.play(-2);
                                             
                                            });
            $("#contact-link").hover(function(){
                                                contactIcon.stop().reset().play(2);
                                                },function(){
                                                  
                                                 contactIcon.play(-2);
                                                 
                                                });
 



var clicks = 0;
 $('.phone-menu-button').click(function(){
                                       
 var menu = $('.phone-menu');
                                    
 if(clicks==0){
                                    
$('.phone-links').css("display", "flex");
$('.phone-links').css("opacity", "1");
menu.css("transform", "translateX(-50%) scale(1)");
menu.css("opacity", "1");
$('#phone-plus').css("transform", "rotateZ(0)");
 clicks++;                                  
} else { 
  $('.phone-links').css("opacity", "0");
  $('.phone-links').css("display", "none");
 $('.phone-menu').css("transform", "translateX(-50%) scale(0.1)");
  menu.css("opacity", "0");
 $('#phone-plus').css("transform", "rotateZ(45deg)");
  clicks--;
} });







 