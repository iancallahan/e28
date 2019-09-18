
document.addEventListener("DOMContentLoaded", function(){
    const choices = ['rock', 'paper', 'scissors'];

    let humanScore = 0;
    let compScore = 0;

    const buttons = document.getElementsByTagName("button");
    
    const humanTally = document.getElementById("humanScore");
    const compTally = document.getElementById("compScore");
    
    function updateScores(){
        humanTally.textContent = humanScore;
        compTally.textContent = compScore;
    }
    
    function scoreIt(human) {
        var computer = choices[Math.floor(Math.random() * choices.length)];
        if (choices[human] == computer) {
            alert(`Tie! You both chose ${computer}.`);
            return;
        }
        else if (choices[human] == "rock" && computer == "paper") {
            alert(`You lose! The computer chose ${computer}.`);
            compScore++;
            updateScores();
            return;
        }
        else if (choices[human] == "rock" && computer == "scissors") {
            alert(`You win! The computer chose ${computer}.`);
            humanScore++;
            updateScores();
            return;
        }
        else if (choices[human] == "paper" && computer == "rock") {
            alert(`You win! The computer chose ${computer}.`);
            humanScore++;
            updateScores();
            return;
        }
        else if (choices[human] == "paper" && computer == "scissors") {
            alert(`You lose! The computer chose ${computer}.`);
            compScore++;
            updateScores();
            return;
        }
        else if (choices[human] == "scissors" && computer == "rock") {
            alert(`You lose! The computer chose ${computer}.`);
            compScore++;
            updateScores();
            return;
        }
        else if (choices[human] == "scissors" && computer == "paper") {
            alert(`You win! The computer chose ${computer}.`);
            humanScore++;
            updateScores();
            return;
        }
    }

    for (let button of buttons) {   
        button.addEventListener("click", (event) => {
           console.log((event.target.getAttribute('data-choice')));
           scoreIt(event.target.getAttribute('data-choice'));
          });
    };


})

