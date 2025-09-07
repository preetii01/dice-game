var n=Math.random();
var m=Math.random();
var randomnumber1=Math.floor((n*6));
var randomnumber2=Math.floor((m*6));
const images=["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];
document.querySelector(".img1").setAttribute("src",images[randomnumber1]);
document.querySelector(".img2").setAttribute("src",images[randomnumber2]);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}

