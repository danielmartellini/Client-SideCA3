//I've created this function so I can access my classes typing less, instead of document.getElementById(name) I can use idName(name)
function idName(name) {
  return document.getElementById(name);
}

function className(name) {
  return document.getElementsByClassName(name);
}

$(document).ready(function () {
  //this function will be able to Hide my password Checker
  $("#clickHide").click(function () {
    $("#passChecker").slideToggle(1000);
  });
  //changes the text on the btn
  $("#generateGuests").click(function () {
    $(this).html("Generate New Guests");
  });
  console.log($("li:first").text());

  //setting the for display to none and now I can change it from none to flex, just pressing the button
  $("#form1").css("display", "none");
  $("#orderOne").click(function () {
    $("#form1").slideToggle(500);
  });
  $("#form2").css("display", "none");
  $("#orderTwo").click(function () {
    $("#form2").slideToggle(500);
  });
  $("#form3").css("display", "none");
  $("#orderThree").click(function () {
    $("#form3").slideToggle(500);
  });
  $("#form4").css("display", "none");
  $("#orderFour").click(function () {
    $("#form4").slideToggle(500);
  });
  $("#form5").css("display", "none");
  $("#orderFive").click(function () {
    $("#form5").slideToggle(500);
  });
  //adding some css properties to my element
  $(".guestBtn").css("padding", "5px");
});

//here I'm adding a class to my div, so I can style/change back, only clicking the button
//In this section I didn't use jQuery

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
var total1 = 0;
var meal1 = idName("startersTotal");

var total = 0;

//function to add-up a meal total

function mealTotal(param1, param2, param3, param4, totalDisplay) {
  let starter = +idName(param1).value;
  let mains = +idName(param2).value;
  let drinks = +idName(param3).value;
  let desserts = +idName(param4).value;
  total1 = starter + mains + desserts + drinks;
  idName(totalDisplay).value = total1;
  idName(totalDisplay).innerHTML = total1 + " EURO";
}

idName("form1").addEventListener(
  "input",
  function () {
    mealTotal(
      "starterDishes1",
      "mainDishes1",
      "dessertDishes1",
      "drinks1",
      "total1"
    );
  },
  false
);
idName("form2").addEventListener(
  "input",
  function () {
    mealTotal(
      "starterDishes2",
      "mainDishes2",
      "dessertDishes2",
      "drinks2",
      "total2"
    );
  },
  false
);
idName("form3").addEventListener(
  "input",
  function () {
    mealTotal(
      "starterDishes3",
      "mainDishes3",
      "dessertDishes3",
      "drinks3",
      "total3"
    );
  },
  false
);
idName("form4").addEventListener(
  "input",
  function () {
    mealTotal(
      "starterDishes4",
      "mainDishes4",
      "dessertDishes4",
      "drinks4",
      "total4"
    );
  },
  false
);
idName("form5").addEventListener(
  "input",
  function () {
    mealTotal(
      "starterDishes5",
      "mainDishes5",
      "dessertDishes5",
      "drinks5",
      "total5"
    );
  },
  false
);

//function to add-up a single column, i.e, all starters, all drinks...
//I didn't use the same function from before because one had 6 parameters and the other had 5

function addItems(item1, item2, item3, item4, item5, totalDisplay) {
  let dish1 = +idName(item1).value;
  let dish2 = +idName(item2).value;
  let dish3 = +idName(item3).value;
  let dish4 = +idName(item4).value;
  let dish5 = +idName(item5).value;
  dishTotal = dish1 + dish2 + dish3 + dish4 + dish5;
  idName(totalDisplay).value = dishTotal;
  idName(totalDisplay).innerHTML = dishTotal + " EURO";
}
idName("menu").addEventListener(
  "change",
  function () {
    addItems(
      "starterDishes1",
      "starterDishes2",
      "starterDishes3",
      "starterDishes4",
      "starterDishes5",
      "startersTotal"
    );
  },
  false
);
idName("menu").addEventListener(
  "change",
  function () {
    addItems(
      "mainDishes1",
      "mainDishes2",
      "mainDishes3",
      "mainDishes4",
      "mainDishes5",
      "mainsTotal"
    );
  },
  false
);
idName("menu").addEventListener(
  "change",
  function () {
    addItems(
      "dessertDishes1",
      "dessertDishes2",
      "dessertDishes3",
      "dessertDishes4",
      "dessertDishes5",
      "dessertsTotal"
    );
  },
  false
);
idName("menu").addEventListener(
  "change",
  function () {
    addItems(
      "drinks1",
      "drinks2",
      "drinks3",
      "drinks4",
      "drinks5",
      "drinksTotal"
    );
  },
  false
);

function totalFinal() {
  total =
    +idName("startersTotal").value +
    idName("mainsTotal").value +
    idName("dessertsTotal").value +
    idName("drinksTotal").value;
  idName("totalFinal").innerHTML = "€" + total + "EUR";
}

//using my function totalFinal to update my total space, which shows all of the orders added up

idName("menu").addEventListener("change", totalFinal);

//function that fetches the API and brings it to the webpage
idName("generateGuests").addEventListener("click", getData);

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
                            <li class="guestName" >Name: <b>${lists.name.first}</b></li>
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
      idName("output").innerHTML = output;
    });
}
