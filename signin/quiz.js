const questions = [
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5"],
        correctAnswer: "4"
    },
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin"],
        correctAnswer: "Paris"
    },
    {
        question: "What is the color of the sky?",
        options: ["Blue", "Green", "Red"],
        correctAnswer: "Blue"
    }
];

function generateQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';
    
    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `<p>${question.question}</p>`;
        
        question.options.forEach((option, i) => {
            const inputElement = document.createElement('input');
            inputElement.type = 'radio';
            inputElement.name = `question-${index}`;
            inputElement.value = option;
            questionElement.appendChild(inputElement);
            questionElement.appendChild(document.createTextNode(option));
            questionElement.appendChild(document.createElement('br'));
        });

        quizContainer.appendChild(questionElement);
    });
}

function submitQuiz() {
    let score = 0;
    
    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
        
        if (selectedOption && selectedOption.value === question.correctAnswer) {
            score++;
        }
    });

    document.getElementById('score-container').textContent = `Your score is: ${score}/${questions.length}`;
}

function reloadQuiz() {
    location.reload();
}

// Generate the quiz when the page loads
generateQuiz();
