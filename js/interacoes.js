// Menu hamburger

// function clickMenu(){
//     let itens = document.getElementById("itens");

    
//     if (itens.style.display === "block" || itens.style.display === ""){
//         itens.style.display = "none";
  
//     } else{
//         itens.style.display = "block";
//     }  
// }

// Carrosel 

$(document).ready(function(){
    $('#destaque').slick({
        dots:true,
        autoplay:true,
        autoplaySpeed:300,
        arrows:false
    });
});