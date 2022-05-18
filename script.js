let questions = [
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

    {
        "question": "Wer bestimmt beim Elfmeterschießen, auf welches Tor geschossen wird?",
        "answer_1": "Der Torshütze",
        "answer_2": "Der Torwart.",
        "answer_3": "Der Schiedsrichter.",
        "answer_4": "Der Balljunge",
        "right_answer": 3

    },

    {
        "question": "Welche Mannschaft wurde 2021/2022 Meister in der Türkei ?",
        "answer_1": "Trabzonspor",
        "answer_2": "Besiktas Istanbul",
        "answer_3": "Fenerbahce Istanbul",
        "answer_4": "Galatasaray Istanbul",
        "right_answer": 3

    }


];

let rightQuestions = 0;

let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}



function showQuestion() {
    

    if (currentQuestion >= questions.length) {
        // Show End Screen
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none';
          
        document.getElementById('amount-questions').innerHTML = questions.length;
        document.getElementById('amount-right-questions').innerHTML = rightQuestions;
        document.getElementById('header-image').src = 'img/trophy.jpg'
    } else { // Show Question
    
        let percent = currentQuestion / question.length;
        percent = Math.round (percent * 100);
        document.getElementfById('progress-bar').innerHTML = `${percent} %`;
        //console.log('Fortschritt:' , percent);

        let question = questions[currentQuestion];


        document.getElementById('question-number').innerHTML = currentQuestion + 1;
        document.getElementById('questionText').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    /*console.log('selected answer is', selection)*/
    let selectedQuestionNumber = selection.slice(-1);
    /*console.log('selectionQuestionNumber is ', selectedQuestionNumber);
    console.log('current question is ', question['right_answer']);*/

    let idOfRightAnwer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        console.log('Richtige Antwort!');
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestions++;
    } else {
        console.log('Falsche Antwort!');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnwer).parentNode.classList.add('bg-success');
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