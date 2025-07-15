const quizData = [
  {
    question: "What does API stand for?",
    choices: ["Application Programming Interface", "Advanced Program Integration", "Automated Process Input", "Application Process Integration"],
    answer: 0
  },
  {
    question: "Which protocol is commonly used for RESTful APIs?",
    choices: ["FTP", "SMTP", "HTTP", "SSH"],
    answer: 2
  },
  {
    question: "Which format is most commonly used in API responses?",
    choices: ["XML", "YAML", "CSV", "JSON"],
    answer: 3
  },
  {
    question: "SOAP stands for?",
    choices: ["Simple Object Access Protocol", "System Object API Process", "Service Oriented Access Protocol", "Secure Object Access Protocol"],
    answer: 0
  },
  {
    question: "REST is?",
    choices: ["A language", "A database", "An API architectural style", "A network protocol"],
    answer: 2
  },
  {
    question: "Which HTTP method is used to update a resource?",
    choices: ["GET", "POST", "PUT", "FETCH"],
    answer: 2
  },
  {
    question: "What status code means 'Not Found'?",
    choices: ["200", "302", "404", "500"],
    answer: 2
  },
  {
    question: "Which HTTP method is used to create a resource?",
    choices: ["GET", "POST", "PATCH", "HEAD"],
    answer: 1
  },
  {
    question: "What is a common authentication method in APIs?",
    choices: ["GraphQL", "JSON", "OAuth", "SOAP"],
    answer: 2
  },
  {
    question: "Which tool is often used to test APIs?",
    choices: ["Excel", "Postman", "Word", "Slack"],
    answer: 1
  },
  {
    question: "Which response code means 'Success'?",
    choices: ["200", "301", "404", "500"],
    answer: 0
  },
  {
    question: "WSDL is used in which type of API?",
    choices: ["REST", "SOAP", "GraphQL", "gRPC"],
    answer: 1
  },
  {
    question: "What does REST stand for?",
    choices: ["Representational State Transfer", "Remote Execution Standard Transfer", "Runtime Secure Transfer", "Request Execution for Stateful Transactions"],
    answer: 0
  },
  {
    question: "Which API style uses a schema to define data?",
    choices: ["REST", "SOAP", "GraphQL", "FTP"],
    answer: 2
  },
  {
    question: "GraphQL allows you to:",
    choices: ["Only insert data", "Only read data", "Query and mutate data", "Only delete data"],
    answer: 2
  },
  {
    question: "Which status code means 'Unauthorized'?",
    choices: ["200", "301", "401", "403"],
    answer: 2
  },
  {
    question: "Swagger is used for:",
    choices: ["API documentation", "Database design", "Web design", "Encryption"],
    answer: 0
  },
  {
    question: "Which data format is NOT typically used in web APIs?",
    choices: ["XML", "JSON", "YAML", "DOCX"],
    answer: 3
  },
  {
    question: "An API endpoint is:",
    choices: ["A database", "A UI tool", "A specific URL for API interaction", "A type of file"],
    answer: 2
  },
  {
    question: "CORS stands for:",
    choices: ["Cross-Origin Resource Sharing", "Common Output Resource Sharing", "Client Open Remote System", "Cross-Organizational Remote Sync"],
    answer: 0
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const quizBox = document.getElementById("quiz-box");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = `${currentQuestion + 1}. ${q.question}`;
  choicesEl.innerHTML = "";
  q.choices.forEach((choice, index) => {
    const li = document.createElement("li");
    li.textContent = choice;
    li.onclick = () => checkAnswer(index);
    choicesEl.appendChild(li);
  });
}

function checkAnswer(selected) {
  const correct = quizData[currentQuestion].answer;
  if (selected === correct) score++;
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizBox.classList.add("hide");
  resultBox.classList.remove("hide");
  scoreEl.textContent = `You scored ${score} out of ${quizData.length}`;
}

nextBtn.addEventListener("click", () => {
  if (currentQuestion < quizData.length) {
    loadQuestion();
  }
});

loadQuestion();
