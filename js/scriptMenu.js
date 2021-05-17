//this page is not being used in my website, I just left it here to compare it with the one using jQuery
function idName(name) {
  return document.getElementById(name);
}

function className(name) {
  return document.getElementsByClassName(name);
}

var a = 0;
function showHide(parameter) {
  if (a == 1) {
    idName(parameter).style.display = "none";
    return (a = 0);
  } else {
    idName(parameter).style.display = "flex";
    return (a = 1);
  }
}

idName("startersBtn").addEventListener(
  "click",
  function () {
    showHide("myStarters");
  },
  false
);
idName("mainsBtn").addEventListener(
  "click",
  function () {
    showHide("myMains");
  },
  false
);

idName("dessertsBtn").addEventListener(
  "click",
  function () {
    showHide("myDesserts");
  },
  false
);

idName("drinksBtn").addEventListener(
  "click",
  function () {
    showHide("myDrinks");
  },
  false
);
