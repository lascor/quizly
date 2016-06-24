var editIndex = 0;
var activeModuleID;

function setModuleID(moduleID) {
  activeModuleID = moduleID;
}

function getModuleID() {
  return activeModuleID;
}

function initEditMode(moduleID) {
  setModuleID(moduleID);
  if (modules[moduleID].length === 0) {
    createNewQuestion();
  } else {
    var editWindow = document.querySelector('#questionWindow.edit');
    editWindow.style.display = 'block';
    setModuleName(moduleID);
    setQuestionName(moduleID);
    setInputs(moduleID);
  }
}

function createNewQuestion() {
  var exitButton = document.getElementById('deleteButton');
  exitButton.removeChild(exitButton.firstChild);
  exitButton.appendChild(document.createTextNode("Abbrechen"));
  exitButton.onclick = exitEdit;
  var moduleID = getModuleID();
  var newQuestionConstruct = {
    "correctAnswer": "",
    "altAnswer_1": "",
    "altAnswer_2": "",
    "altAnswer_3": "",
    "FrageText": ""
  }
  editIndex = modules[moduleID].length
    //add empty Question to Object
  modules[moduleID].push(newQuestionConstruct);
  console.log(modules);
  initEditMode(moduleID);
  //disableButton("previousQuestionEdit");
  //disableButton("nextQuestionEdit");
}

function exitEdit() {
  var moduleID = getModuleID();
  deleteQuestion();
  changeToMain();
  var exitButton = document.getElementById('deleteButton');
  exitButton.removeChild(exitButton.firstChild);
  exitButton.appendChild(document.createTextNode("Frage Löschen"));
  exitButton.onclick = saveAndExit;
}

function setModuleName(moduleID) {
  var moduleInput = document.querySelector('input#moduleInput');
  moduleInput.value = moduleID;
}

function setQuestionName(moduleID) {
  var moduleInput = document.querySelector('input#newQuestion');
  //console.log(modules);
  moduleInput.value = modules[moduleID][editIndex]['FrageText'];
}

function setInputs(moduleID) {
  var inputs = document.getElementsByClassName('answers');
  //alert(editIndex);
  inputs[0].value = modules[moduleID][editIndex]['correctAnswer'];
  inputs[1].value = modules[moduleID][editIndex]['altAnswer_1'];
  inputs[2].value = modules[moduleID][editIndex]['altAnswer_2'];
  inputs[3].value = modules[moduleID][editIndex]['altAnswer_3'];
  enableAnswerFields();
  enableButton('nextQuestionEdit');
  enableButton('editSaveButton');
}

function nextQuestionEdit() {
  saveChangedQuestion(getModuleID());
  if (editIndex === modules[getModuleID()].length - 1) {
    alert("Sie sind bereits bei der Letzten Frage");
  } else {
    editIndex++;
    initEditMode(getModuleID());
  }
}

function previousQuestionEdit() {
  saveChangedQuestion(getModuleID());
  if (editIndex === 0) {
    alert("Bereits bei der ersten Frage");
  } else {
    editIndex--;
    initEditMode(getModuleID());
  }
}

function saveChangedQuestion(moduleID) {
  var inputValues = getAllAnswers();
  //console.log("SaveChengedQuestion: ", moduleID, editIndex, inputValues, modules);
  if (inputValues[0].value != moduleID) {
    renameModule(inputValues[0].value, moduleID)
  }
  modules[moduleID][editIndex].FrageText = inputValues[1];
  modules[moduleID][editIndex].correctAnswer = inputValues[2];
  modules[moduleID][editIndex].altAnswer_1 = inputValues[3];
  modules[moduleID][editIndex].altAnswer_2 = inputValues[4];
  modules[moduleID][editIndex].altAnswer_3 = inputValues[5];

}

function saveAndExit() {
  saveChangedQuestion(getModuleID());
  alert("Frage gespeichert.");
  changeToMain();
}