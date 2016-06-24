var mainContainer = document.getElementById('questionWindow');
var questionIndexNr = 0;
var points = 0;

function displayQuestion(id, questionIndex) {
  //get containers
  var questionContainer = document.createElement('div');
  questionContainer.id = "question";
  var answerContainer = document.createElement('div');
  answerContainer.id = "questionContainer";
  
  //clean main if has nodes
  if (mainContainer.hasChildNodes()) {
    while (mainContainer.firstChild) {
      mainContainer.removeChild(mainContainer.firstChild);
    }
  }
  console.log(id, questionIndex,modules);
    //display Question
  questionContainer.appendChild(document.createTextNode(modules[id][questionIndex].FrageText)); // check  

  //display Answers
  for (var index2 in modules[id][questionIndex]) {
    //create Answers but ignore Questiontext of object
    if (index2 != "FrageText") {
      var answerDiv = document.createElement('div');
      var answerText = document.createTextNode(modules[id][questionIndex][index2]);
      answerDiv.appendChild(answerText);
      answerDiv.id = modules[id][questionIndex][index2];
      //register Onklick Event
      createEventListener(answerDiv, index2, modules[id][questionIndex]);
      //insert Answers to container
      answerContainer.appendChild(answerDiv);
    }
  }
  
  //Build Page Content // ignore render count for now ;)
  mainContainer.appendChild(displayPoints(points));
  mainContainer.appendChild(makeTitle());
  mainContainer.appendChild(questionContainer);
  mainContainer.appendChild(answerContainer);
}

function makeTitle() {
    // make Title
  var titleContainer = document.createElement('div');
  titleContainer.id = "titleContainer";
  var titleH1 = document.createElement('h1');
  var titleText = document.createTextNode("Quizly");
  titleH1.appendChild(titleText);
  titleContainer.appendChild(titleH1);
  return titleContainer;
}

//create and fill points Container
function displayPoints(points) {
  var pointsContainer = document.createElement('div');
  pointsContainer.id = 'points';
  var pointsAsTxt = points.toString();
  var pointsText = document.createTextNode(pointsAsTxt + " Points");
  pointsContainer.appendChild(pointsText);
  return pointsContainer;
}

//update PointsContianer
function updatePoints() {
  var pointsContainer = document.getElementById('points');
  var pointsAsTxt = points.toString();
  var pointsText = document.createTextNode(pointsAsTxt + " Points");
  pointsContainer.removeChild(pointsContainer.firstChild);
  pointsContainer.appendChild(pointsText);
}

function createEventListener(button, action, id) {
  button.addEventListener("click", function() {
    chekAnswer(action, id);
  });
}

function chekAnswer(value, object) {
  var correctBox = document.getElementById(object.correctAnswer);
  var falseBox = document.getElementById(object[value]);
  if (value === "correctAnswer") {
    //mark correct
    correctBox.style.backgroundColor = "green";
    points++;
    updatePoints();
    setTimeout(nextQuestion, 3000);

  } else {
    //Mark false and mark the correct answer
    falseBox.style.backgroundColor = "red";
    correctBox.style.backgroundColor = "#00c853";
    setTimeout(nextQuestion, 3000);
  }
  console.log(value);
}

function displayGameOver(moduleID) {
  //clean Main container
  if (mainContainer.hasChildNodes()) {
    while (mainContainer.firstChild) {
      mainContainer.removeChild(mainContainer.firstChild);
    }
  }
  var gameOverText = document.createTextNode("Sie haben das Lernmodul abgeschlossen.\nSie haben " + points.toString() + " von " + modules[moduleID].length + " Punkten Erreicht!"); 
  mainContainer.appendChild(makeTitle());
  mainContainer.appendChild(gameOverText);
  mainContainer.appendChild(createButton("back","1"));
  
}

function nextQuestion() {
  var questionWindow = document.querySelector('#questionWindow.quiz');
  var moduleID = questionWindow.getAttribute("data-module");
  questionIndexNr++;
  if(questionIndexNr >= modules[moduleID].length) {
    displayGameOver(moduleID);
  } else {
    displayQuestion(moduleID, questionIndexNr);
  }
}

