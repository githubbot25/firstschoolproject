function youWon() { document.getElementById("pFinalResults").innerHTML = "You won!  Nice job!"; } 
function youLost() { document.getElementById("pFinalResults").innerHTML = "You lost! Better luck next time!"; }
function youDrew() { document.getElementById("pFinalResults").innerHTML = "You tied!  Next time, you can win!"; }
// these functions tell what to do in the case of winning, losing, or drawing!
var userChoice;
function playGame() {
	userChoice = document.getElementById("input1").value;
    var computerChoice = Math.random();
    if (computerChoice <= 0.34) { computerChoice = "rock"; } 
    else if (computerChoice <= 0.67) { computerChoice = "paper"; } 
    else { computerChoice = "scissors"; }
    //if (debug) { alert("Entering playGame"); }
    document.getElementById("pComputerChoice").innerHTML = "The computer chose" + " " + computerChoice + "!";
    userChoice = userChoice.toLowerCase();
    if ((userChoice != "rock") && (userChoice != "paper") && (userChoice != "scissors")) { 
        document.getElementById("pUserChoice").innerHTML = "You little cheater!  Play again, and put in a correct answer!";
        document.getElementById("pFinalResults").innerHTML = "The results were inconclusive.  Don't cheat next time.";
        //this it to make sure that the answer is one of the three valid ones, otherwise it will ask you to try again
    } else {
        document.getElementById("pUserChoice").innerHTML = "You chose" + " " + userChoice + "!"; //this documents the player's choice
        if (userChoice === "rock") { 
            if (computerChoice === "rock") {
                youDrew();
            } else if (computerChoice === "paper") {
                youLost();
            } else if (computerChoice === "scissors") {
                youWon();
            } //this if statement tells what to do if you select rock, and uses the functions i defined earlier!
        } else if (userChoice === "paper") {
            if (computerChoice === "rock") {
                youWon();
            } else if (computerChoice === "paper") {
                youDrew();
            } else if (computerChoice === "scissors") {
                youLost();
            } //this does the same for paper,
        } else if (userChoice === "scissors") {
            if (computerChoice === "rock") {
                youLost();
            } else if (computerChoice === "paper") {
                youWon();
            } else if (computerChoice === "scissors") {
                youDrew();
            } //and this for scissors
        }
    }
}
