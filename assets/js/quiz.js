var timer;
var timerText = document.getElementById('timer');

(function (){
  var sec = 0;
  timer = setInterval(()=>{
    timerText.innerHTML = '00:'+sec;
    sec++;
  }, 1000)
})()

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
          `<div class="slider">
          <div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>
          </div>`
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

  const previousButton = document.getElementById('previousQ');
  const nextButton = document.getElementById('nextQ');
  const slides = document.querySelectorAll('.slider');
  let currentSlide = 0;

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;

    if(currentSlide === 0){
      previousButton.style.display = 'none';
      replayButton.style.display = 'none';
    } else{
      previousButton.style.display = 'inline-block';
    } if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
      replayButton.style.display = 'inline-block';
    } else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  showSlide(currentSlide);

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }
  
  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  function replayQuiz() {
    startQuiz();
}

  // Event listeners
  submitButton.addEventListener('click', showResults);
  replayButton.addEventListener('click', replayQuiz);
  previousButton.addEventListener('click', showPreviousSlide);
  nextButton.addEventListener('click', showNextSlide);