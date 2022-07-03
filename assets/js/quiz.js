(function(){
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    const myQuestions = [
    {
        question: "The Man of Steel is another name for which superhero?",
        answers: {
          a: "Batman",
          b: "Superman",
          c: "Iron Man",
          d: "Aquaman"
        },
        correctAnswer: "b"
      },
      {
        question: "Which superhero has super tools such as the magic lasso and bullet-proof bracelets?",
        answers: {
          a: "Catwoman",
          b: "Wonder Woman",
          c: "Super Girl",
          d: "The Wasp"
        },
        correctAnswer: "b"
      },
      {
        question: "Which superhero cannot transform back into the human form anymore?",
        answers: {
          a: "The Incredible Hulk",
          b: "Ant-Man",
          c: "The Thing",
          d: "The Human Torch"
        },
        correctAnswer: "c"
      },
      {
        question: "What villain got his distinctive appearance from toxic chemicals at a plant?",
        answers: {
          a: "Joker",
          b: "Doomsday",
          c: "Two-Face",
          d: "The Penguin"
        },
        correctAnswer: "a"
      },
      {
        question: "Which superhero is blinded by radioactive components and nicknamed the Man without fear?",
        answers: {
          a: "Green Lantern",
          b: "Daredevil",
          c: "Wolverine",
          d: "The Incredible Hulk"
        },
        correctAnswer: "b"
      },
      {
        question: "The Green Lantern gains his power from which object?",
        answers: {
          a: "A Ring",
          b: "Glasses",
          c: "A Sword",
          d: "A Gun"
        },
        correctAnswer: "a"
      },
      {
        question: "Which newspaper does Spiderman/Peter Parker work for?",
        answers: {
          a: "The Daily Bugle",
          b: "The Daily Gothamite",
          c: "The Daily Planet",
          d: "The Daily Star"
        },
        correctAnswer: "a"
      },
      {
        question: "What is the name of the archnemesis of the Fantastic Four?",
        answers: {
          a: "Llan the Sorcerer",
          b: "Count Nefaria",
          c: "The Mandarin",
          d: "Dr. Doom"
        },
        correctAnswer: "d"
      },
      {
        question: "What are the claws of Wolverine made of?",
        answers: {
          a: "Aluminium",
          b: "Adamantium",
          c: "Titanium",
          d: "Vibranium"
        },
        correctAnswer: "b"
      },
      {
        question: "Which of these X-Men DO NOT have either blue skin or fur",
        answers: {
          a: "Cyclops",
          b: "Nightcrawler",
          c: "Beast",
          d: "Mystique"
        },
        correctAnswer: "a"
      }]
  
    // Kick things off
    buildQuiz();
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
  })();