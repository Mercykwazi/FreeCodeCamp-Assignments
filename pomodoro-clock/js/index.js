   function startYourTimer() {
      var minutes = document.getElementById("minutes").value;
      var seconds = document.getElementById("seconds").value;
      document.getElementById("timer").innerHTML = minutes + ":" + seconds;
      startTimer()
    }


    function startButton() {
      document.getElementById("timer").innerHTML = "Start";
    }

    function shortButton() {
      var minutes = document.getElementById("min").value;
      var seconds = document.getElementById("sec").value;
      document.getElementById("timer").innerHTML = minutes + ":" + seconds;
      startTimer()
    }

    function startTimer() {

      var presentTime = document.getElementById("timer").innerHTML;
      if (presentTime === "0:00") {
        document.getElementById("timer").innerHTML = 0 + ":" + "00"
      } else {
        var timeArray = presentTime.split(/[:]+/);
        var m = timeArray[0];
        var s = checkSecond(timeArray[1] - 1);
        if (s == 59) {
          m = m - 1;
        }
        if (m === "0" && s === "00") {
          clearTimeout(timer);
          m = "0";
          s = "00";
        }

        document.getElementById("timer").innerHTML = m + ":" + s;
        var timer = setTimeout(startTimer, 1000);

        if (m === "0" && s === "00") {
          clearTimeout(timer);
        }
      }
    }

    function checkSecond(sec) {
      if (sec < 10 && sec >= 0) {
        sec = "0" + sec;
      }
      if (sec < 0) {
        sec = "59";
      }
      return sec;
    }

    function stopButton() {
      document.getElementById("timer").innerHTML = "0:00";
    }