var playchoice;
var computerplayer;
var choice = ["cell1", "cell2", "cell3", "cell4", "cell5", "cell6", "cell7", "cell8", "cell9"];
//var boxes = [["cell1", "cell2", "cell3"], ["cell4", "cell5", "cell6"], ["cell7", "cell8", "cell9"]]
var playerBox = [];
var computerBox = [];
function valueO() {
    playchoice = "O";
    computerplayer = "X";
    console.log("this is the value of computerplayer", computerplayer)
    alert("You chose to play as O");
}


function valueX() {
    playchoice = "X";
    computerplayer = "O";
    alert("You chose to play as X");
}
function minMax(choice, playchoice) {
    if (win() === playchoice) {
        alert("you have received 10 points")
    } else if (win() !== playchoice) {
        alert("you lost so you have -10 points")
    } else {
        alert("It was a tie")
    }


}

function checking(id) {
    if (choice.indexOf(id) === -1) {
        alert("sorry the box is already taken")
    } else {
        if (playchoice === undefined) {
            alert("please specify which between X and O ")
            reset()
        } else {
            playerBox.push(id);
            console.log("playerBox", playerBox)
            choice.splice(choice.indexOf(id), 1)
            console.log("choice", choice)
            document.getElementById(id).innerHTML = `<h1>
            ${playchoice}</h1>`
        }
    }

}

function cellOne() {
    document.getElementById("cell1").innerHTML = randomPicker();
    win();
    checking("cell1");
}
function cellTwo() {
    document.getElementById("cell2").innerHTML = randomPicker()
    win();
    checking("cell2")
}
function cellThree() {
    document.getElementById("cell3").innerHTML = randomPicker()
    win();
    checking("cell3")

}
function cellFour() {
    document.getElementById("cell4").innerHTML = randomPicker()
    win();
    checking("cell4")
}
function cellFive() {
    document.getElementById("cell5").innerHTML = randomPicker()
    win();
    checking('cell5')

}
function cellSix() {
    document.getElementById("cell6").innerHTML = randomPicker()
    win();
    checking("cell6")
}
function cellSeven() {
    document.getElementById("cell7").innerHTML = randomPicker()
    win();
    checking("cell7")
}
function cellEight() {
    document.getElementById("cell8").innerHTML = randomPicker()
    win();
    checking("cell8")

}
function cellNine() {
    document.getElementById("cell9").innerHTML = randomPicker()
    win();
    checking("cell9")
    console.log("is this working", win());
}
function randomPicker() {

    var randomely = Math.floor(Math.random() * choice.length);

    document.getElementById(choice[randomely]).innerHTML = computerplayer
    choice.splice(choice.indexOf(choice[randomely]), 1)
    console.log("what is the the value",choice)


    return playchoice;

}
function win() {

    if (document.getElementById("cell1").innerHTML == playchoice && document.getElementById("cell2").innerHTML == playchoice && document.getElementById("cell3").innerHTML == playchoice) {
        alert("You win")
        reset()
    }

    else if (document.getElementById("cell4").innerHTML == playchoice && document.getElementById("cell5").innerHTML == playchoice && document.getElementById("cell6").innerHTML == playchoice) {
        alert("you win")
        reset()
    } else if (document.getElementById("cell7").innerHTML == playchoice && document.getElementById("cell8").innerHTML == playchoice && document.getElementById("cell9").innerHTML == playchoice) {
        alert("you win")
        reset()
    } else if (document.getElementById("cell3").innerHTML == playchoice && document.getElementById("cell5").innerHTML == playchoice && document.getElementById("cell7").innerHTML == playchoice) {
        alert("you win")
        reset()
    } else if (document.getElementById("cell1").innerHTML == playchoice && document.getElementById("cell5").innerHTML == playchoice && document.getElementById("cell9").innerHTML == playchoice) {
        alert("you win")
        reset()
    } else if (document.getElementById("cell2").innerHTML == playchoice && document.getElementById("cell5").innerHTML == playchoice && document.getElementById("cell8").innerHTML == playchoice) {
        alert("you win")
        reset()

    } else if (document.getElementById("cell1").innerHTML == computerplayer && document.getElementById("cell2").innerHTML == computerplayer && document.getElementById("cell3").innerHTML == computerplayer) {
        alert("sorry but the computer won")
        reset();
    } else if (document.getElementById("cell4").innerHTML == computerplayer && document.getElementById("cell5").innerHTML == computerplayer && document.getElementById("cell6").innerHTML == computerplayer) {
        alert("sorry but the computer won")
        reset();
    } else if (document.getElementById("cell7").innerHTML == computerplayer && document.getElementById("cell8").innerHTML == computerplayer && document.getElementById("cell9").innerHTML == computerplayer) {
        alert("sorry but the computer won")
        reset();
    } else if (document.getElementById("cell3").innerHTML == computerplayer && document.getElementById("cell5").innerHTML == computerplayer && document.getElementById("cell7").innerHTML == computerplayer) {
        alert("sorry but the computer won")
        reset();
    } else if (document.getElementById("cell1").innerHTML == computerplayer && document.getElementById("cell5").innerHTML == computerplayer && document.getElementById("cell9").innerHTML == computerplayer) {
        alert("sorry but the computer won")
        reset();
    } else if (document.getElementById("cell2").innerHTML == computerplayer && document.getElementById("cell5").innerHTML == computerplayer && document.getElementById("cell8").innerHTML == computerplayer) {
        alert("sorry but the computer won")
        reset();
    }
}
function reset() {
    window.location.reload(true);
}