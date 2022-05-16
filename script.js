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


let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}



function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer (selection) {
   console.log('selected answer is', selection)


}