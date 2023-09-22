const guessForm = <HTMLFormElement>document.getElementById("game-form");
const resultTag = <HTMLElement>document.getElementById("result");

guessForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const guess: number = Number(guessForm.guess.value);
  const rand: number = Math.floor(Math.random() * 10)
  
  if (guess === rand) {
    resultTag.textContent = `you won!!`
  } else {
    resultTag.textContent = `you lost!!`
  }
  guessForm.reset();
})