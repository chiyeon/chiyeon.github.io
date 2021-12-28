function CreateAnswer(answer, house, value) {
    return {
        answer: answer,
        house: house,
        value: value
    };
}

function CreateQuestion(question, answers) {
    return {
        question: question,
        answers: answers
    }
}

var QuestionDatabase = [];

QuestionDatabase.push(CreateQuestion(
    "What came in the mail today?",
    [
        CreateAnswer("a paper airplane", "explorer", 1),
        CreateAnswer("a knife", "conqueror", 1),
        CreateAnswer("a mirror", "visionary", 1),
        CreateAnswer("a camera to vlog", "explorer", 1.5)
    ]
));

QuestionDatabase.push(CreateQuestion(
    "What were you doing last night?",
    [
        CreateAnswer("drawing", "explorer", 1),
        CreateAnswer("buying donuts", "conqueror", 1),
        CreateAnswer("sleeping", "visionary", 1),
        CreateAnswer("traveling", "explorer", 1.5)
    ]
));

QuestionDatabase.push(CreateQuestion(
    "What is something you'd never say to another person?",
    [
        CreateAnswer("Funny monkey gif?", "explorer", 1),
        CreateAnswer("Travis Scott Borgor", "conqueror", 1),
        CreateAnswer("Travie Patty", "visionary", 1),
        CreateAnswer("You look like the bacon in a travis scott burger", "conqueror", 1.5)  
    ]
));

QuestionDatabase.push(CreateQuestion(
    "How did the duck feel crossing the road?",
    [
        CreateAnswer("curious", "explorer", 1),
        CreateAnswer("at ease", "conqueror", 1),
        CreateAnswer("cautious", "visionary", 1),
        CreateAnswer("rushed", "conqueror", 1.5)
    ]
));

QuestionDatabase.push(CreateQuestion(
    "What are you eating tonight?",
    [
        CreateAnswer("a sandwich", "explorer", 1),
        CreateAnswer("two sandwiches", "conqueror", 1),
        CreateAnswer("a salad", "visionary", 1),
        CreateAnswer("a five course dinner", "visionary", 1.5)
    ]
));

QuestionDatabase.push(CreateQuestion(
    "When you grow up, your job will be",
    [
        CreateAnswer("making music", "explorer", 1),
        CreateAnswer("going to space", "conqueror", 1),
        CreateAnswer("teaching", "visionary", 1),
        CreateAnswer("behind a desk. Realistically.", "visionary", 1.5)
    ]
));

QuestionDatabase.push(CreateQuestion(
    "I'm going to ____ one day.",
    [
        CreateAnswer("study culinary arts", "explorer", 1),
        CreateAnswer("learn to fence", "conqueror", 1),
        CreateAnswer("write a book", "visionary", 1),
        CreateAnswer("touch travis scott", "visionary", 1.5),
    ]
))

QuestionDatabase.push(CreateQuestion(
    "Whats your favorite number ?",
    [
        CreateAnswer("7", "explorer", 1),
        CreateAnswer("1", "conqueror", 1),
        CreateAnswer("6", "visionary", 1),
        CreateAnswer("9", "conqueror", 1.5),
    ]
))