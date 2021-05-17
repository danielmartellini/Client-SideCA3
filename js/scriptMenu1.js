$(document).ready(function () {
  $("#startersBtn").click(function () {
    $("#myStarters").slideToggle(1000);
  });

  $("#mainsBtn").click(function () {
    $("#myMains").slideToggle(1000);
  });
  $("#dessertsBtn").click(function () {
    $("#myDesserts").slideToggle(1000);
  });
  $("#drinksBtn").click(function () {
    $("#myDrinks").slideToggle(1000);
  });
  $(".moveAround").click(function () {
    var box = $(this);
    box.animate({
      top: 100,
    });
    box.animate({
      top: 400,
    });
    box.animate({
      top: 100,
    });
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
    picture
      .css(
        "background-image",
        //when it reaches the last img of the array it goes back to the first one, so it's essentially a loop
        backgrounds[(currentPic = ++currentPic % backgrounds.length)]
      )
      .animate({ opacity: 1 }, { duration: 1000 });

    setTimeout(nextPicture, 2000);
  }
  //Here I'm calling the function nextPicure
  setTimeout(nextPicture, 2000);
  picture.css("background-image", backgrounds[0]);

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
