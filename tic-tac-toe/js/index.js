var playchoice;
        var computerplayer;
         var choice = ["cell1", "cell2", "cell3", "cell4", "cell5", "cell6", "cell7", "cell8", "cell9"];
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

        function cellOne() {
            document.getElementById("cell1").innerHTML = randomPicker()
            win();
        }
        function cellTwo() {
            document.getElementById("cell2").innerHTML = randomPicker()
            win();
        }
        function cellThree() {
            document.getElementById("cell3").innerHTML = randomPicker()
            win();
        }
        function cellFour() {
            document.getElementById("cell4").innerHTML = randomPicker()
            win();
        }
        function cellFive() {
            document.getElementById("cell5").innerHTML = randomPicker()
            win();
        }
        function cellSix() {
            document.getElementById("cell6").innerHTML = randomPicker()
            win();
        }
        function cellSeven() {
            document.getElementById("cell7").innerHTML = randomPicker()
            win();
        }
        function cellEight() {
            document.getElementById("cell8").innerHTML = randomPicker()
            win();
        }
        function cellNine() {
            document.getElementById("cell9").innerHTML = randomPicker()
            console.log("is this working",win());
        }
        function randomPicker() {
           
          if(choice.includes("playchoice")){
            alert("this is already in use")
          }
            var randomely = Math.floor(Math.random() * choice.length);
  
            choice = choice.filter(function(e){
              return e !== choice[randomely];
            });
          
          choice = choice.filter(function(e){
              return e !== playchoice;
            });
          
           console.log('choice:',choice)
            console.log("this is the value of playchoice", playchoice);
            console.log("this is a random pick", randomely)
            document.getElementById(choice[randomely]).innerHTML = computerplayer
            return playchoice;
        }

        function reset() {
            window.location.reload(true);
        };