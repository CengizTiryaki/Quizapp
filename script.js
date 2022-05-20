let questions = [
    

    {
        "question": "Wo findet dieses Jahr die Fußball WM statt?",
        "answer_1": "Kleine Freiheit",
        "answer_2": "Gnadental",
        "answer_3": "Ballerbude",
        "answer_4": "Katar",
        "right_answer": 4

    },

    {
        "question": "Wer ist Präsident des DFB?",
        "answer_1": "Derya",
        "answer_2": "Bernd Neuendorf",
        "answer_3": "Jennifer",
        "answer_4": "Miriam",
        "right_answer": 2

    },

    {
        "question": "Wer bestimmt beim Elfmeterschießen, auf welches Tor geschossen wird?",
        "answer_1": "Der Torshütze",
        "answer_2": "Der Torwart.",
        "answer_3": "Der Schiedsrichter.",
        "answer_4": "Der Balljunge",
        "right_answer": 3

    },

    {
        "question": "Welche Mannschaft wurde 2022 Meister in der Türkei ?",
        "answer_1": "Trabzonspor",
        "answer_2": "Besiktas Istanbul",
        "answer_3": "Fenerbahce Istanbul",
        "answer_4": "Galatasaray Istanbul",
        "right_answer": 1


    },

    {
        "question": "Aus wie vielen Fünf- und Sechsecken besteht ein Fußball?",
        "answer_1": 14,
        "answer_2": 26,
        "answer_3": 32,
        "answer_4": 6,
        "right_answer": 3

    },

    {
        "question": "Wer war amtierender Fußball-Europameister 2012?",
        "answer_1": "Portugal",
        "answer_2": "Spanien",
        "answer_3": "Deutschland",
        "answer_4": "Italien",
        "right_answer": 2

    },

    {
        "question": "Welches ist das größte Fußballstadion in Europa?",
        "answer_1": "Das Olympiastadion in Berlin.",
        "answer_2": "Das Camp Nou in Barcelona.",
        "answer_3": "Das Wembley-Stadion in London.",
        "answer_4": "Medical Park Stadion in Trabzon",
        "right_answer": 2

    },

 

  


];

let rightQuestions = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');
let AUDIO_GAMEOVER = new Audio('audio/gameover.mp3')
let AUDIO_RESTART = new Audio('audio/restart.mp3')
function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}



function showQuestion() {


    if (gameIsOver()) {
       showEndScreen();
    } else { 
        updateProgressBar();
        updateToNextQuestion();
    }
}

function gameIsOver() {
    return currentQuestion >= questions.length;
}

function showEndScreen() {
    
     document.getElementById('endScreen').style = '';
     AUDIO_GAMEOVER.play();
     document.getElementById('questionBody').style = 'display: none';

     document.getElementById('amount-questions').innerHTML = questions.length;
     document.getElementById('amount-right-questions').innerHTML = rightQuestions;
     document.getElementById('header-image').src = 'img/trophy.jpg';
}

function updateProgressBar() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style = `width: ${percent}%;`;
    //console.log('Fortschritt:' , percent);
}

function updateToNextQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnwer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {//Richtige Frage beantwortet
      
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play();
        rightQuestions++;
    } else {
        console.log('Falsche Antwort!');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnwer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }
    document.getElementById('next-button').disabled = false;
}
//tilde fragen!!!!!
function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButton();
    showQuestion();




}

function resetAnswerButton() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');


}
function restartGame() {

    AUDIO_RESTART.play();

    document.getElementById('header-image').src = 'img/ball.jpg';
    document.getElementById('questionBody').style = ''; //questionBody wieder anzeigen
    document.getElementById('endScreen').style = 'display: none'; //Endscreen ausblenden
    

    rightQuestions = 0;
    currentQuestion = 0;

    init();


}
