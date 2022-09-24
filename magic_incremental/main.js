//testFunction();


var msUntilNextTick = 30;
var barVal = 0;


function generateDisplay() {
};
function updateDisplay() {
  $("#consumablesDisplay").text( "Gold" + ": " + consumables["Gold"].curr);

  // document.getElementById("pointsDisplay").innerHTML = "points: " + points;
  // document.getElementById("ppsDisplay").innerHTML = "points/second: " + pps;
  // document.getElementById("ppsCost").innerHTML = "Cost: " + getPpsCost();
}





function tick() {
  updateDisplay();
  window.setTimeout(tick, msUntilNextTick)
  beg();
  console.log(consumables.Gold.curr)
}

$(function(){
  generateDisplay();
  updateDisplay();
  tick();
});






