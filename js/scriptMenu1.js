$(document).ready(function () {
  $("#startersBtn").click(function () {
    $("#myStarters").fadeToggle(500);
  });

  $("#mainsBtn").click(function () {
    $("#myMains").slideToggle(1000);
  });
  $("#dessertsBtn").click(function () {
    $("#myDesserts").fadeToggle(500);
  });
  $("#drinksBtn").click(function () {
    $("#myDrinks").slideToggle(1000);
  });

  /*
  $("#pic").on({
    mouseenter: function () {
      $(this).css("background-image", "url(../img/background2.jpg)");
    },
  });*/
  var picture = $("#pic");

  var backgrounds = new Array(
    "url(../img/background.jpg)",
    "url(../img/background2.jpg)",
    "url(../img/background3.jpg)"
  );
  //setting a counter
  var currentPic = 0;

  function nextPicture() {
    picture.css(
      "background-image",
      //when it reaches the last img of the array it goes back to the first one, so it's essentially a loop
      backgrounds[(currentPic = ++currentPic % backgrounds.length)]
    );

    setTimeout(nextPicture, 2000);
  }
  //Here I'm calling the function nextPicure
  setTimeout(nextPicture, 2000);
  picture.css("background-image", backgrounds[0]);
});
