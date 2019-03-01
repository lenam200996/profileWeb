function onload(){
    setTimeout(function(){
        $('.container').css('opacity','1');
},200);
} 

function changeMenu(idname){
    //tam thoi
    $('#homemenu').removeClass('active');
    $('#hobbymenu').removeClass('active');
    $('#aboutmenu').removeClass('active');
    $('#contactmenu').removeClass('active');
    $('#'+idname).addClass('active');
}
function moveUpAbout(idname){
   //-----change menu
   changeMenu(idname);
   //-----set title
    $('title').text("About");
    //-----
    
   if($('.job').css("opacity") === '1'){
    $('#nametext').css("transform","translateY(-"+( $('#nametext').outerWidth()-(screen.height-130)*0.15)+"px)");
    
    $('.job').css("padding-left","0%");
    $('.job').css("opacity","0");
   
   

    $('.about').css("transition-delay","1s");
    $('.about').css("transform","translateY(-"+( $('#nametext').outerWidth()-(screen.height-130)*0.08)+"px)");
    $('.about').css("animation","about-ani 5s forwards");

   
   
    //--------------------
    setTimeout(function(){
    var elem = document.getElementById("myBarJava"); 
    var width = 1;
    var id = setInterval(frame, 15);
    function frame() {
        if (width >= 70) {
        clearInterval(id);
        } else {
        width++; 
        elem.style.width = width + '%'; 
        }
    }
},1500);
//---
setTimeout(function(){
    var elem = document.getElementById("myBarPHP"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 80) {
        clearInterval(id);
        } else {
        width++; 
        elem.style.width = width + '%'; 
        }
    }
},2000);
//---
setTimeout(function(){
    var elem = document.getElementById("myBarCShape"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 40) {
        clearInterval(id);
        } else {
        width++; 
        elem.style.width = width + '%'; 
        }
    }
},2000);
//---
setTimeout(function(){
    var elem = document.getElementById("myBarJavascript"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 90) {
        clearInterval(id);
        } else {
        width++; 
        elem.style.width = width + '%'; 
        }
    }
},2000);

setTimeout(function(){
    var elem = document.getElementById("myBarmobile"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 50) {
        clearInterval(id);
        } else {
        width++; 
        elem.style.width = width + '%'; 
        }
    }
},2000);
document.getElementById("nametext").innerHTML = "ABOUT ME";
    }else{
        if( $('.hobby').css("opacity") != "0"){
            $('.hobby').css("transition-delay","0s");
            $('.hobby').css("transform","translateY(0px)");
            $('.hobby').css("animation","fade 1s forwards");
        }
   
    //----------
    if( $('.contactdiv').css("opacity") != "0"){
        $('.contactdiv').css("transition-delay","0s");
        $('.contactdiv').css("transform","translateY(0px)");
        $('.contactdiv').css("animation","fade 1s forwards");
    }
   
  
    //-------
    $('.about').css("transition-delay","1s");
    $('.about').css("transform","translateY(-"+( move-(screen.height-130)*0.08)+"px)");
    $('.about').css("animation","about-ani 5s forwards");
    
     //--------------------
     setTimeout(function(){
    var elem = document.getElementById("myBarJava"); 
    var width = 1;
    var id = setInterval(frame, 15);
    function frame() {
        if (width >= 70) {
        clearInterval(id);
        } else {
        width++; 
        elem.style.width = width + '%'; 
        }
    }
},1500);
//---
setTimeout(function(){
    var elem = document.getElementById("myBarPHP"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 80) {
        clearInterval(id);
        } else {
        width++; 
        elem.style.width = width + '%'; 
        }
    }
},2000);
//---
setTimeout(function(){
    var elem = document.getElementById("myBarCShape"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 40) {
        clearInterval(id);
        } else {
        width++; 
        elem.style.width = width + '%'; 
        }
    }
},2000);
//---
setTimeout(function(){
    var elem = document.getElementById("myBarJavascript"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 90) {
        clearInterval(id);
        } else {
        width++; 
        elem.style.width = width + '%'; 
        }
    }
},2000);
    document.getElementById("nametext").innerHTML = "ABOUT ME";
    }

}
//-----------------------------
function moveUpHobby(idname){
//-----change menu
changeMenu(idname);
//-----set title
$('title').text("Hobby");
//-----if
if($('.job').css("opacity") === '1'){
    $('#nametext').css("transform","translateY(-"+(move-(screen.height-130)*0.15)+"px)");
    
    $('.job').css("padding-left","0%");
    $('.job').css("opacity","0");
   
    //$('.icon').css("transform","translateY(50px)");
    //$('.icon').css("opacity","0");
    //$('#follow').css("transform","translateY(50px)");
   // $('#follow').css("opacity","0");
    $('.hobby').css("transition-delay","1s");
    $('.hobby').css("transform","translateY(-"+(move-(screen.height-130)*0.12)+"px)");
    $('.hobby').css("animation","about-ani 5s forwards");

    $('#tr1').css("animation","ani-tr1 2s ease 1s forwards");
    $('#tr2').css("animation","ani-tr2 2s ease 1s forwards");
    $('#tr3').css("animation","ani-tr3 2s ease 1s forwards");
    $('#tr4').css("animation","ani-tr4 2s ease 1s forwards");
   
   
document.getElementById("nametext").innerHTML = "My Hobby";
}
//----end if
else{
    if( $('.about').css("opacity") != "0"){
    $('.about').css("transition-delay","0s");
    $('.about').css("transform","translateY(0px)");
    $('.about').css("animation","fade 1s forwards");
    }
    if( $('.contactdiv').css("opacity") != "0"){
    $('.contactdiv').css("transition-delay","0s");
    $('.contactdiv').css("transform","translateY(0px)");
    $('.contactdiv').css("animation","fade 1s forwards");
    }
    $('.hobby').css("transition-delay","1s");
    $('.hobby').css("transform","translateY(-"+(move-(screen.height-130)*0.12)+"px)");
    $('.hobby').css("animation","about-ani 5s forwards");

    $('#tr1').css("animation","ani-tr1 2s ease 1s forwards");
    $('#tr2').css("animation","ani-tr2 2s ease 1s forwards");
    $('#tr3').css("animation","ani-tr3 2s ease 1s forwards");
    $('#tr4').css("animation","ani-tr4 2s ease 1s forwards");
    document.getElementById("nametext").innerHTML = "My Hobby";
}

}
//-------------------------
function moveUpContact(idname){
//-----change menu
changeMenu(idname);
//-----set title
$('title').text("Contact");
//-----if
if($('.job').css("opacity") === '1'){
    $('#nametext').css("transform","translateY(-"+(move-(screen.height-130)*0.15)+"px)");
    
    $('.job').css("padding-left","0%");
    $('.job').css("opacity","0");
  
    //$('.icon').css("transform","translateY(50px)");
    //$('.icon').css("opacity","0");
    //$('#follow').css("transform","translateY(50px)");
   // $('#follow').css("opacity","0");
    $('.contactdiv').css("transition-delay","1s");
    $('.contactdiv').css("transform","translateY(-"+(move-(screen.height-130)*0.12)+"px)");
    $('.contactdiv').css("animation","about-ani 5s forwards");

  
   
   
document.getElementById("nametext").innerHTML = "My Contact";
}
//----end if
else{
   // if($('.about').css("transform") === "translateY(0px)" ) 
   if( $('.about').css("opacity") != "0"){
    $('.about').css("transition-delay","0s");
    $('.about').css("transform","translateY(0px)");
    $('.about').css("animation","fade 1s forwards");
    }
    if( $('.hobby').css("opacity") != "0"){
    $('.hobby').css("transition-delay","0s");
    $('.hobby').css("transform","translateY(0px)");
    $('.hobby').css("animation","fade 1s forwards");
    }

    $('.contactdiv').css("transition-delay","1s");
    $('.contactdiv').css("transform","translateY(-"+(move-(screen.height-130)*0.12)+"px)");
    $('.contactdiv').css("animation","about-ani 5s forwards");
   
    document.getElementById("nametext").innerHTML = "My Contact";
}


}
//-----------------------


function moveDown(idname){
   if( $('.job').css("opacity")=== '0'){
    $('#nametext').css("transform","translateY(0)");
    $('.job').css("padding-left","15%");
    $('.job').css("opacity","1");
    //$('.icon').css("transform","translateY(0px)");
   // $('.icon').css("opacity","1");
   // $('#follow').css("transform","translateY(0px)");
    //$('#follow').css("opacity","1");
    
    //--------------
    if( $('.about').css("opacity") != "0"){
        $('.about').css("transition-delay","0s");
        $('.about').css("transform","translateY(0px)");
        $('.about').css("animation","fade 1s forwards");
    }
    //---------
    if( $('.hobby').css("opacity") != "0"){
        $('.hobby').css("transition-delay","0s");
        $('.hobby').css("transform","translateY(0px)");
        $('.hobby').css("animation","fade 1s forwards");
    }
    //--------------
    if( $('.contactdiv').css("opacity") != "0"){
        $('.contactdiv').css("transition-delay","0s");
        $('.contactdiv').css("transform","translateY(0px)");
        $('.contactdiv').css("animation","fade 1s forwards");
    }
  

}
    //tam thoi
   //----change menu
    changeMenu(idname);
   //----set title
    $('title').text("Lê Văn Nam");
    document.getElementById("nametext").innerHTML = "Hello, I'm Nam";

}