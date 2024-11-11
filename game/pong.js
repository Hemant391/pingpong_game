
const tltscr1 = document.getElementById("score1");
const tltscr2 = document.getElementById("score2");
const diceimg = document.querySelector(".dice");
const newgame = document.querySelector(".newgame")
const roll = document.querySelector(".btn-roll")
const hold = document.querySelector(".btn-hold")
let currentscr1 = document.querySelector("#scr1")
let currentscr2 = document.querySelector("#scr2")
let activeplayer1 = document.querySelector('.left-box')
let activeplayer2 = document.querySelector('.right-box')
let currentscr = 0
let activePlayer = 1
let score = [0, 0, 0]
diceimg.classList.add('hide')
let play = true

//function for switching player
const switchplayer = function () {
    currentscr = 0
    document.getElementById(`scr${activePlayer}`).textContent = currentscr
    activePlayer = activePlayer == 1 ? 2 : 1;

    activeplayer1.classList.toggle("active-player");
    activeplayer2.classList.toggle("active-player");
}


//on clicking on New game
newgame.addEventListener("click", () => {
    diceimg.classList.add('hide')
    activePlayer = 1
    currentscr = 0
    score = [0, 0, 0]
    currentscr1.innerHTML = 0
    currentscr2.innerHTML = 0
    tltscr1.innerHTML = 0
    tltscr2.innerHTML = 0
    if (play) {
        if (activeplayer2.classList.contains("active-player")) {
            activeplayer2.classList.remove("active-player");
            activeplayer1.classList.add("active-player");
        }
    }
    else {
        document.querySelector(`.player--1`).classList.remove('player-winner')
        document.querySelector(`.player--2`).classList.remove('player-winner')
        activeplayer1.classList.add("active-player");
        play = true
    }




})

// on clicking roll dice
roll.addEventListener('click', () => {
    if (play) {

        // display the dice 
        diceimg.classList.remove('hide')

        //generate the number
        let number = Math.trunc((Math.random() * 6) + 1)
        // console.log(number)
        diceimg.src = `Images/Dice-${number}.jpg`

        //adding score
        if (number != 1) {
            currentscr += number;
            document.getElementById(`scr${activePlayer}`).textContent = currentscr
        }
        else {
            switchplayer();
        }
    }
})


// on clicking hold button
hold.addEventListener('click', () => {
    if (play) {
        //addcurrent score
        score[activePlayer] += currentscr;
        document.getElementById(`score${activePlayer}`).textContent = score[activePlayer]
        // if player win 
        if (score[activePlayer] >= 100) {
            // document.classList.add('winner')
            document.querySelector(`.player--${activePlayer}`).classList.add('player-winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('active-player')
            play = false
        }
        else {
            //switch player
            switchplayer();

        }

    }
})