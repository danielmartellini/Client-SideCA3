function idName(name) {
    return document.getElementById(name);
  }
  
  function className(name) {
    return document.getElementsByClassName(name);
  }
var a;
function showHide1() {
    if ( a == 1) {
      idName("myStarters").style.display = "flex";
      return (a = 0);
    } else {
      idName("myStarters").style.display = "none";
      return (a = 1);
    }
  }
  idName("startersBtn").addEventListener("click",showHide1);
var b;
function showHide2() {
    if ( b == 1) {
      idName("myMains").style.display = "flex";
      return (b = 0);
    } else {
      idName("myMains").style.display = "none";
      return (b = 1);
    }
  }
  idName("mainsBtn").addEventListener("click",showHide2);
  var c;
  function showHide3() {
    if ( c == 1) {
      idName("myDesserts").style.display = "flex";
      return (c = 0);
    } else {
      idName("myDesserts").style.display = "none";
      return (c = 1);
    }
  }
  idName("dessertsBtn").addEventListener("click",showHide3);
  var d;
  function showHide4() {
    if ( d == 1) {
      idName("myDrinks").style.display = "flex";
      return (d = 0);
    } else {
      idName("myDrinks").style.display = "none";
      return (d = 1);
    }
  }
  idName("drinksBtn").addEventListener("click",showHide4);

 