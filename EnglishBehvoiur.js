         var time = 10000; 
            var current=3;
            var total=7;
           var audiocount=1;

             var B=document.getElementById("letterB");
var audio=document.getElementById("audio1");
            var counter=0;
//var intro=document.getElementById("intro");
 
$("#palyicon").click(function(){
    
    
   $("#playing").show();
    $("#alphaicon").show();
    scrollTo(0,700)
    
});


$("#start").click(function() 
                 {
    
   
    $('#alphadiv').css("background-image", "url(images/white.png)");
    
    
    $("#divintro").fadeOut("slow");
    $("#animation").fadeIn("slow");
    $(".animatediv").css("display","block");
    $("#video").css("display","none");
});



function playa()
{
        
   $("#animation").fadeOut("slow");
    $("#div3").fadeIn("slow");
    $("#audio3").trigger("play");
   
}
function playb()
{
        
  $("#animation").fadeOut("slow"); 
    $("#div4").fadeIn("slow");
    $("#audio4").trigger("play");
   
}
function playc()
{
    $("#animation").fadeOut("slow"); 
   
        $("#div5").fadeIn("slow");
    $("#audio5").trigger("play");
}
function playd()
{
   $("#animation").fadeOut("slow"); 
   
        $("#div6").fadeIn("slow");
    $("#audio6").trigger("play");
}
 function playe()
{
   $("#animation").fadeOut("slow"); 
   
        $("#div7").fadeIn("slow");
    $("#audio7").trigger("play");
}
function playf()
{
    $("#animation").fadeOut("slow"); 
   
        $("#div8").fadeIn("slow");
    $("#audio8").trigger("play");
}

 function playg()
{
  $("#animation").fadeOut("slow"); 
   
        $("#div9").fadeIn("slow");
    $("#audio9").trigger("play");
   
}
function playh()
{
  $("#animation").fadeOut("slow"); 
   
        $("#div10").fadeIn("slow");
    $("#audio10").trigger("play");  
   
}
function playi()
{
  $("#animation").fadeOut("slow"); 
   
        $("#div11").fadeIn("slow");
    $("#audio11").trigger("play");
   
   
}
function playj()
{
  $("#animation").fadeOut("slow"); 
   
        $("#div12").fadeIn("slow");
    $("#audio12").trigger("play");
   
   
}
function playk()
{
     $("#animation").fadeOut("slow"); 
   
        $("#div13").fadeIn("slow");
    $("#audio13").trigger("play");
}

function playl()
{
     $("#animation").fadeOut("slow"); 
   
        $("#div14").fadeIn("slow");
    $("#audio14").trigger("play");
}
function playm()
{
     $("#animation").fadeOut("slow"); 
   
        $("#div15").fadeIn("slow");
    $("#audio15").trigger("play");
}

function playn()
{
     $("#animation").fadeOut("slow"); 
   
        $("#div16").fadeIn("slow");
    $("#audio16").trigger("play");
}
function playo()
{
     $("#animation").fadeOut("slow"); 
   
        $("#div17").fadeIn("slow");
    $("#audio17").trigger("play");
}
function playp()
{
     $("#animation").fadeOut("slow"); 
   
        $("#div18").fadeIn("slow");
    $("#audio18").trigger("play");
}
function playq()
{
     $("#animation").fadeOut("slow"); 
   
        $("#div19").fadeIn("slow");
    $("#audio19").trigger("play");
}
function playr()
{
     $("#animation").fadeOut("slow"); 
   
        $("#div20").fadeIn("slow");
    $("#audio20").trigger("play");
}
function plays()
{
     $("#animation").fadeOut("slow"); 
   
        $("#div21").fadeIn("slow");
    $("#audio21").trigger("play");
}
function playt()
{
     $("#animation").fadeOut("slow"); 
   
        $("#div22").fadeIn("slow");
    $("#audio22").trigger("play");
}
function playu()
{
     $("#animation").fadeOut("slow"); 
   
        $("#div23").fadeIn("slow");
    $("#audio23").trigger("play");
}
function playv()
{
     $("#animation").fadeOut("slow"); 
   
        $("#div24").fadeIn("slow");
    $("#audio24").trigger("play");
}
function playw()
{
     $("#animation").fadeOut("slow"); 
   
        $("#div25").fadeIn("slow");
    $("#audio25").trigger("play");
}
function playx()
{
     $("#animation").fadeOut("slow"); 
   
        $("#div26").fadeIn("slow");
    $("#audio26").trigger("play");
}
function playy()
{
     $("#animation").fadeOut("slow"); 
   
        $("#div27").fadeIn("slow");
    $("#audio27").trigger("play");
}
function playz()
{
     $("#animation").fadeOut("slow"); 
   
        $("#div28").fadeIn("slow");
    $("#audio28").trigger("play");
}



$(".back").click(function() 
                 {
    $(this).closest(".divs").hide();
    $(this).closest(".divs").css("display","none");   
   

    $("#animation").fadeIn("slow");
    $("#animation").css("display","block");
});

$("#nextdiv").click(function()
                {
    
     $(this).closest(".divs").hide();
   $(this).closest(".divs").css("display","none");  
    $("#animation").fadeOut("slow"); 
   $("#alphadiv").fadeOut("slow");
    $("#playing").fadeIn("slow");
   $(".cardsdivs").fadeIn("slow");
    $("#playing").css("display","block");
    $(".cardsdivs").css("display","block");
     
   
});

var t;
             var span1;
             var span2;
             var b;
             var r;
              var span3;
             var span4;
             var span5;
            window.addEventListener('load',function()
                                   {
                 b =0;
             t =document.getElementById("p1");
            span1 =document.getElementById("s1");
            span2 =document.getElementById("s2");
            r=document.getElementById("reset");
          span3 =document.getElementById("s3");
                span4=document.getElementById("s4");
                span5=document.getElementById("s5");
                
               
            });
                                     
           
             
 function allowDrop(ev) {
  ev.preventDefault();
}
           

function draga(ev) {
  ev.dataTransfer.setData("apple", ev.target.id);
  ev.dataTransfer.setData("cat", ev.target.id);
 ev.dataTransfer.setData("yellow", ev.target.id);
 ev.dataTransfer.setData("elephant", ev.target.id);
 ev.dataTransfer.setData("sun", ev.target.id);
    
}


function dropa(ev) {
  ev.preventDefault();
  var data1 = ev.dataTransfer.getData("apple");
  
  ev.target.appendChild(document.getElementById(data1));

    if (ev.dataTransfer.getData('apple') == 'drag1'){ 
        span2.innerHTML="&#10004";
       span2.style.color="green";
        b++;
         if(b==5)
                    {
                        congrates();
                    }
       // t.innerText=b;
  }
  else{
       span2.style.color="red";
       span2.innerHTML="&#10006";
  }
  
 
}
             function dropc(ev) {
  ev.preventDefault();
  var data1 = ev.dataTransfer.getData("cat");
                
  ev.target.appendChild(document.getElementById(data1));
                
            if (ev.dataTransfer.getData('cat') == 'drag2'){ 
               span1.innerHTML="&#10004";
                span1.style.color="green";
                      b++;
                if(b==5)
                    {
                        congrates();
                    }
                      // t.innerText=b;
  }
  else{
        span1.style.color="red";
        span1.innerHTML="&#10006";
  }
                
}
              function dropy(ev) {
  ev.preventDefault();
  var data1 = ev.dataTransfer.getData("yellow");
                 
  ev.target.appendChild(document.getElementById(data1));
            if (ev.dataTransfer.getData('yellow') == 'drag3'){ 
                   span3.style.color="green";
                   span3.innerHTML="&#10004";
                 
                      b++;
                 if(b==5)
                    {
                        congrates();
                    }
                       //t.innerText=b;
  }
  else{
         span3.style.color="red";
        span3.innerHTML="&#10006";
   
  }
}
function drope(ev) {
  ev.preventDefault();
  var data1 = ev.dataTransfer.getData("elephant");
                 
  ev.target.appendChild(document.getElementById(data1));
            if (ev.dataTransfer.getData('elephant') == 'drag4'){ 
                   span4.style.color="green";
                   span4.innerHTML="&#10004";
                 
                      b++;
                 if(b==5)
                    {
                        congrates();
                    }
                       //t.innerText=b;
  }
  else{
         span4.style.color="red";
        span4.innerHTML="&#10006";
   
  }
}
function drops(ev) {
  ev.preventDefault();
  var data1 = ev.dataTransfer.getData("sun");
                 
  ev.target.appendChild(document.getElementById(data1));
            if (ev.dataTransfer.getData('sun') == 'drag5'){ 
                   span5.style.color="green";
                   span5.innerHTML="&#10004";
                 
                      b++;
                 if(b==5)
                    {
                        congrates();
                    }
                      // t.innerText=b;
  }
  else{
         span5.style.color="red";
        span5.innerHTML="&#10006";
   
  }
}
 function drop(ev) {
  ev.preventDefault();
  var data1 = ev.dataTransfer.getData("cat");
  var data2 = ev.dataTransfer.getData("apple");
  var data3 = ev.dataTransfer.getData("yellow");
  var data4 = ev.dataTransfer.getData("elephant");
  var data4 = ev.dataTransfer.getData("sun");
                 
  ev.target.appendChild(document.getElementById(data1));
  ev.target.appendChild(document.getElementById(data2));
  ev.target.appendChild(document.getElementById(data3));
  ev.target.appendChild(document.getElementById(data4));
  ev.target.appendChild(document.getElementById(data5));
            
}
function checkdrop(ev)
{
     if (ev.dataTransfer.getData('cat') == 'drag2'){ 
               span1.innerHTML="&#10004";
                span1.style.color="green";
                      b++;
                      // t.innerText=b;
  }
  else{
        span1.style.color="red";
        span1.innerHTML="&#10006";
  }
}
function congrates()
{
                 
swal({title: "Good job", type: 
"success"}).then(function(){ 
   location.reload();
   }
);

}





 


