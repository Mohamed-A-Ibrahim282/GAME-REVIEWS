import { Ui } from "./ui.js";


let linkBtn = document.querySelectorAll(".nav-link")

for (let i = 0; i < linkBtn.length; i++) {
    linkBtn[i].addEventListener("click", function () {
        loading()
        linkBtn[i].classList.add("active")
        for (let j = 0; j < linkBtn.length; j++) {
            if (j != i) {
                linkBtn[j].classList.remove("active")
            }
        }
        let term = linkBtn[i].innerHTML
        let newTerm = term.toLowerCase()
        getGames(newTerm)
    })
}

async function getGames(gameTerm) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f5e3df3f74mshc39407522b0e3ddp15781djsn57111231220d',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    let apiGames = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${gameTerm}`, options);

    let games = await apiGames.json();
    let showGames = new Ui();
    showGames.displayGames(games)
    getId()
}
getGames('mmorpg')

function getId() {
    let selectedGame = document.querySelectorAll(".card")
    let selectedGameId = document.querySelectorAll("#gameId")

    for (let i = 0; i < selectedGame.length; i++) {
        selectedGame[i].addEventListener("click", function () {
            for (let j = 0; j < selectedGameId.length; j++) {
                if (j == i) {
                    let theId = selectedGameId[j].innerHTML
                    gameDetails(theId)
                    loading()
                }
            }
        })
    }

}

async function gameDetails(gameId) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f5e3df3f74mshc39407522b0e3ddp15781djsn57111231220d',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    let apiDetails = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, options);

    let details = await apiDetails.json()
    let showGameDetails = new Ui()
    showGameDetails.displayDetails(details)
    document.querySelector(".gameDetails").classList.replace("d-none", "d-flex")
    document.querySelector("body").classList.replace("overflow-auto", "overflow-hidden")
}

document.querySelector(".fa-remove").addEventListener("click", () => {
    document.querySelector(".gameDetails").classList.replace("d-flex", "d-none")
    document.querySelector("body").classList.replace("overflow-hidden", "overflow-auto")
})

function loading() {
    let idValue = setInterval(() => {
        document.getElementById("loading").classList.replace("d-none", "d-block")
    });


    setTimeout(() => {
        clearInterval(idValue)
        document.getElementById("loading").classList.replace("d-block", "d-none")
    }, 500);

}

function changNav() {
    var navbar = document.getElementById('navbar-example');
    var scrollValue = window.scrollY;
    if (scrollValue < 236.96) {
        navbar.classList.remove('fixed-top');
        navbar.classList.add('position-sticky', 'top-100');
    }
    else {
        navbar.classList.add('fixed-top');
        navbar.classList.remove('position-sticky', 'top-100');
    }
}
window.addEventListener('scroll', changNav)