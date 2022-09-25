import { consumables, abilities, skills } from './player.js';
import { actionsData } from './actions.js';

function generateAction(actionName, actionObj, ...funcArgs) {
  $('#actionDiv').append(
    $('<div class="col"></div>').append(
      $('<div class="card"></div>').append(
        $('<div class="card-body"></div>')
          .append(
            $('<button type="button" class="btn btn-primary fs-6"></button>')
              .click(function () {
                actionObj.func.apply(actionObj, funcArgs);
                setDirty();
              })
              .append(actionName)
          )
          .append(
            actionObj.subtitle == null
              ? `<h6></h6>`
              : `<h6 class="card-subtitle text-muted mt-1">` +
                  actionObj.subtitle +
                  `</h6>`
          )
          .append(
            `<div class="card-text" style="font-style:italic">` +
              actionObj.desc +
              `</div>`
          )
      )
    )
  );
}

function generateActionsDisplay() {
  _.forEach(actionsData, function (actionObj, actionName) {
    generateAction(actionName, actionObj);
  });
}

function generateConsumablesDisplay(){
  $('#consumablesDisplay').append(
    $('<p></p>').html('Consumables').addClass('fs-4')
  );
  $('#consumablesDisplay').append($('<ul></ul>'));
  _.forEach(consumables, function (consumableObj, consumableName) {
    $('#consumablesDisplay > ul').append(
      $('<div></div>').html(consumableName).attr('id', consumableName)
    );
  });
}

function generateAbilitiesDisplay() {
  $('#abilitiesDisplay').append(
    $('<p></p>').html('Abilities').addClass('fs-4')
  );
  $('#abilitiesDisplay').append($('<ul></ul>'));
  _.forEach(abilities, function (abilityObj, abilityName) {
    $('#abilitiesDisplay > ul').append(
      $('<div></div>').html(abilityName).attr('id', abilityName)
    );
  });
}

function generateSkillsDisplay() {
  $('#skillsDisplay').append($('<p></p>').html('Skills').addClass('fs-4'));
  $('#skillsDisplay').append($('<ul></ul>'));
  _.forEach(skills, function (skillObj, skillName) {
    $('#skillsDisplay > ul').append(
      $('<div></div>').html(skillName).attr('id', skillName)
    );
  });
}

export function generateDisplays() {
  generateConsumablesDisplay();
  generateAbilitiesDisplay();
  generateSkillsDisplay();
  generateActionsDisplay();
}

let dirty = false;
/**
 * tells the screen that it should update.
 */
export function setDirty() {
  dirty = true;
}
/**
 * updates entire screen
 *
 * fetches an update from each consumable/ability/skill
 *
 */
export function updateDisplay() {
  if (!dirty) {
    return;
  }
  dirty = false;

  _.forEach(consumables, function (consumableObj, consumableName) {
    // get by id
    // set innerHTML or whatever
    $('#' + consumableName).html(
      consumableName + ': ' + consumableObj.curr + '/' + consumableObj.max
    );
  });

  _.forEach(abilities, function (abilityObj, abilityName) {
    // get by id
    // set innerHTML or whatever
    $('#' + abilityName).html(abilityName + ': ' + abilityObj.curr);
  });

  _.forEach(skills, function (skillObj, skillName) {
    // get by id
    // set innerHTML or whatever
    $('#' + skillName).html(skillName + ': ' + skillObj.curr);
  });
}
