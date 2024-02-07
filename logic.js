//GETTING HTML COMPONENTS IN JS
const choices = document.querySelectorAll(".choice");
const mssg = document.querySelector("#mssg");
let userScore = 0;
let compScore = 0;
const userScoreShow = document.querySelector("#user-score");
const compScoreShow = document.querySelector("#comp-score");
const btn = document.querySelector("button");

//GETTING USER INPUT FROM CLICK ON CHOICES
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

//COMPLETE PLAY GAME FUNCTION
const playGame = (userChoice) => {
    console.log("I am here. level1");
    const compChoice = genCompChoice();
    if(userChoice === compChoice) {
        mssg.innerText = `This turn is draw. Computer also chose ${compChoice}`;
        mssg.style.backgroundColor = "rgba(177, 177, 10, 0.458)";
    } else {
        let userWin = true;
        if(userChoice === "stone"){
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "stone" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

//GENERATING COMPUTER CHOICE
const genCompChoice = () => {
    const options = ["stone", "paper", "scissor"];
    const index = Math.floor(Math.random() * 3);
    return options[index];
};

//SHOWING WINNER AFTER DECIDING
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScoreShow.innerText = userScore;
        mssg.innerText = `You get a point. Your ${userChoice} beats ${compChoice}`;
        mssg.style.backgroundColor = "#3BC14A";
        
    } else {
        compScore++;
        compScoreShow.innerText = compScore;
        mssg.innerText = `Computer gets a point. Computer's ${compChoice} beats ${userChoice}`;
        mssg.style.backgroundColor = "red";
    }
};

//RESET BUTTON
btn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScoreShow.innerText = "0";
    compScoreShow.innerText = "0";
    mssg.innerText = "Click on your choice to start the game";
    mssg.style.backgroundColor = "rgba(177, 177, 10, 0.458)";
});