const questions = [
  {
    question: "Inside which HTML element do we put the JavaScript ?",
    answer: [
      { text: "<js>", correct: false },
      { text: "<head>", correct: false },
      { text: "<script>", correct: true },
      { text: "<link>", correct: false },
    ],
  },
  {
    question: "In which country did the Olympic games originate?",
    answer: [
      { text: "Japan", correct: false },
      { text: "India", correct: false },
      { text: "China", correct: false },
      { text: "Greece", correct: true },
    ],
  },
  {
    question: "In which year did the Titanic sink? ",
    answer: [
      { text: "1916", correct: false },
      { text: "1912", correct: true },
      { text: "1920", correct: false },
      { text: "1921", correct: false },
    ],
  },
  {
    question: "Which animal is known as the 'Ship of the Desert'?",
    answer: [
      { text: "Camel", correct: true },
      { text: "Monkey", correct: false },
      { text: "Lion", correct: false },
      { text: "Tiger", correct: false },
    ],
  },
  {
    question: "Name the National fruit of India?",
    answer: [
      { text: "Banana", correct: false },
      { text: "Mango", correct: true },
      { text: "Kiwi", correct: false },
      { text: "Apple", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const buttonElements = document.getElementById("ans-btn");
const nextBtnElement = document.getElementById("next-btn");
// const mainbtn = document.querySelectorAll(".main-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtnElement.innerHTML = "Next";
  showQuestions();
}

function showQuestions() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("main-btn");
    button.classList.add("no-hover");
    buttonElements.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextBtnElement.style.display = "none";
  while (buttonElements.firstChild) {
    buttonElements.removeChild(buttonElements.firstChild);
  }
}

function selectAnswer(e) {
  const selectbtn = e.target;
  const isCorrect = selectbtn.dataset.correct === "true";
  if (isCorrect) {
    selectbtn.classList.add("correct");
    score++;
  } else {
    selectbtn.classList.add("incorrect");
  }

  Array.from(buttonElements.children).forEach((button) => {
    const isCorrect = button.dataset.correct === "true";

    if (isCorrect) {
      button.classList.add("correct");
    } else {
      button.classList.add("incorrect");
    }
    button.classList.remove("no-hover");
    selectbtn.classList.add("border");
  });

  nextBtnElement.style.display = "block";
}

nextBtnElement.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestions();
  } else {
    endQuiz();
  }
});

function endQuiz() {
  questionElement.innerHTML = "Quiz ended. Your score is: " + score;
}

startQuiz();
