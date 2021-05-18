$(document).ready(function () {
  $("#startersBtn").click(function () {
    $("#myStarters").slideToggle(1000);
  });
  //those functions will change the state of my display from null to flex with a slide effect
  $("#mainsBtn").click(function () {
    $("#myMains").slideToggle(1000);
  });
  $("#dessertsBtn").click(function () {
    $("#myDesserts").slideToggle(1000);
  });
  $("#drinksBtn").click(function () {
    $("#myDrinks").slideToggle(1000);
  });
  //this will make my pizza move up and down
  $(".moveAround").hover(function () {
    var box = $(this);
    box.animate({
      top: 100,
    });
    box.animate({
      top: 500,
    });
    box.animate({
      top: 100,
    });
  });
  //will creat an alert when the pizza is clicked
  //will also make the pizza disappear once it's clicked
  $(".moveAround").click(function () {
    $(this).hide();
    alert(
      "You just got 15% off your next visit to our Restaurant, just mention the Website's flying Pizza to your server* *Rules Apply"
    );
  });
  //creating a variable to store the Jquery sintax

  var picture = $("#pic");

  var backgrounds = new Array(
    "url(../img/background.jpg)",
    "url(../img/background2.jpg)",
    "url(../img/background3.jpg)",
    "url(../img/background4.jpg)",
    "url(../img/background5.jpg)"
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
  //Here I'm calling the function nextPicure, back ground will change very 2 secs
  setTimeout(nextPicture, 2000);
  picture.css("background-image", backgrounds[0]);

  //animating my menu, the card that you're hovering will get bigger and then when you leave it, it gets smaller

  $(".menuCard")
    .on("mouseenter", function () {
      var card = $(this);
      card.stop(true, true).animate(
        {
          margin: -10,
          width: "+=50",
          height: "+=50",
        },
        "fast"
      );
    })
    .on("mouseleave", function () {
      var card = $(this);
      card.stop(true, true).animate(
        {
          margin: +10,
          width: "-=50",
          height: "-=50",
        },
        "fast"
      );
    });
});
