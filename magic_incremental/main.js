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


//TODO: autogenerate actions, and have the buttons linked the the actual functions
//TODO: autogenerate/update DOM for all the consumables and abilities and skills. 


function tick() {
  updateDisplay();
  window.setTimeout(tick, msUntilNextTick)
  beg(); 
  //console.log(consumables.Gold.curr)
}

$(function(){
  generateDisplay();
  updateDisplay();
  tick();
});






