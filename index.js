// Variables //
let homeCount = 0
let guestCount = 0

const homeTitle = document.getElementById("home-title")
const guestTitle = document.getElementById("guest-title")

let homeScore = document.querySelector(".home-score")
let guestScore = document.querySelector(".guest-score")

const homeBtns = document.querySelectorAll(".home-btn")
const guestBtns = document.querySelectorAll(".guest-btn")
const btns = document.querySelectorAll(".btn")

const newGame = document.getElementById("new-game")

// Function for Leader in Score //

function lead() {
    if (homeCount > guestCount) {
        homeScore.classList.add('lead')
        guestScore.classList.remove('lead')
    } else if (guestCount > homeCount) {
        guestScore.classList.add('lead')
        homeScore.classList.remove('lead')
    }
}

// Functions for Scoring //
homeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.value === "1") {
            homeCount = homeCount + 1
            homeScore.textContent = homeCount
        } else if (btn.value == "2") {
            homeCount = homeCount + 2
            homeScore.textContent = homeCount
        } else {
            homeCount = homeCount + 3
            homeScore.textContent = homeCount
        }
        
        endGame()
        lead()
    })
})

guestBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.value === "1") {
            guestCount = guestCount + 1
            guestScore.textContent = guestCount
        } else if (btn.value == "2") {
            guestCount = guestCount + 2
            guestScore.textContent = guestCount
        } else {
            guestCount = guestCount + 3
            guestScore.textContent = guestCount
        }
        
        endGame()
        lead()
    })
})

// Function for End Game and New Game //
function endGame() {
    if (guestCount > 49) {
        console.log("end game, guest won")
        btns.forEach(elem => elem.disabled = true)
        newGame.classList.remove('hide')
    } else if (homeCount > 49) {
        console.log("end game, host won")
        btns.forEach(elem => elem.disabled = true)
        newGame.classList.remove('hide')
    }
}

newGame.addEventListener('click', () => {
    window.location.reload()
})
