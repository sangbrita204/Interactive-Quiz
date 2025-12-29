// Question Bank: 5 General Knowledge Questions
const quizData = [
    {
        question: "1. What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: 0
    },
    {
        question: "2. Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
        answer: 0
    },
    {
        question: "3. What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Saturn", "Mars"],
        answer: 1
    },
    {
        question: "4. Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Gold", "Iron", "Hydrogen"],
        answer: 0
    },
    {
        question: "5. In which year did the first man land on the moon?",
        options: ["1965", "1969", "1972", "1959"],
        answer: 1
    }
];

// Get the container where questions will be displayed
const quizContainer = document.getElementById("quiz");

// Function to load all questions dynamically
function loadQuiz() {
    quizData.forEach((q, index) => {
        const div = document.createElement("div");
        div.classList.add("question");

        // Add question and options
        div.innerHTML = `
            <p>${q.question}</p>
            <div class="options">
                ${q.options.map((opt, i) =>
                    `<label>
                        <input type="radio" name="q${index}" value="${i}">
                        ${opt}
                    </label>`
                ).join("")}
            </div>
        `;

        quizContainer.appendChild(div);
    });
}

// Function to calculate score when user clicks Submit
function submitQuiz() {
    let score = 0;

    quizData.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.answer) {
            score++;
        }
    });

    // Display result
    document.getElementById("result").innerHTML =
        `You scored ${score} out of ${quizData.length} questions correctly.`;
}

// Load the quiz when page loads
loadQuiz();
