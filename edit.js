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
  var editWindow = document.querySelector('#questionWindow.edit');
  editWindow.style.display = 'block';
  setModuleName(moduleID);
  setQuestionName(moduleID);
  setInputs(moduleID);
}

function setModuleName(moduleID) {
  var moduleInput = document.querySelector('input#moduleInput');
  moduleInput.value = moduleID;
}

function setQuestionName(moduleID) {
  var moduleInput = document.querySelector('input#newQuestion');
  console.log(modules);
  moduleInput.value = modules[moduleID][editIndex]['FrageText'];
}

function setInputs(moduleID) {
  var inputs = document.getElementsByClassName('answers');
  inputs[0].value = modules[moduleID][editIndex]['correctAnswer'];
  inputs[1].value = modules[moduleID][editIndex]['altAnswer_1'];
  inputs[2].value = modules[moduleID][editIndex]['altAnswer_2'];
  inputs[3].value = modules[moduleID][editIndex]['altAnswer_3'];
  enableAnswerFields();
  enableButton('nextQuestionEdit');
  enableButton('editSaveButton');
}

function nextQuestionEdit() {
  saveChangedQuestion();
  editIndex++;
  initEditMode(getModuleID());
}

function previousQuestionEdit() {

}
function saveChangedQuestion(moduleID) {
  var inputValues = getAllAnswers();
  if (inputValues[0].value != moduleID) {
    renameModule(inputValues[0].value, moduleID)
  }
  console.log(inputValues);

}

function addNewQuestion() {
  alert(1);
}