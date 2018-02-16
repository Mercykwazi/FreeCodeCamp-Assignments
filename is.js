var allButtons = ["green", "blue", "red", "yellow"];
var userSelection = [];
var computerSelection = [];
var levelNumber = 0;
var strict = "Off";
function simonGame() {
    var i = 0;
    if (computerSelection.length === userSelection.length) {
        if (computerSelection.toString() === userSelection.toString()) {
            levelNumber += 1;
            computerSelect();
            var currentColor = "";
            var changeColor = setInterval(function () {
                currentColor = computerSelection[i];
                if (currentColor === "green") {
                    document.getElementById(currentColor).style.background = '#008000';
                    var marimba = new Audio();
                    marimba.src = "marimba1.wav";
                    marimba.play();
                    setTimeout(function () {
                        document.getElementById(currentColor).style.background = 'none';
                    }, 500);
                } else if (currentColor === "yellow") {
                    document.getElementById(currentColor).style.background = '#FFFF00';
                    var marioJump = new Audio();
                    marioJump.src = "Mario_Jumping-Mike_Koenig-989896458.wav";
                    marioJump.play();
                    setTimeout(function () {
                        document.getElementById(currentColor).style.background = 'none';
                    }, 500);
                } else if (currentColor === "red") {
                    document.getElementById(currentColor).style.background = '#FF0000';
                    var waterDrop = new Audio();
                    waterDrop.src = "Water Drop-SoundBible.com-2039669379.wav";
                    waterDrop.play();
                    setTimeout(function () {
                        document.getElementById(currentColor).style.background = 'none';
                    }, 500);
                } else if (currentColor === "blue") {
                    document.getElementById(currentColor).style.background = '#0000FF';
                    var marioCoin = new Audio();
                    marioCoin.src = "Mario-coin-sound.mp3";
                    marioCoin.play();
                    setTimeout(function () {
                        document.getElementById(currentColor).style.background = 'none';
                    }, 500);
                }
                i += 1;
                if (i == levelNumber) {
                    document.getElementById("count").innerHTML = i;
                    clearInterval(changeColor);
                }
            }, 1000);
            userSelection = [];
        } else {
            alert("oops! please try again");
            if (strict === "Off") {
                i = i - 1;
                levelNumber = levelNumber - 1;
                userSelection = computerSelection;
                computerSelection = computerSelection;
                simonGame();
            } else {
                i = 0;
                levelNumber = 0;
                userSelection = [];
                computerSelection = [];
                simonGame();
            }

        }
    }
}
function strictMode() {
    if (strict === "Off") {
        strict = "On"
        document.getElementById("strictBtn").innerHTML = "Strict On"
        document.getElementById("strictBtn").style.background = '#008000';
    } else {
        strict = "Off"
        document.getElementById("strictBtn").innerHTML = "Strict Off"
        document.getElementById("strictBtn").style.background = '#FF0000';
    }

}

function computerSelect() {
    var random = 0;
    random = Math.floor(Math.random() * allButtons.length);
    colorButton = allButtons[random];
    computerSelection.push(colorButton);
}

function green() {
    userSelection.push("green");
    document.getElementById("green").style.background = '#008000';
    var marimba = new Audio();
    marimba.src = "marimba1.wav";
    marimba.play();
    setTimeout(function () {
        document.getElementById("green").style.background = 'none';
    }, 200);
    simonGame();
}
function blue() {
    userSelection.push("blue");
    document.getElementById("blue").style.background = '#0000FF';
    var marioCoin = new Audio();
    marioCoin.src = "Mario-coin-sound.mp3";
    marioCoin.play();

    setTimeout(function () {
        document.getElementById("blue").style.background = 'none';
    }, 200);
    simonGame();
}
function red() {
    userSelection.push("red");
    document.getElementById("red").style.background = '#FF0000';
    var waterDrop = new Audio();
    waterDrop.src = "Water Drop-SoundBible.com-2039669379.wav";
    waterDrop.play();
    setTimeout(function () {
        document.getElementById("red").style.background = 'none';
    }, 200);
    simonGame();
}
function yellow() {
    userSelection.push("yellow");
    document.getElementById("yellow").style.background = '#FFFF00';
    var marioJump = new Audio();
    marioJump.src = "Mario_Jumping-Mike_Koenig-989896458.wav";
    marioJump.play();
    setTimeout(function () {
        document.getElementById("yellow").style.background = 'none';
    }, 200);
    simonGame();
}