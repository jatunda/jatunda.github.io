




window.beg = function beg() {
    consumables["Gold"]["curr"] += 1;
}
window.invest = function invest() {
    consumables.Gold.delta += 0.01;
}

var actions = {
    Beg: beg,
    Invest: invest,
};

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

//createAction("addPoint", addPoint);
