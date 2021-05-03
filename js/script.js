var a;
function showHide() {
  if (a == 1) {
    document.getElementById("passChecker").style.display = "flex";
    return (a = 0);
  } else {
    document.getElementById("passChecker").style.display = "none";
    return (a = 1);
  }
}

function _id(name) {
  return document.getElementById(name);
}

function _class(name) {
  return document.getElementsByClassName(name);
}

_class("togglePassword")[0].addEventListener("click", function () {
  _class("togglePassword")[0].classList.toggle("active");
  if (_id("passwordSpace").getAttribute("type") == "password") {
    _id("passwordSpace").setAttribute("type", "text");
  } else {
    _id("passwordSpace").setAttribute("type", "password");
  }
});

_id("passwordSpace").addEventListener("focus", function () {
  _class("passPolicies")[0].classList.add("active");
});
_id("passwordSpace").addEventListener("blur", function () {
  _class("passPolicies")[0].classList.remove("active");
});

_id("passwordSpace").addEventListener("keyup", function () {
  let password = _id("passwordSpace").value;

  if (/[A-Z]/.test(password)) {
    _class("polUppercase")[0].classList.add("active");
  } else {
    _class("polUppercase")[0].classList.remove("active");
  }
  if (/[a-z]/.test(password)) {
    _class("polLowercase")[0].classList.add("active");
  } else {
    _class("polLowercase")[0].classList.remove("active");
  }

  if (/[0-9]/.test(password)) {
    _class("polNumber")[0].classList.add("active");
  } else {
    _class("polNumber")[0].classList.remove("active");
  }

  if (/[^A-Za-z0-9]/.test(password)) {
    _class("polSpecial")[0].classList.add("active");
  } else {
    _class("polSpecial")[0].classList.remove("active");
  }

  if (password.length > 7) {
    _class("polLength")[0].classList.add("active");
  } else {
    _class("polLength")[0].classList.remove("active");
  }
});

function mealTotal() {
  var total;
  let starter = +document.getElementById("starterDishes").value;
  let mains = +document.getElementById("mainDishes").value;
  let desserts = +document.getElementById("dessertDishes").value;
  total = starter + mains + desserts;
  console.log(total);
  document.getElementById("total").innerHTML = total + " EURO";
}

document.getElementById("submit").addEventListener("click", mealTotal);

document.getElementById("myBtn").addEventListener("click", getData);

function getData() {
  // console.log('test');

  //Get API
  fetch("https://randomuser.me/api/?results=5")
    .then((res) => res.json())
    .then((data) => {
      let author = data.results;

      //Get Data Value
      let output = "";

      //Get Data Loop Through
      author.forEach(function (lists) {
        output += `
                <div class="container">
                    <div>
                        <ul>
                            <li>Name: ${lists.name.first}</li>
                            <li><img src="${lists.picture.large}"></li>
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

      //Show On Our Screen All Data
      document.getElementById("output").innerHTML = output;
    });
}
