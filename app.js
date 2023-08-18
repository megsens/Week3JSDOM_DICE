let gameOver = false;
let roundScore = 0;

const roll = document.getElementById('roll');
const reset = document.getElementById('reset');
const scoreTotal = document.getElementById('scoreTotal');
const diceImage = document.getElementById('diceImage');
const welcomeImage = document.getElementById('welcomeImage');

roll.addEventListener('click', () =>{
    let dice1 = Math.floor(Math.random() * 6) + 1;
    diceImage.src = `./diceimages/${dice1}.gif`;

    if (!gameOver) {
        if (dice1 == 1) {
            roundScore = 0;
            // LOSE
            scoreTotal.innerHTML = 'Game Over!';
            gameOver = true;
            welcomeImage.src = './diceimages/lose.gif';
        } else {
            roundScore += dice1;
            scoreTotal.innerHTML = 'Total Score'    + roundScore;
            if (roundScore >= 20) {
                // WIN
                scoreTotal.innerHTML = 'You Won!';
                gameOver = true;
                roll.disable = true;
                roundScore = 0;
                welcomeImage.src = './diceimages/win.gif'
            }
        }
    }
})

reset.addEventListener('click', () => {
    roundScore = 0;
    scoreTotal.innerHTML = 'Total Score: 0';
    gameOver = false;
    diceImage.src = './diceimages/reset.gif';
    roll.disables = false;
})