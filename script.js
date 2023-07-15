import {Show} from './show.js'

let library = [
    new Show(
        "MineCraft",
        2009,
        "My Favorite Games",
        "A game that has many things you can do. For example, you can beat the Ender Dragon or complete all the achievments.",
        "minecraft.jpg"
    ),
    new Show(
        "Rocket League",
        2015,
        "My Favorite Games",
        "It is soccer but with cars, and other different features",
        "rocket.jpg"
    ),
    new Show(
        "Roblox",
        2006,
        "Mobile and Computer games",
        "There are many different types of games you can choose from in this",
        "roblox.jpg"
    ),
    new Show(
        "Among Us",
        2018,
        "Mobile and Computer games",
        "It is a game where you try to figure out who the impostor is, but if you are the impostor you try to kill all the crewmates before they find out you're the impostor",
        "sus.jpg"
    ),
    new Show(
        "Rocket League Sideswipe",
        2021,
        "Mobile games",
        "This game is basically Rocket League, but available on mobile.",
        "league.jpg"
    ),
    new Show(
        "Bloons TD6",
        2018,
        "Mobile and Computer games",
        "This game is a tower defense game where you have to use monkeys to pop all of the bloons.",
        "bloons.jpg"
    ),
    new Show(
        "Pokemon Go",
        2016,
        "Mobile games",
        "This mobile game is a game that you have to walk or go to places in the world to catch pokemon. You also can battle other trainers in gyms.",
        "pokemon.png"
    )
]

library.forEach(function(show){
    show.addToPage()
})