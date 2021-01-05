const numHouseQuestions = 2;
const numTotalQuestions = 4;

var questions, currentQuestion, userData, index;

function init() {

    //assign default values to variables

    //hold randomly selected questions
    questions = [];
    //active question
    currentQuestion = null;
    //to iterate through questions
    index = -1;

    //points given per question answered
    userData = {
        'explorer': 0,
        'conqueror': 0,
        'visionary': 0
    };

    /*
    steal random questions based on QuestionDatabase and 
    Total Questions (how many will the user answer) and
    number of House Questions (how many cater to a specific house,
        usually text to each other in the database)
    */
    for(var i = 0; i < numTotalQuestions * numHouseQuestions; i += 2) {
        questions.push(QuestionDatabase[Random(i, i + 1)]);
    }

    //start answering
    pickAnswer(0);
    $('#question-box').fadeIn();
}

function pickAnswer(answer) {
    
    //if theres already a question, track the answer
    if(currentQuestion != null) {
        userData[currentQuestion.answers[answer].house] += currentQuestion.answers[answer].value;
    }

    index++;

    //update the progress bar
    var percentComplete = (index ) / numTotalQuestions * 100;
    $('#progress-bar').css('width', percentComplete + '%');

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
        $('#button' + j).html(currentQuestion.answers[j].answer);
    }
}

function FinishQuiz() {

    var houseDescription;
    var house = 'explorer';

    //pls fix valve
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

    //remove selectable answers
    $('#answers-box').css('visibility', 'hidden');
    $('.answer-button').prop('disabled', true);

    //remove progress bar
    $('#progress-bar').css('visibility', 'hidden');
    
    //show results and update house description
    $('#house-description').html(houseDescription);
    $('#results-box').css('visibility', 'visible');
    $('#question').html(`You were placed in the House of ${house}!`);
    //make sure text is highlightable!
    $('#question').addClass('highlightable-text');

    //fade box again
    $('#question-box').fadeIn();
}

function Restart() {
    //fade out box
    $.when($('#question-box').fadeOut()).then(function() {

        //hide the results
        $('#results-box').css('visibility', 'hidden');

        //show progress bar
        $('#progress-bar').css('visibility', 'visible');

        //show answers and make selectable again
        $('#answers-box').css('visibility', 'visible');
        $('.answer-button').prop('disabled', false);

        //make question unhighlightable
        $('#question').removeClass('highlightable-text');

        init();
    });
}

function Random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//courtesy of some guy on stack, ur a legend man im too lazy to write this
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

init();