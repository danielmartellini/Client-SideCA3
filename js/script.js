
function idName(name) {
  return document.getElementById(name);
}

function className(name) {
  return document.getElementsByClassName(name);
}


//this is the function that hides the password checker, and shows it again after in case it's been hidden
var a;
function showHide() {
  if ( a == 1) {
    idName("passChecker").style.display = "flex";
    return (a = 0);
  } else {
    idName("passChecker").style.display = "none";
    return (a = 1);
  }
}
idName("clickHide").addEventListener("click",showHide);






className("togglePassword")[0].addEventListener("click", function () {
  className("togglePassword")[0].classList.toggle("active");
  if (idName("passwordSpace").getAttribute("type") == "password") {
    idName("passwordSpace").setAttribute("type", "text");
  } else {
    idName("passwordSpace").setAttribute("type", "password");
  }
});

idName("passwordSpace").addEventListener("focus", function () {
  className("passPolicies")[0].classList.add("active");
});
idName("passwordSpace").addEventListener("blur", function () {
  className("passPolicies")[0].classList.remove("active");
});

idName("passwordSpace").addEventListener("keyup", function () {
  let password = idName("passwordSpace").value;

  if (/[A-Z]/.test(password)) {
    className("polUppercase")[0].classList.add("active");
  } else {
    className("polUppercase")[0].classList.remove("active");
  }
  if (/[a-z]/.test(password)) {
    className("polLowercase")[0].classList.add("active");
  } else {
    className("polLowercase")[0].classList.remove("active");
  }

  if (/[0-9]/.test(password)) {
    className("polNumber")[0].classList.add("active");
  } else {
    className("polNumber")[0].classList.remove("active");
  }

  if (/[^A-Za-z0-9]/.test(password)) {
    className("polSpecial")[0].classList.add("active");
  } else {
    className("polSpecial")[0].classList.remove("active");
  }

  if (password.length > 7) {
    className("polLength")[0].classList.add("active");
  } else {
    className("polLength")[0].classList.remove("active");
  }
});
//I declared the variables outside so they would be global
var total1=0;
var total2=0;
var total3=0;
var total4=0;
var total5=0;
var dessertsTotal=0;
var mainsTotal=0;
var startersTotal=0;
var total=0;

function mealTotal1() {
  let starter = +document.getElementById("starterDishes1").value;
  let mains = +document.getElementById("mainDishes1").value;
  let drinks = +document.getElementById("drinks1").value;
  let desserts = +document.getElementById("dessertDishes3").value;
  total1 = starter + mains + desserts+drinks;
  document.getElementById("total1").innerHTML = + total1 + " EURO";
}
function mealTotal2() {
  let starter = +document.getElementById("starterDishes2").value;
  let mains = +document.getElementById("mainDishes2").value;
  let desserts = +document.getElementById("dessertDishes3").value;
  let drinks = +document.getElementById("drinks2").value;
  total2 = starter + mains + desserts+drinks;
  document.getElementById("total2").innerHTML ="    "+ total2 + " EURO";
}
function mealTotal3() {
  let starter = +document.getElementById("starterDishes3").value;
  let mains = +document.getElementById("mainDishes3").value;
  let desserts = +document.getElementById("dessertDishes3").value;
  let drinks = +document.getElementById("drinks3").value;
  total3 = starter + mains + desserts+drinks;
  document.getElementById("total3").innerHTML = total3 + " EURO";
}
function mealTotal4() {
  let starter = +document.getElementById("starterDishes4").value;
  let mains = +document.getElementById("mainDishes4").value;
  let drinks = +document.getElementById("drinks4").value;
  let desserts = +document.getElementById("dessertDishes4").value;
  total4 = starter + mains + desserts+drinks;
  document.getElementById("total4").innerHTML = total4 + " EURO";
}
function mealTotal5() {
  let starter = +document.getElementById("starterDishes5").value;
  let mains = +document.getElementById("mainDishes5").value;
  let drinks = +document.getElementById("drinks5").value;
  let desserts = +document.getElementById("dessertDishes5").value;
  total5 = starter + mains + desserts+drinks;
  document.getElementById("total5").innerHTML =total5 + " EURO";
}
function addStarters(){
  let starter1= +document.getElementById("starterDishes1").value;
  let starter2= +document.getElementById("starterDishes2").value;
  let starter3= +document.getElementById("starterDishes3").value;
  let starter4= +document.getElementById("starterDishes4").value;
  let starter5= +document.getElementById("starterDishes5").value;
  startersTotal= starter1+starter2+starter3+starter4+starter5;
  document.getElementById("startersTotal").innerHTML =startersTotal + " EURO";
}

function addMains(){
  let main1= +document.getElementById("mainDishes1").value;
  let main2= +document.getElementById("mainDishes2").value;
  let main3= +document.getElementById("mainDishes3").value;
  let main4= +document.getElementById("mainDishes4").value;
  let main5= +document.getElementById("mainDishes5").value;
  mainsTotal= main1+main2+main3+main4+main5;
  document.getElementById("mainsTotal").innerHTML =mainsTotal + " EURO";
}

function addDesserts(){
  let dessert1= +document.getElementById("dessertDishes1").value;
  let dessert2= +document.getElementById("dessertDishes2").value;
  let dessert3= +document.getElementById("dessertDishes3").value;
  let dessert4= +document.getElementById("dessertDishes4").value;
  let dessert5= +document.getElementById("dessertDishes5").value;
  dessertsTotal= dessert1+dessert2+dessert3+dessert4+dessert5;
  document.getElementById("dessertsTotal").innerHTML =dessertsTotal + " EURO";
}
function addDrinks(){
  let drinks1= +document.getElementById("drinks1").value;
  let drinks2= +document.getElementById("drinks2").value;
  let drinks3= +document.getElementById("drinks3").value;
  let drinks4= +document.getElementById("drinks4").value;
  let drinks5= +document.getElementById("drinks5").value;
  drinksTotal= drinks1+drinks2+drinks3+drinks4+drinks5;
  document.getElementById("drinksTotal").innerHTML =drinksTotal + " EURO";
}


function totalFinal(){
  var total;
  total=total1+total2+total3+total4+total5;
  document.getElementById("totalFinal").innerHTML = "€"+total+"EUR";
}


document.getElementById("form1").addEventListener("input", mealTotal1);
document.getElementById("form2").addEventListener("input", mealTotal2);
document.getElementById("form3").addEventListener("input", mealTotal3);
document.getElementById("form4").addEventListener("input", mealTotal4);
document.getElementById("form5").addEventListener("input", mealTotal5);
document.getElementById("menu").addEventListener("change", addStarters);
document.getElementById("menu").addEventListener("change", addMains);
document.getElementById("menu").addEventListener("change", addDesserts);
document.getElementById("menu").addEventListener("change", addDrinks);
document.getElementById("menu").addEventListener("change", totalFinal);



//function that fetches the API and brings it to the webpage
document.getElementById("myBtn").addEventListener("click", getData);

function getData() {


  //Get API
  fetch("https://randomuser.me/api/?results=5")
    .then((res) => res.json())
    .then((data) => {
      let author = data.results;

      //declared a variable, to place the generated users
      let output = "";

      //loops the returned data for each user
      author.forEach(function (lists) {
        output += `
                <div class="container">
                    <div>
                        <ul>
                            <li>Name: <b>${lists.name.first}</b></li>
                            <li  style="list-style-type: none;"><img id="thumbImg" src="${lists.picture.large}"></li>
                            <li>Number: ${lists.cell}</li>
                            <li>Age: ${lists.dob.age}</li>
                            <li>Email: ${lists.email}</li>
                            <li>Gender: ${lists.gender}</li>
                            <li>City: ${lists.location.city}</li>
                            <li>Country: ${lists.location.country}</li>
                        </ul>
                    </div>
                </div> `;
      });

      //writes the user generator on my div with the id output
      document.getElementById("output").innerHTML = output;
    });
}




