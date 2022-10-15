var randomnumber1=Math.floor(Math.random()*6)+1;
var randomdiceImage="dice"+randomnumber1+".png"; 
var randomImageDice="images/"+randomdiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageDice);

var randomnumber2=Math.floor(Math.random()*6)+1;
var randomdiceImage2="dice"+randomnumber2+".png";
var randomImageDice2="images/"+randomdiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageDice2);

if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML="PLAYER 1 WINS";

}
else if (randomnumber1<randomnumber2)
{
    document.querySelector("h1").innerHTML="PLAYER 2 WINS";
}

else
{
    document.querySelector("h1").innerHTML="draw :)"
}