//this is the function that hides the password checker, and shows it again after in case it's been hidden
var a;
function showHide() {
  if ( a == 1) {
    document.getElementById("passChecker").style.display = "flex";
    return (a = 0);
  } else {
    document.getElementById("passChecker").style.display = "none";
    return (a = 1);
  }
}

function idName(name) {
  return document.getElementById(name);
}

function className(name) {
  return document.getElementsByClassName(name);
}

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

var total1=0;
var total2=0;
var total3=0;
var total=0;

function mealTotal1() {
  let starter = +document.getElementById("starterDishes1").value;
  let mains = +document.getElementById("mainDishes1").value;
  let desserts = +document.getElementById("dessertDishes1").value;
  total1 = starter + mains + desserts ;
  document.getElementById("total1").innerHTML = + total1 + " EURO";
}
function mealTotal2() {
  let starter = +document.getElementById("starterDishes2").value;
  let mains = +document.getElementById("mainDishes2").value;
  let desserts = +document.getElementById("dessertDishes2").value;
  total2 = starter + mains + desserts;
  document.getElementById("total2").innerHTML ="    "+ total2 + " EURO";
}
function mealTotal3() {
  let starter = +document.getElementById("starterDishes3").value;
  let mains = +document.getElementById("mainDishes3").value;
  let desserts = +document.getElementById("dessertDishes3").value;
  total3 = starter + mains + desserts;
  document.getElementById("total3").innerHTML ="    "+ total3 + " EURO";
}

console.log(total1+total2+total3);

function totalFinal(){
  var total;
  total=total1+total2+total3;
  document.getElementById("totalFinal").innerHTML = total;
}


document.getElementById("form1").addEventListener("input", mealTotal1);
document.getElementById("form2").addEventListener("input", mealTotal2);
document.getElementById("form3").addEventListener("input", mealTotal3);
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
                            <li>Name: ${lists.name.first}</li>
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
//changing background picture

let pics = ['../img/background.jpg','../img/background2.jpg','../img/background3.jpg',]
setInterval(function(){
  let random = Math.floor(Math.random()*3);
  document.main.style.backgroundImage=url('pics[1]');
},100);

console.log('test');


