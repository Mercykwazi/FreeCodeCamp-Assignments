var game = {
    count: 0,
    color: ["white"],
    possibleColors: ["red", "blue", "green", "yellow"],
    gameInProgress: [],
    player: [],
    sound: {
        red: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
        blue: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
        green: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
        yellow: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
    },
    strict:"Off",
};

function addColor() {

    var randomColor = Math.floor(Math.random() * game.possibleColors.length);
    game.gameInProgress.push(game.possibleColors[randomColor]);
    console.log("the value of gameInprogress:", game.gameInProgress);
    flush();
}
function flush() {
    document.getElementById("countspace").innerHTML = game.gameInProgress.length;
    var i = 0;
    var change = setInterval(function () {
        console.log(game.gameInProgress[i])

        document.getElementById(game.gameInProgress[i]).classList.add(game.gameInProgress[i] + "_dark")

        setTimeout(function () {
            document.getElementById(game.gameInProgress[i - 1]).classList.remove(game.gameInProgress[i - 1] + "_dark");
        }, 500);
        i++;
        if (i == game.gameInProgress.length) {
            clearInterval(change)
        }
    }, 1000);
}
function strictMode() {
    if (game.strict === "Off") {
       game.strict = "On"
        document.getElementById("strictbtn").innerHTML = "Strict On"
        document.getElementById("strictbtn").style.background = "green";
    } else {
        game.strict = "Off";
        document.getElementById("strictbtn").innerHTML = "Strict Off"
        document.getElementById("strictbtn").style.background = "white";
    }

}

function player(color) {
    if (color === "red") {
        game.sound.red
    } else if (color === "blue") {
        game.sound.blue;
    } else if (color === "green") {
        game.sound.green;
    } else {
        game.sound.yellow;
    }
    game.player.push(color);
    if (game.gameInProgress.length === game.player.length) {
        if (game.gameInProgress.toString() !== game.player.toString()) {
            if (game.strict==="On") {
                console.log(game.stirct)
                alert('you were wrong,you loose')
               restart();
                console.log("restart",restart())
            } else {
                alert('Wrong moves,please do try again')
                clear();
                flush();
            }
        } else {
            addColor();
            clear();
        }
    }
}
function clear() {
    game.player = [];
}
function startGame() {
    if (game.gameInProgress.length > 0) {
        alert('sorry, game already in progress');
    } else {
        addColor();
    }
}
function restart() {
    game.gameInProgress = [];
    game.player = [];
    startGame();

}