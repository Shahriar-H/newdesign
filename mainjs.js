$(document).ready(function(){


    $(".scroll_beha").waypoint(function(direction){

        if(direction == 'down'){
            $('nav').addClass("sticky");
        }
        else{
            $('nav').removeClass("sticky");
        }

    });

});



$("a").on('click', function(event){

    if(this.hash != ""){
        event.preventDefault();
    
        var hash = this.hash ;
    
        $("html , body").animate({
            scrollTop: $(hash).offset().top
        },800 , function(){
            window.location.hash = hash;
        })
    }
    
    })

function loadm(){
    document.getElementById('larg').style.display='block';
    document.getElementById('lar').innerHTML = 'Refresh to Load Less Work'

    
}

function fun1(){
    document.getElementById('uk3').style.display='block';
    document.getElementById('uk1').style.display='none';
    document.getElementById('uk4').style.display='none';

}

function fun2(){
    document.getElementById('uk3').style.display='none';
    document.getElementById('uk1').style.display='block';
    document.getElementById('uk4').style.display='none';

}

function fun3(){
    document.getElementById('uk3').style.display='none';
    document.getElementById('uk1').style.display='none';
    document.getElementById('uk4').style.display='block';
    

}

function menup(){
    document.getElementById("open_nav").style.width="50%";
}

function menuc(){
    document.getElementById("open_nav").style.width="0%";
}