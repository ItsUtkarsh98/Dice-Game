let randomNumber1 = Math.floor(Math.random()*6)+1;
dice(randomNumber1,".img1");

let randomNumber2 = Math.floor(Math.random()*6)+1;
dice(randomNumber2,".img2");

function dice(rn,img){
    if(rn === 1) {
        document.querySelector(img).setAttribute("src","./images/dice1.png");
    } else if(rn === 2) {
        document.querySelector(img).setAttribute("src","./images/dice2.png");
    } else if(rn === 3) {
        document.querySelector(img).setAttribute("src","./images/dice3.png");
    } else if(rn === 4) {
        document.querySelector(img).setAttribute("src","./images/dice4.png");
    } else if(rn === 5) {
        document.querySelector(img).setAttribute("src","./images/dice5.png");
    } else {
        document.querySelector(img).setAttribute("src","./images/dice6.png");
    }
}

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}