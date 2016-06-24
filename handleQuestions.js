

function validateQuestion(el) {
  if (el.value !== '') {
    enableAnswerFields(el);
  } else {
    disabledAnswerFields(el);
  }
}

function enableAnswerFields(el) {
  var inputs = document.getElementsByClassName('answers');
  for (i = 0; i < inputs.length; i++) {
    inputs[i].disabled = false;
  }

}

function disabledAnswerFields() {
  var inputs = document.getElementsByClassName('answers');
  for (i = 0; i < inputs.length; i++) {
    inputs[i].disabled = true;
  }
}

var counter = 0;

function checkAnswersValue() {
  var inputs = document.getElementsByClassName('answers');
  for (i = 0; i < inputs.length; i++) {
    console.log(inputs[i].value);
    if (inputs[i].value !== '') {
      counter++;
    }
  }

  console.log('lol');
  if (counter == 4) { 
    counter = 0;
    enableButton('nextQuestionEdit');
    enableButton('editSaveButton');
  } else {
    counter = 0;
    disableButton('nextQuestionEdit');
    disableButton('editSaveButton');
    
  }
}

function getAllAnswers() {
   var answersArr = [];
    var inputs = document.getElementsByClassName('getValue');
  for (i = 0; i < inputs.length; i++) {
    console.log(inputs[i].value);
   answersArr.push(inputs[i].value);
    }
  
  return answersArr;
}

function enableButton(id) {
  document.getElementById(id).className = "";
  document.getElementById(id).className = "inline-block buttonDiv";
}

function disableButton(id) {
  document.getElementById(id).className = "";
  document.getElementById(id).className = "inline-block buttonDiv disabled";
}

function saveNewQuestion(el) {
  var question = document.getElementById('newQuestion').value;
  var module = 'Mathematik';
  var databla = 'newQuestion'
var answers = getAllAnswers();
console.log(answers);
  if (databla) {
    addNewQuestion(module, question, answers, true);
  } else {
    addNewQuestion(module, question, answers, false);
  }
}



/** save the new Question with the answer to module
 *  @param module
 *  @param question
 *  @param answers
 * 
 */
function addNewQuestion(module, question, answers, newQuestion) {
//  module = 'Lernmodul1'
  if (newQuestion) {
    var saveObj = {
      question: question,
    correctAnswer: answers[0],
    altAnswer_1: answers[1],
    altAnswer_2: answers[2],
    altAnswer_3: answers[3]
    }
   modules[module].push(saveObj);
   console.log(modules[module]);
   alert('Erfolgreich gespeichert');

  }
}

/**
 * get the new created four answers
 * 
 */

function getNewAnswer() {
  var answers = [];
  var answerDivs = document.getElementById('test').getElementsByTagName('div');

  for (i = 0; i < childDivs.length; i++) {
    answers.push(answerDivs[i].innerHTML);
  }
  return answers;
}


function deleteQuestion() {
  var inputs = document.getElementsByTagName('input');
  console.log(inputs);
  for (i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
    // inputs[i].disabled = true
  }
}

function renameModule(oldModule ,newModule) {
    renameObj(oldModule, newModule); 
  setModuleID(newModule);
}


function renameObj (oldName, newName) {
     // Do nothing if the names are the same
     if (oldName == newName) {
         return modules;
     }
    // Check for the old property name to avoid a ReferenceError in strict mode.
    if (modules.hasOwnProperty(oldName)) {
        modules[newName] = modules[oldName];
        delete modules[oldName];
    }
    return modules;
};