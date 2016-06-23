// Code goes here

var modulesContainer = document.getElementById('modules');

//object modules has multiple Lernmodule
//ein Lernmodul has multiple Fragen
//eine Frage has multiple Antworten
var modules = {
  "Lernmodul1" : {
    "Frage1" : {
      "Antwort1": "a",
      "Antwort2": "b"
    },
    "Frage2" : {
      "Antwort1": "a",
      "Antwort2": "b"
    }
  },
  "Lernmodul2" : {
    "frage1": "a"
  }
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
    
    //create function Buttons on every Module
    moduleNameContainer.appendChild(createButton("start",index));
    moduleNameContainer.appendChild(createButton("edit",index));
    moduleNameContainer.appendChild(createButton("delete",index));

    modulesContainer.appendChild(moduleNameContainer);
  }

}


function addNewButton() {
  var addButtonContainer = document.getElementById('addButton');
  addButtonContainer.appendChild(createButton("add","1"));
}

//create a button with ID and create a EventListener on it
function createButton(text,id) {
  //create Button Elementand add text
  var button = document.createElement('button');
  var buttonText = document.createTextNode(text);
  button.appendChild(buttonText);
  //Add an ID just in Case
  button.id = text + id;
  //create an Eventlistener on Button
  createEventlistener(button,text,id);
  
  return button; 
}

//Add Functionality to Buttons
function createEventlistener(buttonAction,action,id) {
  buttonAction.addEventListener("click", function() {buttonEvent(action,id)});
}

function deleteModule(id) {
  delete modules[id];
}

function addModule() {
  var newModuleName = document.getElementById('newModuleName');
  if(modules[newModuleName.value]){
    alert('Ein Modul mit diesem Namen ist schon Vorhanden');
  } else {
    modules[newModuleName.value] = {}; 
  }
}

function buttonEvent (action,id) {
  // Debug Stuff
  console.log(action);
  console.log(id);
  
  // Witch Action to execute on Call
  switch(action) {
    case "delete":
        deleteModule(id);
        listModules();
      break;
    case "edit":
        alert("Action edit " + id);
      break;
    case "add":
        addModule();
        listModules();
      break;
    case "start":
        alert("start Module");
      break;
    default:
      "function not supported";
  }
}

listModules();
addNewButton();
