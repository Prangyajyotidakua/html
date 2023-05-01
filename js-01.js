/*$("h1").addClass("big-box");
$("button").html("<em>hi there</em>");
$("a").text("Youtube.com");
$("a").attr("herf", "www.youtube.com");
*/

/*
$("h1").click(function () {
    $("h1").css("color", "purple");
});

$("button").click(function () {
    $("h1").css("color", "red");
});
*/

/*
$("input").keypress(function () {
    $("h1").text(event.key);

});
*/


/*
$("h1").on("mouseover", function () {
    $("h1").css("color", "green");
});

$("input").on("click", function () {
    $("h1").css("color", "blue");
});

$("h1").on("click", function () {
    $("h1").css("color", "pink");
});
*/

/*
$("h1").before("<button>NEW</button>");
$("h1").after("<button>NEW</button>");
$("h1").prepend("<button>NEW</button>");
$("h1").append("<button>NEW</button>");
*/


/*$("button").on("click", function () {
    $("h1").hide();
});*/


/*$("button").on("click", function () {
    $("h1").toggle();
});*/

$("button").on("click", function () {
    $("h1").slideUp().slideDown().animate({
        opacity: 0.5
    });
});


































