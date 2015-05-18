var clock = document.getElementById('clock');

function checkTime (x) {
  if (x < 10) {
    x = "0" + x;
  }
  return x;
}

function currentTime () {
  var currentDay = new Date();
  var hours = checkTime(currentDay.getHours());
  var minutes = checkTime(currentDay.getMinutes());
  var seconds = checkTime(currentDay.getSeconds());
  var timeNoColon = "" + hours + minutes + seconds;
  var timeConcat = Number(timeNoColon);
  var fullHex = timeConcat.toString(16);

    if (fullHex.length < 6) {
      fullHex = ("#0" + fullHex).toUpperCase();
    } else {
      fullHex = ("#" + fullHex).toUpperCase();
    }

  clock.innerHTML = fullHex;
  box.style.backgroundColor = fullHex;
  clock.style.backgroundColor = fullHex;

  var timer = setTimeout(function () {
            currentTime()
        }, 1000);
}

currentTime();
