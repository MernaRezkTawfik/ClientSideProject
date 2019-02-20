$(document).ready(function(){
    $(back3).hide();
    
    $(add).hide();
  $(num2).hide();
$(num3).hide();
    $(num4).hide();
    $(num5).hide();
   $(back).hide();
    $(num6).hide();
    $(num7).hide();
   
    $(num8).hide();
    $(num9).hide();
   
    $(num10).hide();
    
   $(container).hide();
$(number).hide();
    
    $(test).hide();
    $(score).hide();
    
    $(table).hide();
    $(back1).hide();
     $(container).hide();
   $(main).click(function(){
      //$(cen).fadeIn(200);
       $(cen).slideDown('slow');
       $(alpha).show('slow');
       $(colo).show('slow');
       $(num).show('slow');
        $(num2).hide();
       $(back).hide();
          $(back3).hide();
$(num3).hide();
    $(num4).hide();
    $(num5).hide();
       $(num6).hide();
    $(num7).hide();
    $(num8).hide();
       $(num9).hide();
    $(num10).hide();
    
   
        $('#1').get(0).pause();
          $('#2').get(0).pause();
          $('#3').get(0).pause();
          $('#4').get(0).pause();
       $(number).hide('slow');
     $(table).hide();
        $(container).hide();
    
        $(test).hide();
         $(score).hide();
   });
    
    $(alpha).click(function(){
        $(colo).hide('slow');
        $(num).hide('slow');
        $(alpha).hide('slow');
         $(number).hide('slow');
         $(test).hide();
         $(container).show();
         $(table).hide();
         $(num2).hide();
          $(back3).hide();
       $(num6).hide();
    $(num7).hide();
    $(num8).hide();
       $(num9).hide();
        $(back1).hide();
    $(num10).hide();
$(num3).hide();
    $(num4).hide();
    $(num5).hide();
   $(back).show();
    });  
     $(colo).click(function(){
        $(colo).hide('slow');
        $(num).hide('slow');
        $(alpha).hide('slow');
         $(number).hide('slow');
          $(test).hide();
            $(back3).hide();
          $(num2).hide();
         $(back1).hide();
         $(back).show();
       $(num6).hide();
    $(num7).hide();
    $(num8).hide();
       $(num9).hide();
    $(num10).hide();
$(num3).hide();
    $(num4).hide();
    $(num5).hide();
   
          $(table).show();
          $(container).hide();
    }); 
$(add1).click(function(){
   $(add1).hide();
    $(back1).hide();
    $(add).show();
     $(number).hide('slow');
    $(sub1).hide();
    $(mult1).hide();

    $(num).show();
    $(score).show();
     $(table).hide();
       $(back3).show();
     $(container).hide();
     $(back).hide();
});
    $(sub1).click(function(){
   $(sub1).hide();
        $(back3).show();
    $(add).show();
         $(add1).hide();
    $(sub1).hide();
    $(mult1).hide();
         $(table).hide();
    
        $(back1).hide();
        $(num).show();
         $(number).hide('slow');
          $(score).show();
        $(back).hide();
    
});
    $(mult1).click(function(){
   $(add1).hide();
    $(add).show();
    $(sub1).hide();
    $(mult1).hide();
    
        $(num).show();
        $(container).hide();
          $(score).show();
         $(number).hide('slow');
         $(back).hide();
        $(back1).hide();
        $(back3).show();
   
});
  
    $(back3).click(function(){
         $(colo).hide('slow');
        $(num).hide('slow');
        $(alpha).hide('slow');
        $(add).hide();
        $(number).hide('slow');
         $(test).show('slow');
         $(add1).show();
          $(back).show();
          $(num2).hide();
$(num3).hide();
    $(num4).hide();
    $(num5).hide();
  
       $(num6).hide();
    $(num7).hide();
    $(num8).hide();
       $(num9).hide();
    $(num10).hide();
    $(sub1).show();
    $(mult1).show();
    
         
    $(score).hide();
    });
     $(num).click(function(){
        $(colo).hide('slow');
        $(num).hide('slow');
        $(alpha).hide('slow');
        $(add).hide();
        $(number).hide('slow');
         $(test).show('slow');
         $(add1).show();
          $(back).show();
          $(num2).hide();
         $(back1).show();
$(num3).hide();
    $(num4).hide();
    $(num5).hide();
  
       $(num6).hide();
    $(num7).hide();
    $(num8).hide();
       $(num9).hide();
    $(num10).hide();
    $(sub1).show();
    $(mult1).show();
    
         
    $(score).hide();
    }); 
    
 $('#container > div:gt(0)').hide();
    
      showdiv();
         function showdiv(){
              $('#container > div:first').fadeOut(2000).next().fadeIn(1000).end().appendTo('#container');
         }
         
    $('#container > div:first').hover(function(){
       
        
         
    },function(){ var x= setInterval(function(){
       showdiv
    },3000);});
     
    
    var slides=document.getElementsByClassName('mySlides');

     $('.prev').click(function(index){
         $('#1').get(0).pause();
          $('#2').get(0).pause();
          $('#3').get(0).pause();
          $('#4').get(0).pause();
        showdiv();
  });
    
  $('.next').click(function(){
      $('#1').get(0).pause();
          $('#2').get(0).pause();
          $('#3').get(0).pause();
          $('#4').get(0).pause();
   showdiv();   
  });
   
     
    
});

window.addEventListener('load',function(){
  
 count =0;
   
    prev=document.getElementsByClassName('prev');
    next=document.getElementsByClassName('next');
   
    
 $(back).click(function(){
      $(cen).slideDown('slow');
       $(alpha).show('slow');
       $(colo).show('slow');
       $(num).show('slow');
        $(num2).hide();
     $(back).hide();
$(num3).hide();
    $(num4).hide();
    $(num5).hide();
     
   $(num6).hide();
     $(num7).hide();
     $(num8).hide();
     $(num9).hide();
     $(num10).hide();
        $('#1').get(0).pause();
          $('#2').get(0).pause();
          $('#3').get(0).pause();
          $('#4').get(0).pause();
       $(number).hide('slow');
     $(table).hide();
        $(container).hide();
    
        $(test).hide();
         $(score).hide();
     
 });
    
$(img1).click(function(){
   $(table).hide();
    $(number).show('slow');
    $(back1).show();
    $(back).hide();
});
   
    $(img2).click(function(){
   $(table).hide();
    $('#num2').show('slow');
         $(back1).show();
        $(back).hide();
        
});
    
    $(img3).click(function(){
  $(table).hide();
        $(back).hide();
     $('#num3').show('slow');
         $(back1).show();
});
    
    $(img4).click(function(){
   $(table).hide();
        $(back).hide();
     $('#num4').show('slow');
         $(back1).show();
});
   
    $(img5).click(function(){
         $(table).hide();
        $(back).hide();
    $('#num5').show('slow');
         $(back1).show();
});
   
    $(img6).click(function(){
        $(table).hide();
        $(back).hide();
     $('#num6').show('slow');
         $(back1).show();
        $(back).hide();
});
     $(img7).click(function(){
        $(table).hide();
     $('#num7').show('slow');
         $(back).hide();
          $(back1).show();
});
     $(img8).click(function(){
        $(table).hide();
         $(back).hide();
     $('#num8').show('slow');
          $(back1).show();
});
     $(img9).click(function(){
        $(table).hide();
         $(back).hide();
     $('#num9').show('slow');
          $(back1).show();
         $(back).hide();
});
     $(img10).click(function(){
        $(table).hide();
         $(back).hide();
     $('#num10').show('slow');
          $(back1).show();
         $(back).hide();
});
    
    
    $(back1).click(function(){
        $(colo).hide('slow');
        $(num).hide('slow');
        $(alpha).hide('slow');
         $(number).hide('slow');
          $(test).hide();
          $(num2).hide();
         $(back).show();
       $(num6).hide();
    $(num7).hide();
    $(num8).hide();
       $(num9).hide();
    $(num10).hide();
$(num3).hide();
    $(num4).hide();
    $(num5).hide();
   
          $(table).show();
          $(container).hide();
    });
     var first1=document.getElementById('first');
    var second1=document.getElementById('second');
    var first=document.getElementById('first1');
    var second=document.getElementById('second1');
     var res=document.getElementById('resu');
    
    
    var mark=document.getElementById('mark');
    var score=document.getElementById('sco');
    var tr=document.getElementById('true');
    var ful=document.getElementById('false');
    //var x=first.innerText; 
    //var y=second.innerText;
     score.innerText=0;
     tr.innerText=0;
     ful.innerText=0;
     function checkimage(){
         switch(first1.innerText){
                 case '1':
                            first.src='images/one.png';
                     break;
                 case '2':
                            first.src='images/two.png';
                     break;
                 case '3':
                            first.src='images/three.png';
                     break;
                 case '4':
                first.src='images/four.png';
                break;
                 case '5':
                first.src='images/five.png';
                break; 
                 case '6':
                first.src='images/sex.png';
                 break;
                 case '7':
                first.src='images/seven.png';
                 break;
                 case '8':
                first.src='images/eight.png';
                 break;
                 case '9':
                first.src='images/nine.png';
                break;
                 case '10':
                
                first.src='images/ten.png';
                break;
            
                     }
             
             
        
          
       
    switch(second1.innerText)
                     {
                 case '1':
                            second.src='images/one.png';
                    break;
                 case '2':
                            second.src='images/two.png';
                    break;
                          case '3':
                            second.src='images/three.png'; 
                    break;
                 case '4':
                second.src='images/four.png';
                    break;
                 case '5':
               second.src='images/five.png';
                    break;
                 case '6':
                second.src='images/sex.png';
                    break;
                 case '7':
                second.src='images/seven.png';
                    break;
                 case '8':
               second.src='images/eight.png';
                    break
                 case '9':
                second.src='images/nine.png';
                    break;
                 case '10':
                second.src='images/ten.png';
                    break;
             }
     }
    
    add1.addEventListener('click',function(){
       first1.innerText=Math.floor(Math.random()*10+1); 
        second1.innerText=Math.floor(Math.random()*10+1);
        checkimage();
        score.innerText=0;
        mark.innerText='+';
     tr.innerText=0;
     ful.innerText=0;
        $(num).hide();
   
   
    },false);
    
  function showmessage(){
        var y=document.getElementById('snackbar');
        y.className='show';
        setTimeout(function(){y.className=y.className.replace('show','');},1000);
    };
    function showwrong(){
         var b=document.getElementById('snackbar1');
        b.className='show';
        setTimeout(function(){b.className=b.className.replace('show','');},1000);
    };
    
        
            res.addEventListener('keypress',function(e){
                
                if(e.keyCode==13){
                    
                switch( mark.innerText){
                    case '+':
                       
         
             
             
        if((parseInt(first1.innerText)+parseInt(second1.innerText))==parseInt(res.value)){
             score.innerText++;
            showmessage();
            tr.innerText++;
            
             first1.innerText=Math.floor(Math.random()*10+1);
            //var x=first1.innerText;
            second1.innerText=Math.floor(Math.random()*10+1);
             //var y=second1.innerText;
             checkimage();
            
            
        
           
        
        }
           
         else {
             
            
            showwrong();
             ful.innerText++;
          first1.innerText=Math.floor(Math.random()*10+1); 
             //var x=first1.innerText;
             second1.innerText=Math.floor(Math.random()*10+1);
              //var y=second1.innerText;
             
            checkimage();
             score.innerText++;
        }
             if(score.innerText==10){
                 //confirm('you got '+tr.innerText+'correct and '+ful.innerText+' false of  10');
                 
                 swal({
  title: 'you got '+tr.innerText +'correct and'+ ful.innerText+ 'false of  10',
  
  
  //showCancelButton: true,
  confirmButtonColor: '#DD6B55',
  confirmButtonText: 'ok!',
  
});        
                 
                 
                 
               score.innerText=0;
                tr.innerText=0;
                ful.innerText=0;
            }
            
    
             
             
    break;
                case '-':
                     
                 if((parseInt(first1.innerText)-parseInt(second1.innerText))==parseInt(res.value)){
             
          
            score.innerText++;
           
             showmessage();
             tr.innerText++;
             first1.innerText=Math.floor(Math.random()*10+1); 
            second1.innerText=Math.floor(Math.random()*10+1);
            checkimage();
                
        }
            
         else{
            
            showwrong();
             ful.innerText++;
              first1.innerText=Math.floor(Math.random()*10+1); 
            second1.innerText=Math.floor(Math.random()*10+1);
            
      
              checkimage();
              score.innerText++;
        }
            
             if(score.innerText==10){
               swal({
  title: 'you got '+tr.innerText +'correct and'+ ful.innerText+ 'false of  10',
  
  
  //showCancelButton: true,
  confirmButtonColor: '#DD6B55',
  confirmButtonText: 'ok!',
  
});
                 
                 
                 
               score.innerText=0;
                tr.innerText=0;
                ful.innerText=0;
            }
    
   break;
    case '*':
                        
    if((parseInt(first1.innerText)*parseInt(second1.innerText))==parseInt(res.value)){
             score.innerText++;
            showmessage();
            tr.innerText++;
            
             first1.innerText=Math.floor(Math.random()*10+1);
            //var x=first1.innerText;
            second1.innerText=Math.floor(Math.random()*10+1);
             //var y=second1.innerText;
             checkimage();
            
            
        
           
        
        }
           
         else {
             
            
            showwrong();
             ful.innerText++;
          first1.innerText=Math.floor(Math.random()*10+1); 
             //var x=first1.innerText;
             second1.innerText=Math.floor(Math.random()*10+1);
              //var y=second1.innerText;
             
            checkimage();
             score.innerText++;
        }
             if(score.innerText==10){
                 //confirm('you got '+tr.innerText+'correct and '+ful.innerText+' false of  10');
                 
                 swal({
  title: 'you got '+tr.innerText +'correct and'+ ful.innerText+ 'false of  10',
  
  
  //showCancelButton: true,
  confirmButtonColor: '#DD6B55',
  confirmButtonText: 'ok!',
  
});
                 
                 
                 
                 
               score.innerText=0;
                tr.innerText=0;
                ful.innerText=0;
            }
            
    
             
             break;

        }

      
   
                                      
            
}        
            });
      sub1.addEventListener('click',function(){
        
      first1.innerText=Math.floor(Math.random()*10+1); 
      second1.innerText=Math.floor(Math.random()*10+1);
          checkimage();
        mark.innerText='-';
           score.innerText=0;
     tr.innerText=0;
     ful.innerText=0;
          $(num).hide();
        
    });
   
    
        
       
    mult1.addEventListener('click',function(){
         
     first1.innerText=Math.floor(Math.random()*10+1); 
     second1.innerText=Math.floor(Math.random()*10+1);
        checkimage();
        mark.innerText='*';
         score.innerText=0;
     tr.innerText=0;
     ful.innerText=0;
       
   $(num).hide();
   
    });
    
    
    
    
      
       
    
});
