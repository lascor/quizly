function initEditMode (moduleID) {
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
  moduleInput.value = modules[moduleID][0]['FrageText'];
  console.log(modules[moduleID]);
}

function setInputs(moduleID) {
  
}