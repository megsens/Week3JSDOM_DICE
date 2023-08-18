const rollButton = document.getElementById("btn");

let score = 0;
let start = true

rollButton.addEventListener("click", () => {
    document.getElementById("msg").innerHTML = ""
    roll();
})

const roll = () => {
    let num = Math.floor(Math.random() * 6);
    if (num == 1) {
        gameOver()
    }
    if (num == 2) {
        document.getElementById("points").innerHTML = score += num;
        document.getElementById("dice").src = "./img/dice2.png";
    }
    if (num == 3) {
        document.getElementById("points").innerHTML = score += num;
        document.getElementById("dice").src = "./img/dice3.png";
    }
    if (num == 4) {
        document.getElementById("points").innerHTML = score += num;
        document.getElementById("dice").src = "./img/dice4.png";
    }
    if (num == 5) {
        document.getElementById("points").innerHTML = score += num;
        document.getElementById("dice").src = "./img/dice5.png";
    }
    if (num == 6) {
        document.getElementById("points").innerHTML = score += num;
        document.getElementById("dice").src = "./img/dice6.png";
    }
    if (score >= 20) {
        winner();
        start = false;
        score = 0;
    }
};

const gameOver = () => {
    document.getElementById("msg").innerHTML = "You rolled a one. You lose.";
    document.getElementById("msg").style.color = "red";
    document.getElementById("dice").src = "./img/dice1.png";
    score = 0;
}

const winner = () => {
    document.getElementById("msg").innerHTML = "You Win!";
    document.getElementById("msg").style.color = "green";
}