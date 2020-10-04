const numHouseQuestions = 2;
const numTotalQuestions = 4;
//const questionsPath = "./questions.json";

var questions = [];
var currentQuestion;
var index = -1;

var userData = {
    'explorer': 0,
    'conqueror': 0,
    'visionary': 0
};

init();

function init() {

    var index = 0;
    for(var i = 0; i < numTotalQuestions * numHouseQuestions; i += 2) {
        questions.push(QuestionDatabase[Random(i, i + 1)]);
        index++;
    }
    pickAnswer(0);
    $('#question-box').fadeTo('slow', 1, function() {

    });
}

function Random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function pickAnswer(answer) {
    
    //if theres already a question, track the answer
    if(currentQuestion != null) {
        userData[currentQuestion.answers[answer].house] += currentQuestion.answers[answer].value;
        console.log(userData);
    }

    index++;

    //if the last question is answered, give results
    if(index >= numTotalQuestions) {
        $.when($('#question-box').fadeOut()).then(
            function() {
                FinishQuiz();
            }
        );
        return;
    }
    

    currentQuestion = questions[index];
    currentQuestion.answers = shuffle(currentQuestion.answers);

    $('#question').html(currentQuestion.question);

    for(var j = 0; j < 4; j++) {
        //console.log(`${j + 1} - ${currentQuestion.answers[j].answer}`);
        $('#button' + j).html(currentQuestion.answers[j].answer);
    }
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function FinishQuiz() {

    var houseDescription;
    var house = 'explorer';
    if(userData['conqueror'] > userData[house])
        house = 'conqueror';
    if(userData['visionary'] > userData[house])
        house = 'visionary';

    switch(house) {
        case 'explorer':
            house = 'Explorers';
            houseDescription = "Thoughtful and inquisitive, an Explorer is well balanced."
            break;
        case 'conqueror':
            house = 'Conquerors';
            houseDescription = "Brave and decisive, a Conqueror knows themselves well."
            break;
        case 'visionary':
            house = 'Visionaries';
            houseDescription = "Wise and knowledgable, a Visionary sees what most cannot."
            break;
    }

    $('#answers-box').css('visibility', 'hidden');
    $('#house-description').html(houseDescription);
    $('#results-box').css('visibility', 'visible');
    $('#question').html(`You were placed in the <b>House of ${house}</b>!`);
    $('.answer-button').prop('disabled', true);
    $('#question-box').fadeIn();
}

function Restart() {
    $.when($('#question-box').fadeOut()).then(function() {
        questions = [];
        currentQuestion = null;
        index = -1;
    
        userData = {
            'explorer': 0,
            'conqueror': 0,
            'visionary': 0
        };

        $('#results-box').css('visibility', 'hidden');
        $('#answers-box').css('visibility', 'visible');
        $('.answer-button').prop('disabled', false);

        init();
    });
}