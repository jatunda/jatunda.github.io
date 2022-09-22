var points = 0;
var pps = 0;
var barVal = 0;
var msUntilNextTick = 30;

function addPoint() {
  points += 1;
  updateDisplay();
}

function buyPps() {
  var cost = getPpsCost();
  if (points < cost) {
    return;
  }
  pps += 1;
  points -= cost;
  updateDisplay();
}

function getPpsCost() {
  return pps + 5 + 1.4 * Math.pow(pps, 0.85);
}

function updateDisplay() {
  document.getElementById("pointsDisplay").innerHTML = "points: " + points;
  document.getElementById("ppsDisplay").innerHTML = "points/second: " + pps;
  document.getElementById("ppsCost").innerHTML = "Cost: " + getPpsCost();
}

function roundNumber(number, places) {}

document.addEventListener("keypress", keyPressHandler, false);

function keyPressHandler(event) {
  var key = event.key;
  var bar = $(".progress-bar").get(0) // jquery selectors always return an array of objects
  if (key == "a") {
    barVal = 0;
    bar.style.width = "10%";
    //bar.style.transition = "none" //disables transition for JUMPING
  } else if (key == "s") {
    barVal = 0;
    bar.style.width = "50%";
  } else {
    barVal = 100;
    bar.style.width = "100%"
    //bar.style.transition = "" // enables transitions again by clearing the field
  }
}

function onClick() {
  console.log("onClick")
}

function createAction(actionName, func, ...funcArgs) {
  
  var onclickText = func.name + "(" ;
  for(var i = 0; i < funcArgs.length; i++) {
    if (i != 0) {
      onclickText += ","
    }
    onclickText += funcArgs[i]
  }
  onclickText += ")";
  console.log(onclickText)

  $("#actionDiv").append(function() {
    return `<div class="card">
      <div class="card-body">
        <h5 class="card-title">` + actionName + `</h5>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p class="card-text">example card text here<br>press a,s,d to move the bar</p>
        <button type="button" class="btn btn-primary" onclick="` + onclickText + `" >add point</button>
      </div>
    </div>`
    //return card
  })
}

updateDisplay();
createAction("addPoint", addPoint);

function tick() {
  points += pps / (1000 / msUntilNextTick);
  updateDisplay();
  window.setTimeout(tick, msUntilNextTick)
}



tick();
