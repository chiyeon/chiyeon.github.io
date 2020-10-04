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
        CreateAnswer("deez nuts", "explorer", 1.5)
    ]
));

QuestionDatabase.push(CreateQuestion(
    "What were you doing last night?",
    [
        CreateAnswer("sleeping", "explorer", 1),
        CreateAnswer("going to buy some donuts", "conqueror", 1),
        CreateAnswer("touching Justin Mendoza", "visionary", 1),
        CreateAnswer("off on an adventure", "explorer", 1.5)
    ]
));

QuestionDatabase.push(CreateQuestion(
    "What is something you'll never say to another person?",
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
        CreateAnswer("like a fortnite burgor", "explorer", 1),
        CreateAnswer("horny", "conqueror", 1),
        CreateAnswer("funny monkey gif", "visionary", 1),
        CreateAnswer("murderous", "conqueror", 1.5)
    ]
));

QuestionDatabase.push(CreateQuestion(
    "What did you make for dinner?",
    [
        CreateAnswer("a sandwich", "explorer", 1),
        CreateAnswer("remi from rattatoulie", "conqueror", 1),
        CreateAnswer("a salad", "visionary", 1),
        CreateAnswer("a five course dinner", "visionary", 1.5)
    ]
));

QuestionDatabase.push(CreateQuestion(
    "When you grow up, your job will be",
    [
        CreateAnswer("listening to music", "explorer", 1),
        CreateAnswer("playing fortnite", "conqueror", 1),
        CreateAnswer("painting rocks", "visionary", 1),
        CreateAnswer("charging batteries", "visionary", 1.5)
    ]
));

QuestionDatabase.push(CreateQuestion(
    "I'm going to ____ one day.",
    [
        CreateAnswer("study culinary arts", "explorer", 1),
        CreateAnswer("have sex", "conqueror", 1),
        CreateAnswer("eat the travis scott burger", "visionary", 1),
        CreateAnswer("touch travis scott", "visionary", 1.5),
    ]
))

QuestionDatabase.push(CreateQuestion(
    "______ makes me really happy.",
    [
        CreateAnswer("The Travis Scott Burger", "explorer", 1),
        CreateAnswer("Playing Fortnite", "conqueror", 1),
        CreateAnswer("Playing Valorant", "visionary", 1),
        CreateAnswer("Curb stomping you", "conqueror", 1.5),
    ]
))