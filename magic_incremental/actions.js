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


// TODO: move to display?
function createAction(actionName, actionObj, ...funcArgs) {
  $("#actionDiv").append(
    $('<div class="card"></div>').append(
      $('<div class="card-body"></div>').append(
        $('<button type="button" class="btn btn-primary fs-5"></button>')
          .click(function() {
            actionObj.func.apply(actionObj, funcArgs);
            setDirty();
          })
          .append(actionName)
      ).append(
        actionObj.subtitle == null ? 
          `<h6></h6>`: 
          `<h6 class="card-subtitle my-2 text-muted">` + actionObj.subtitle + `</h6>`
      ).append(
        `<div class="card-text">` + actionObj.desc +`</div>`
      )
    )
  )
}

_.forEach(actions, function (actionObj, actionName) {
  createAction(actionName, actionObj);
});

