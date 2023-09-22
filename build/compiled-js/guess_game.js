"use strict";
const guessForm = document.getElementById("game-form");
const resultTag = document.getElementById("result");
guessForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const guess = Number(guessForm.guess.value);
    const rand = Math.floor(Math.random() * 10);
    if (guess === rand) {
        resultTag.textContent = `you won!!`;
    }
    else {
        resultTag.textContent = `you lost!!`;
    }
    guessForm.reset();
});
