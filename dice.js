var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var c = "dice" + randomnumber1 + ".png";
var newsrc = "F:/image0/" + c;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", newsrc);

var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var newsrc = "F:/image0/dice" + randomnumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", newsrc);



if (randomnumber2 > randomnumber1) {
    document.querySelector("h1").innerHTML = "🥇🥇 player 2 wins"
}
else if (randomnumber2 < randomnumber1) {
    document.querySelector("h1").innerHTML = "🥇🥇 player 1 wins"
}
else {
    document.querySelector("h1").innerHTML = "match draw"
}