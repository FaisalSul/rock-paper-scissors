let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScoreP = document.querySelector('#user-score');
const compScoreP = document.querySelector('#comp-score');


const genCompChoice = ()=>{
    const choiceArray = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random()*3);
    return(choiceArray[randomIndex])
}

const drawGame = ()=>{
    msg.innerHTML = `It's a draw. Let's play again`
    msg.style.backgroundColor = 'RGB(33, 33, 33)';
}

const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScoreP.innerHTML = userScore;
        msg.innerHTML = `You won! Your choice of ${userChoice} beats the computer's choice of ${compChoice}.`
        msg.style.backgroundColor = 'Green'
    } else {
        compScore++;
        compScoreP.innerHTML = compScore;
        msg.innerHTML = `You lost! The computer chose ${compChoice}, which beats your choice of ${userChoice}.`
        msg.style.backgroundColor = 'Red'
        
    }
}


const playGame = (userChoice)=>{
    console.log('It was clicked', userChoice)
    const compChoice = genCompChoice();
    console.log('It was clicked', compChoice)

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === 'rock'){
            //scissors, paper
            userWin = compChoice === 'paper' ? false : true;
        } else if(userChoice === 'paper'){
            //rock, scissors
            userWin = compChoice === 'scissors' ? false : true;
        } else{
            //rock, paper
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}
choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    })
})