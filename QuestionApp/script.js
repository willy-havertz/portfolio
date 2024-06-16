const question = [
    {
        question: "In the third month after the Israelites left Egypt, they came to a certain desert. Which was the name of the desert?",
        answers: [
            { text: "The Desert of Sinai", correct: true},
            { text: "Moab desert", correct: false},
            { text: "The desert near Canaan", correct: false},
            { text: "The desert besides the Red sea", correct: false},
        ]
    },
    {
        question: "Where was Jesus born?",
        answers: [
            { text: "Nazareth", correct: false},
            { text: "Golgotha", correct: false},
            { text: "Bethlehem", correct: true},
            { text: "Carpenum", correct: false},
        ]
    },
    {
        question: "Who did Jacob fought with in the Bible that got himself injured?",
        answers: [
            { text: "His friend", correct: false},
            { text: "Jesus Christ", correct: false},
            { text: "God", correct: false},
            { text: "An angel", correct: true},
        ]
    },
    {
        question: "What did Jesus tell his parents when they came looking for Him at the temple when He was a boy?",
        answers: [
            { text: "I'm in the house of my Father", correct: true},
            { text: "I'm teaching the priest true ways of God", correct: false},
            { text: "Why are you looking for me", correct: false},
            { text: "Why did you leave me", correct: false},
        ]
    },
    {
        question: "In which book does it say, 'For to us a child is born, to us a son is given, and the government will be on his shoulder and he will be called a Wonderful Councellor, Mighty God, Evalasting Father, Prince of Peace'?",
        answers: [
            { text: "psalm 105:4-5", correct: false},
            { text: "Isaiah 9:6", correct: true},
            { text: "Proverb 20:4", correct: false},
            { text: "Job 7:2-3", correct: false},
        ]
    },
    {
        question: "In which book and verse does it talk about 'The Soul Who Sin Will Die'?",
        answers: [
            { text: "Revelation 12", correct: false},
            { text: "Moab desert", correct: false},
            { text: "Ezekiel 18", correct: true},
            { text: "Proverbs 34", correct: false},
        ]
    },
    {
        question: "Who in the Bible married an adulterous woman as commanded by the Lord?",
        answers: [
            { text: "Micah", correct: false},
            { text: "Joel", correct: false},
            { text: "Habbakkuk", correct: false},
            { text: "Hosea", correct: true},
        ]
    },
    {
        question: "Where did the begger receive his sight?",
        answers: [
            { text: "By the road side", correct: true},
            { text: "At Jericho", correct: false},
            { text: "Canaan", correct: false},
            { text: "Jerusalem", correct: false},
        ]
    },
    {
        question: "How many days did Jonah stay in the fish?",
        answers: [
            { text: "3 days", correct: true},
            { text: "40 days", correct: false},
            { text: "7 days", correct: false},
            { text: "1 day", correct: false},
        ]
    },
    {
        question: "Why was Miriam the sister to Moses outcasted from the camp with others and isolate herself?",
        answers: [
            { text: "She decided isolate on her own", correct: false},
            { text: "She was forced by Moses", correct: false},
            { text: "She was sick of Leprosy", correct: true},
            { text: "She was angry at the peoples behaviours", correct: false},
        ]
    },
    {
        question: "How many days did Jesus fasted?",
        answers: [
            { text: "He never fasted", correct: false},
            { text: "Seven days", correct: false},
            { text: "Three days", correct: false},
            { text: "Forty days", correct: true},
        ]
    },
    {
        question: "Who in the Bible was reffered to Jesus but he was preparing for Jesus Christ to come?",
        answers: [
            { text: "Simon Peter", correct: false},
            { text: "James", correct: false},
            { text: "John", correct: true},
            { text: "Mathew", correct: false},
        ]
    },
    {
        question: "What were the intentions of Saul going to Damascus?",
        answers: [
            { text: "To preach the gospel", correct: false},
            { text: "To persecute christians", correct: true},
            { text: "To visit the King", correct: false},
            { text: "To see Jesus performing miracles", correct: false},
        ]
    },
    {
        question: "What did David use to kill Goliath?",
        answers: [
            { text: "A sling only", correct: false},
            { text: "A machete", correct: false},
            { text: "A sword", correct: false},
            { text: "Stones and a sling", correct: true},
        ]
    },
    {
        question: "When you pick five thousand shillings in the schools compound. What actions should you take?",
        answers: [
            { text: "Hide the money in your pocket and use it later", correct: false},
            { text: "Leave it there", correct: false},
            { text: "Take the money and give it to the schools principles office to find the owner", correct: true},
            { text: "Share it among your friends", correct: false},
        ]
    },
    {
        question: "As a good christian, what will you do when you learn that your friend was planning to kill you?",
        answers: [
            { text: "Pray for your friend", correct: true},
            { text: "Kill him/her", correct: false},
            { text: "Take him/her to the police station", correct: false},
            { text: "Seek for revenge", correct: false},
        ]
    },
    {
        question: "Who annointed David?",
        answers: [
            { text: "Prophet Nathan", correct: true},
            { text: "Samuel", correct: false},
            { text: "Elijah", correct: false},
            { text: "An angel", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;
    currentQuestion.answers.forEach(answer=>{
        const button =document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });

}
function resetState(){
    nextButton.style.desplay = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${question.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < question.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});
startQuiz();
