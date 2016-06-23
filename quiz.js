var mainContainer = document.getElementById('questionWindow');
var questionIndexNr = 1;
var questionIndex = "Frage" + questionIndexNr;
var points = 0;


//temporary testing
var modules = {
  "Lernmodul1": {
    "Frage1": {
      "FrageText": "Wie heisst die Hauptstadt von Frankreich?",
      "correctAnswer": "Paris",
      "altAnswer_1": "Brüssel",
      "altAnswer_2": "Zürich",
      "altAnswer_3": "Blubb"
    },
    "Frage2": {
      "FrageText": "Wie heisst die Hauptstadt von Belgien?",
      "correctAnswer": "Paris",
      "altAnswer_1": "Brüssel",
      "altAnswer_2": "Zürich",
      "altAnswer_3": "Blubb"
    }
  },
  "Lernmodul2": {
    "Frage1": "a"
  }
}

function displayQuestion(id, questionIndex) {
  var questionContainer = document.createElement('div');
  questionContainer.id = "question";
  var answerContainer = document.createElement('div');
  answerContainer.id = "questionContainer";
  if (mainContainer.hasChildNodes()) {
    while (mainContainer.firstChild) {
      mainContainer.removeChild(mainContainer.firstChild);
    }
  }
  console.log(id, questionIndex)
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
  var titleContainer = document.createElement('div');
  titleContainer.id = "titleContainer"
  var titleH1 = document.createElement('h1');
  var titleText = document.createTextNode("Quizly");
  titleH1.appendChild(titleText);
  titleContainer.appendChild(titleH1);
  mainContainer.appendChild(displayPoints(points));
  mainContainer.appendChild(titleContainer);
  mainContainer.appendChild(questionContainer);
  mainContainer.appendChild(answerContainer);
}

function displayPoints(points) {
  var pointsContainer = document.createElement('div');
  pointsContainer.id = 'points';
  pointsAsTxt = points.toString();
  var pointsText = document.createTextNode(pointsAsTxt + " Points")
  pointsContainer.appendChild(pointsText);
  return pointsContainer;
}

function createEventListener(button, action, id) {
  button.addEventListener("click", function() {
    chekAnswer(action, id)
  });
}

function chekAnswer(value, object) {
  var correctBox = document.getElementById(object.correctAnswer);
  var falseBox = document.getElementById(object[value]);
  if (value === "correctAnswer") {
    //mark correct
    correctBox.style.backgroundColor = "green";
    points++;
    setTimeout(nextQuestion, 3000);

  } else {
    //Mark false and mark the correct answer
    falseBox.style.backgroundColor = "red";
    correctBox.style.backgroundColor = "green";
    setTimeout(nextQuestion, 3000);
  }
  console.log(value);
}

function nextQuestion() {
  questionIndexNr++;
  questionIndex = "Frage" + questionIndexNr;
  displayQuestion("Lernmodul1", questionIndex);
}

displayQuestion("Lernmodul1", "Frage1");