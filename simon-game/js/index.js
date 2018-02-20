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
    strict: "Off",
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
        document.getElementById(game.gameInProgress[i]).style.background = game.gameInProgress[i];
        setTimeout(function () {
            document.getElementById(game.gameInProgress[i - 1]).style.background = game.color[0];
        }, 500);
        i++;
        if (i == game.gameInProgress.length) {
            clearInterval(change)
        }
    }, 1000);
}
function strictMode() {
    if (game.strict === "Off") {
        document.getElementById("strictbtn").innerHTML = "Strict On"
        document.getElementById("strictbtn").style.background = "green";
    } else {

        console.log("player:", player("color"))
        game.strict = "Off"
        document.getElementById("strictbtn").innerHTML = "Strict Off"
        document.getElementById("strictbtn").style.background = "white";
    }

}

function player(color) {
    if (color === "red") {
        game.sound.red
    }

    game.player.push(color);

    if (game.gameInProgress.length === game.player.length) {
        if (game.gameInProgress.toString() !== game.player.toString()) {
            console.log("Is this being run:", strictly())
            alert('Wrong moves,please do try again')
            clear();
            flush();
        } else {
            addColor();
            clear();

        }
    }

}
function clear() {
    game.player = [];
}
function strictly() {
    if (game.gameInProgress.length === game.player.length) {
        if (game.gameInProgress.toString() !== game.player.toString()) {
            if (game.strict === "off") {
                alert('you were wrong,you loose')
                clear();
                game.gameInProgress = [];
            }

        } else {
            addColor();
            clear();
        }
    }

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
