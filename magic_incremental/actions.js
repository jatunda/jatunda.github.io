function beg() {
  consumables["Gold"]["curr"] += 1;
}
function steal() {
  consumables.Gold.curr += 5;
}
function invest() {
  consumables.Gold.delta += 0.01;
}

var actions = {
  Beg: {
    func: beg,
    subtitle: null,
    desc: "Begging isn't the prettiest of jobs, but at least it's honorable.",
  },
  "Petty Theft": {
    func: steal,
    subtitle: "shhh",
    desc: "Sinful, risky, and faster than begging.",
  },
  Invest: {
    func: invest,
    subtitle: null,
    desc: "A penny saved is a penny earned.... eventually.",
  },
};

// TODO: edit this to be more programmatic.
function createAction(actionName, actionObj, ...funcArgs) {
  func = actionObj.func;
  var onclickText = func.name + "(";
  for (var i = 0; i < funcArgs.length; i++) {
    if (i != 0) {
      onclickText += ",";
    }
    onclickText += funcArgs[i];
  }
  onclickText += ")";

  $("#actionDiv").append(function () {
    return (
      `<div class="card">
        <div class="card-body">` +
        `<button type="button" class="btn btn-primary fs-5" onclick="` + onclickText +`" >` + actionName+`</button>`+

          //`<h5 class="card-title">` + actionName + `</h5>` +
          (actionObj.subtitle == null ? `<h6></h6>`: `<h6 class="card-subtitle my-2 text-muted">` + actionObj.subtitle + `</h6>`) +
          `<div class="card-text">` + actionObj.desc +`</div>` +
        `</div>
      </div>`
    );
  });
}

_.forEach(actions, function (actionObj, actionName) {
  createAction(actionName, actionObj);
});

