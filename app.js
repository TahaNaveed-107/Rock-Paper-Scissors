let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () =>  {
    const options = ['rock','paper', 'scissors'];
    const randNum = Math.floor(Math.random()*3);
    return options[randNum];
    //rock, paper, scissors
};

const playGame = (userChoice) =>{
    console.log('userChoice is ', userChoice);
    // Genrate computer choice 
    const compChoice = genCompChoice();
    console.log('compChoice is ', compChoice);
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});