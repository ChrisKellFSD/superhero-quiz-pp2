// Variables
var timer;
var timerText = document.getElementById('timer');
var sec = 0;
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const replayButton = document.getElementById('replay');
const previousButton = document.getElementById('previousQ');
const nextButton = document.getElementById('nextQ');



// Timer
(function (){
  timer = setInterval(()=>{
    timerText.innerHTML = '00:'+sec;
    sec++;
  }, 1000)
})()

function makeQuiz(){

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

  makeQuiz();


// Slider function to show previous and next questions
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
    makeQuiz();
}


// Event listeners
submitButton.addEventListener('click', showResults);
replayButton.addEventListener('click', replayQuiz);
previousButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);