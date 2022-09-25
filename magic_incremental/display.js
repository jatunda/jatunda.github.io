function generateDisplays() {
  $("#consumablesDisplay").append(
    $("<p></p>").html("Consumables").addClass("fs-4")
  );
  $("#consumablesDisplay").append($("<ul></ul>"));
  _.forEach(consumables, function (consumableObj, consumableName) {
    $("#consumablesDisplay > ul").append(
      $("<div></div>").html(consumableName).attr("id", consumableName)
    );
  });

  $("#abilitiesDisplay").append(
    $("<p></p>").html("Abilities").addClass("fs-4")
  );
  $("#abilitiesDisplay").append($("<ul></ul>"));
  _.forEach(abilities, function (abilityObj, abilityName) {
    $("#abilitiesDisplay > ul").append(
      $("<div></div>").html(abilityName).attr("id", abilityName)
    );
  });

  $("#skillsDisplay").append($("<p></p>").html("Skills").addClass("fs-4"));
  $("#skillsDisplay").append($("<ul></ul>"));
  _.forEach(skills, function (skillObj, skillName) {
    $("#skillsDisplay > ul").append(
      $("<div></div>").html(skillName).attr("id", skillName)
    );
  });
}

let dirty = false;
/**
 * tells the screen that it should update.
 */
function setDirty() {
    dirty = true;
}
/**
 * updates entire screen
 *
 * fetches an update from each consumable/ability/skill
 *
 */
function updateDisplay() {
  if (!dirty) {
    return;
  }
  dirty = false;

  _.forEach(consumables, function (consumableObj, consumableName) {
    // get by id
    // set innerHTML or whatever
    $("#" + consumableName).html(
      consumableName + ": " + consumableObj.curr + "/" + consumableObj.max
    );
  });

  _.forEach(abilities, function (abilityObj, abilityName) {
    // get by id
    // set innerHTML or whatever
    $("#" + abilityName).html(abilityName + ": " + abilityObj.curr);
  });

  _.forEach(skills, function (skillObj, skillName) {
    // get by id
    // set innerHTML or whatever
    $("#" + skillName).html(skillName + ": " + skillObj.curr);
  });
}
