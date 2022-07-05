(function(){
  function startQuiz(){

    const output = [];

    quizQuestions.forEach(
      (currentQuestion, questionNumber) => {
         const answers = [];

        for(letter in currentQuestion.answers){
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    quizQuestions.forEach( (currentQuestion, questionNumber) => {

      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;
        answerContainers[questionNumber].style.color = 'green';

      } else{

        answerContainers[questionNumber].style.color = 'red';

      }
    });
    resultsContainer.innerHTML = `You got ${numCorrect} out of ${quizQuestions.length}!`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const replayButton = document.getElementById('replay');

  const quizQuestions = [
  {
      question: "The Man of Steel is another name for which superhero?",
      answers: {
        A: "Batman",
        B: "Superman",
        C: "Iron Man",
        D: "Aquaman"
      },
      correctAnswer: "B"
    },
    {
      question: "Which superhero has super tools such as the magic lasso and bullet-proof bracelets?",
      answers: {
        A: "Catwoman",
        B: "Wonder Woman",
        C: "Super Girl",
        D: "The Wasp"
      },
      correctAnswer: "B"
    },
    {
      question: "Which superhero cannot transform back into the human form anymore?",
      answers: {
        A: "The Incredible Hulk",
        B: "Ant-Man",
        C: "The Thing",
        D: "The Human Torch"
      },
      correctAnswer: "C"
    },
    {
      question: "What villain got his distinctive appearance from toxic chemicals at a plant?",
      answers: {
        A: "Joker",
        B: "Doomsday",
        C: "Two-Face",
        D: "The Penguin"
      },
      correctAnswer: "A"
    },
    {
      question: "Which superhero is blinded by radioactive components and nicknamed the Man without fear?",
      answers: {
        A: "Green Lantern",
        B: "Daredevil",
        C: "Wolverine",
        D: "The Incredible Hulk"
      },
      correctAnswer: "B"
    },
    {
      question: "The Green Lantern gains his power from which object?",
      answers: {
        A: "A Ring",
        B: "Glasses",
        C: "A Sword",
        D: "A Gun"
      },
      correctAnswer: "A"
    },
    {
      question: "Which newspaper does Spiderman/Peter Parker work for?",
      answers: {
        A: "The Daily Bugle",
        B: "The Daily Gothamite",
        C: "The Daily Planet",
        D: "The Daily Star"
      },
      correctAnswer: "A"
    },
    {
      question: "What is the name of the archnemesis of the Fantastic Four?",
      answers: {
        A: "Llan the Sorcerer",
        B: "Count Nefaria",
        C: "The Mandarin",
        D: "Dr. Doom"
      },
      correctAnswer: "D"
    },
    {
      question: "What are the claws of Wolverine made of?",
      answers: {
        A: "Aluminium",
        B: "Adamantium",
        C: "Titanium",
        D: "Vibranium"
      },
      correctAnswer: "B"
    },
    {
      question: "Which of these X-Men DO NOT have either blue skin or fur",
      answers: {
        A: "Cyclops",
        B: "Nightcrawler",
        C: "Beast",
        D: "Mystique"
      },
      correctAnswer: "A"
    }]

  startQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
  replayButton.addEventListener('click', startQuiz);
})();