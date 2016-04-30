////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////

function getInput() {
    return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}


function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}
    var winner;
function getWinner(playerMove,computerMove) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if((computerMove === "rock" && playerMove === "scissors") || 
        (computerMove === "scissors" && playerMove === "paper") || 
        (computerMove === "paper" && playerMove === "rock")){
        winner = "computer";
    } else if((playerMove === "rock" && computerMove === "scissors") || 
        (playerMove === "scissors" && computerMove === "paper") || 
        (playerMove === "paper" && computerMove === "rock")){
        winner = "player";
    } else {
        winner = "tie";
    }
    console.log(winner);
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while(playerWins < 5 && computerWins < 5){
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        getWinner(playerMove, computerMove);
        if(winner === "computer"){
            computerWins += 1;
        } else if (winner === "player"){
            playerWins +=1;
        }
    }
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

