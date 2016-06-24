// Code goes here
var modulesContainer = document.getElementById('modules');

//object modules has multiple Lernmodule
//ein Lernmodul has multiple Fragen
//eine Frage has multiple Antworten
var modules = {
  'Lernmodul1': [{
    "FrageText": "Wie heisst die Hauptstadt von Frankreich?",
    "correctAnswer": "L1 1",
    "altAnswer_1": "Brüssel",
    "altAnswer_2": "Zürich",
    "altAnswer_3": "Blubb"
  }, {
    "FrageText": "Wie heisst die Hauptstadt von Belgien?",
    "correctAnswer": "L1 2",
    "altAnswer_1": "Brüssel",
    "altAnswer_2": "Zürich",
    "altAnswer_3": "Blubb"
  }],
  "Lernmodul2": [{
    "FrageText": "Wie heisst die Hauptstadt von Belgien?",
    "correctAnswer": "L2 1",
    "altAnswer_1": "Brüssel",
    "altAnswer_2": "Zürich",
    "altAnswer_3": "Blubb"
  }, {
    "FrageText": "Wie heisst die Hauptstadt von Belgien?",
    "correctAnswer": "L2 2",
    "altAnswer_1": "Brüssel",
    "altAnswer_2": "Zürich",
    "altAnswer_3": "Blubb"
  }, {
    "FrageText": "Wie heisst die Hauptstadt von Belgien?",
    "correctAnswer": "L2 3",
    "altAnswer_1": "Brüssel",
    "altAnswer_2": "Zürich",
    "altAnswer_3": "Blubb"
  }]
}

function listModules() {
  if (modulesContainer.hasChildNodes()) {
    while (modulesContainer.firstChild) {
      modulesContainer.removeChild(modulesContainer.firstChild);
    }
  }
  for (var index in modules) {
    //List every Module by Name(key value in modules)
    moduleName = document.createTextNode(index);
    var moduleNameContainer = document.createElement('DIV');
    moduleNameContainer.appendChild(moduleName);
    moduleNameContainer.className = 'moduleRow'

    //create function Buttons on every Module
    moduleNameContainer.appendChild(createButton("start", index));
    moduleNameContainer.appendChild(createButton("edit", index));
    moduleNameContainer.appendChild(createButton("delete", index));

    modulesContainer.appendChild(moduleNameContainer);
  }

}


function addNewButton() {
  var addButtonContainer = document.getElementById('addButton');
  addButtonContainer.appendChild(createButton("add", "1"));
}

//create a button with ID and create a EventListener on it
function createButton(text, id) {
  //create Button Elementand add text
  var button = document.createElement('button');
  var buttonText = document.createTextNode(text);
  button.className = 'buttonDiv';
  button.appendChild(buttonText);
  //Add an ID just in Case
  button.id = text + id;
  //create an Eventlistener on Button
  createEventlistener(button, text, id);

  return button;
}

//Add Functionality to Buttons
function createEventlistener(buttonAction, action, id) {
  buttonAction.addEventListener("click", function() {
    buttonEvent(action, id)
  });
}

function deleteModule(id) {
  delete modules[id];
}

function addModule() {
  var newModuleName = document.getElementById('newModuleName');
  if (modules[newModuleName.value]) {
    alert('Ein Modul mit diesem Namen ist schon Vorhanden');
  } else if (newModuleName.value === "") {
    alert('Kein Name angegeben');
  } else {
    modules[newModuleName.value] = {};
  }
}

function changeToQuiz(moduleID) {
  questionIndexNr = 0;
  points = 0;
  var main = document.getElementById('startContainer');
  var quizWindow = document.querySelector('#questionWindow.quiz');
  main.style.display = 'none';
  quizWindow.style.display = 'block';
  quizWindow.setAttribute("data-module", moduleID);

  displayQuestion(moduleID, questionIndexNr);

  //window.location.href="quizbody.html"

}

function changeToMain() {
  var main = document.getElementById('startContainer');
  var quizWindow = document.querySelector('#questionWindow.quiz');
  main.style.display = 'block';
  quizWindow.style.display = 'none';
}

function buttonEvent(action, id) {
  // Debug Stuff
  console.log(action);
  console.log(id);

  // Witch Action to execute on Call
  switch (action) {
    case "delete":
      deleteModule(id);
      listModules();
      break;
    case "edit":
      initEditMode(id);
      break;
    case "add":
      addModule();
      listModules();
      break;
    case "start":
      changeToQuiz(id);
      break;
    case "back":
      changeToMain();
    default:
      "function not supported";
  }
}

listModules();
addNewButton();