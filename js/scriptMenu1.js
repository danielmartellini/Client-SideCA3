function idName(name) {
  return document.getElementById(name);
}

function className(name) {
  return document.getElementsByClassName(name);
}


$(document).ready(function(){

  $("#startersBtn").click(function(){
    $("#myStarters").fadeToggle(500);
  });

  $("#mainsBtn").click(function(){
    $("#myMains").slideToggle(5000);
  });
  

});



function showHide(parameter){
  var a=0;
if ( a == 1) {
  idName(parameter).style.display = "none";
  return (a = 0);
} else {
  idName(parameter).style.display = "flex";
  return (a = 1);
}
}



idName("dessertsBtn").addEventListener("click",function(){
  showHide("myDesserts");
}, false);

idName("drinksBtn").addEventListener("click",function(){
  showHide("myDrinks");
}, false);