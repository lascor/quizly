var mainContainer = document.getElementById('main');

//temporary testing
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
    "Frage1": "a"
  }
}

function goToMain() {
  
}

function displayPoints() {
  
}

function displayQuestion (id) {
  var questionContainer = document.createElement('div');
  questionContainer.id = "question";
  var answerContainer = document.createElement('div');
  answerContainer.id = "questionContainer";
  
  //display Question
  
  //display Answers
  for(var index in modules[id]) {
    //create Answers
    console.log(index)
    var answerDiv = document.createElement('div');
    var answerText = document.createTextNode(index);
    answerDiv.appendChild(answerText);
    //insert Answers to container
    answerContainer.appendChild(answerDiv);
  }
  
  mainContainer.appendChild(questionContainer);
  mainContainer.appendChild(answerContainer);
}

displayQuestion("Lernmodul1");