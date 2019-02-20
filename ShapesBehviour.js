window.addEventListener('load',function(){

var shapesdiv=document.getElementById("shapesdiv")
var trinagle=document.getElementById("triangle-up");
var square=document.getElementById("square");
    
var rectangle=document.getElementById("rectangle");
var circle=document.getElementById("circle") 
var oval=document.getElementById("oval")
var paralle=document.getElementById("parallelogram")
var hexagon=document.getElementById("hexagon")
var pentagon=document.getElementById("pentagon")

var colorhead=document.getElementById("colorhead");
var colordive=document.getElementById("colorsdiv")    
var showsquarebtn=document.getElementById("showsquare");    
var whitesquare=document.getElementById("whitesquare");
var showrectbtn=document.getElementById("showrect");
var whiterect=document.getElementById("whiterect");
var showcirclebtn=document.getElementById("showcircle")
var whitesircle=document.getElementById("whitesircle")
var showovalbtn=document.getElementById("showoval")
var whiteoval=document.getElementById("whiteoval")
var showtrianbtn=document.getElementById("showtrian")
var whitetriangle=document.getElementById("whitetriangle")
var showparallbtn=document.getElementById("showparall")
var whiteparall=document.getElementById("whiteparallelogram")

var showhexagonbtn=document.getElementById("showhexagon")
var whitehexagon=document.getElementById("whitehexagon")
var whitepentagon=document.getElementById("whitepentagon")
var shapeid=document.getElementById("shapeid")

var showpentagonbtn=document.getElementById("showpentagon")






////////////play songs////////////

square.addEventListener('click',function(){
    
        
    shapesdiv.style.display="none"
    
    document.getElementById("vidoes").style.display="block";
    document.getElementById("sqarevid").style.display='block';

    document.getElementById("sqarevid").play();  
  
    
})
 
trinagle.addEventListener("click",function(){
    shapesdiv.style.display="none"
    
    document.getElementById("vidoes").style.display="block";
    document.getElementById("triangvid").style.display='block';

    document.getElementById("triangvid").play();
    
    
})    
rectangle.addEventListener('click',function(){
  shapesdiv.style.display="none"
    
    document.getElementById("vidoes").style.display="block";
    document.getElementById("rectgvid").style.display='block';

    document.getElementById("rectgvid").play();  
    
    
    
})    
circle.addEventListener("click",function(){
    
    shapesdiv.style.display="none"
    
    document.getElementById("vidoes").style.display="block";
    document.getElementById("circlevid").style.display='block';

    document.getElementById("circlevid").play();  
    
    
})    
oval.addEventListener('click',function(){
   shapesdiv.style.display="none"
    
    document.getElementById("vidoes").style.display="block";
    document.getElementById("ovalvid").style.display='block';

    document.getElementById("ovalvid").play();  
    
    
    
})    
 paralle.addEventListener('click',function(){
       
    shapesdiv.style.display="none"
    
    document.getElementById("vidoes").style.display="block";
    document.getElementById("parallvid").style.display='block';

    document.getElementById("parallvid").play();  
 })   
 hexagon.addEventListener('click',function(){
     
       
    shapesdiv.style.display="none"
    
    document.getElementById("vidoes").style.display="block";
    document.getElementById("hexagvid").style.display='block';

    document.getElementById("hexagvid").play();   
     
 })   
    
pentagon.addEventListener("click",function(){
    shapesdiv.style.display="none"
    
    document.getElementById("vidoes").style.display="block";
    document.getElementById("pebntavid").style.display='block';

    document.getElementById("pebntavid").play(); 
    
    
    
})    
    
    
    
    
    
    ////back btn////
 document.getElementById("bakbtn").addEventListener('click',function(){
     shapesdiv.style.display="block"
    
    document.getElementById("vidoes").style.display="none"
    
    var x=document.getElementsByTagName('video')

     for(var i=0;i<x.length;i++)
         {
         x[i].currentTime=x[i].duration;
        x[i].style.display="none";     
             
         }
     
     
 })   
    
    
    
    
    
    
    
    ///////show white shapes/////////////
    
  showsquarebtn.addEventListener("click",function(){
       whiterect.style.display="none"
        whitesircle.style.display="none"
       whiteoval.style.display="none"
    whitetriangle.style.display="none"
    whiteparall.style.display="none"
     whitehexagon.style.display='none'
   whitepentagon.style.display='none';  

      whitesquare.style.display="block";
      shapeid.value="whitesquare";
      
   colorDiv =document.getElementById("whitesquare");

      
  })  
 showrectbtn.addEventListener("click",function(){
             whitesircle.style.display="none"
       whiteoval.style.display="none"
    whitetriangle.style.display="none"
    whiteparall.style.display="none"
     whitehexagon.style.display='none'
   whitepentagon.style.display='none';  

      whitesquare.style.display="none"
     whiterect.style.display="block"
        colorDiv =document.getElementById("whiterect");

 })  
    showcirclebtn.addEventListener("click",function(){
         whiterect.style.display="none"
       whiteoval.style.display="none"
    whitetriangle.style.display="none"
    whiteparall.style.display="none"
     whitehexagon.style.display='none'
   whitepentagon.style.display='none';  

      whitesquare.style.display="none"

        whitesircle.style.display="block"
     colorDiv =document.getElementById("whitesircle");

    })
   showovalbtn.addEventListener('click',function(){
         whiterect.style.display="none"
             whitesquare.style.display="none"
    whitetriangle.style.display="none"
    whiteparall.style.display="none"
     whitehexagon.style.display='none'
   whitepentagon.style.display='none';  

        whitesircle.style.display="none"
       whiteoval.style.display="block"
   }) 
showtrianbtn.addEventListener('click',function(){
    whiterect.style.display="none"
        whitesircle.style.display="none"
       whiteoval.style.display="none"
          whitesquare.style.display="none"
    whiteparall.style.display="none"
     whitehexagon.style.display='none'
   whitepentagon.style.display='none';  

    whitetriangle.style.display="block"
    
})    
showparallbtn.addEventListener('click',function(){
    
    whiterect.style.display="none"
        whitesircle.style.display="none"
       whiteoval.style.display="none"
          whitesquare.style.display="none"
    whitetriangle.style.display="none"
         whitehexagon.style.display='none'
   whitepentagon.style.display='none';  

    whiteparall.style.display="block"
})    

 showhexagonbtn.addEventListener('click',function(){
     
     whiterect.style.display="none"
        whitesircle.style.display="none"
       whiteoval.style.display="none"
          whitesquare.style.display="none"
    whitetriangle.style.display="none"
         whiteparall.style.display="none"
   whitepentagon.style.display='none';  

     whitehexagon.style.display='block'
 })   
 showpentagonbtn.addEventListener('click',function(){
      
     whiterect.style.display="none"
        whitesircle.style.display="none"
       whiteoval.style.display="none"
          whitesquare.style.display="none"
    whitetriangle.style.display="none"
         whiteparall.style.display="none"
          whitehexagon.style.display='none'

   whitepentagon.style.display='block';  
 })
    
    
    
    
 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})


