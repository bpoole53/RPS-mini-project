function start() {
    logWins(whoWins(userChoice(), computerChoice()));
    playAgain();
    
}

//prompt the user to choose one of 3 string values and return the chosen value
function userChoice() {
    var choice = prompt("Please choose R, P, or S");
    alert("User choice is " + choice)
    return choice;
}

//choose a random string value between the 3 listed in the choices array and then return it
function computerChoice() {
    var choices = ['R', 'P', 'S',];
    var randomChoice = choices[Math.floor(Math.random() * choices.length)];
    alert("Computer choice is " + randomChoice);
    return randomChoice;
}      

//create a function that determines the winner with the string values chosen from the 
//userChoice and computerChoice functions as arguments of this function and then returns
//a value for the logWins funtion to use
function whoWins(useChoice, compChoice) {
    if (compChoice === useChoice) {
    alert("It's a tie!");
    return 'tie';
    }  else if (compChoice === 'R' && useChoice === 'S'){
    alert("Computer wins!");
    return 'cwin';
    }  else if (compChoice === 'S' && useChoice === 'P'){
    alert("Computer Wins!");
    return 'cwin';
    }  else if (compChoice === 'P' && useChoice === 'R'){
    alert("Computer wins!");
    return 'cwin';
    }  else {
    alert("User Wins!");
    return 'uwin';
    }
}

//declare the 'score' array as a global variable so scores can be additive rather than
//declaring locally inside a function so that the values aren't declared as 0 each time.  This way
//'score'is only declared once no matter how many times start() is initialized.
var score = [0, 0, 0]

//get the return value from the whoWins function and input it as the 'winner' variable,
//then add to the global array variable 'score' based on the argument input
//then display total score
function logWins(winner) {    
    if (winner === 'tie') {
    score[0]++;
    } else if (winner === 'cwin') {
    score[1]++;
    } else if (winner === 'uwin') {
    score[2]++;
    }
    alert(`computer has won ${score[1]} times! user has won ${score[2]} times! and they have tied ${score[0]} times!`);
}

//prompt the user to play again, if they click ok then the start function runs again, otherwise
//nothing happens
function playAgain() {
    var choose = confirm("Play again?");
    if (choose === true) {
    start();
    }
}

start()



