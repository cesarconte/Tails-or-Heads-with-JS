const coin = document.querySelector("#coin");
const flipBtn = document.querySelector("#flip-button");
const resetBtn = document.querySelector("#reset-button");
const headsCount = document.querySelector("#heads-count");
const tailsCount = document.querySelector("#tails-count");

let heads = 0;
let tails = 0;

flipBtn.addEventListener("click", () => {
  const i = Math.floor(Math.random() * 2);
  coin.style.animation = "none";

  if (i) {
    setTimeout(() => {
      coin.style.animation = "spin-heads 3s forwards";
      setTimeout(() => {
        heads++;
        updateStats();
        setTimeout(() => {
          showResultMessage("Heads");
        }, 200);
      }, 3000);
    }, 100);
  } else {
    setTimeout(() => {
      coin.style.animation = "spin-tails 3s forwards";
      setTimeout(() => {
        tails++;
        updateStats();
        setTimeout(() => {
          showResultMessage("Tails");
        }, 200);
      }, 3000);
    }, 100);
  }

  disableButton();
});

coin.addEventListener("animationend", () => {
  enableButton();
});

resetBtn.addEventListener("click", () => {
  const confirmReset = confirm("Are you sure you want to reset?");

  if (confirmReset) {
    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    updateStats();
  } else {
  }
});

function updateStats() {
  headsCount.textContent = `Heads: ${heads}`;
  tailsCount.textContent = `Tails: ${tails}`;
}

function disableButton() {
  flipBtn.disabled = true;
}

function enableButton() {
  flipBtn.disabled = false;
}

function showResultMessage(result) {
  const playAgain = confirm(`The result is ${result}. Do you want to play again?`);

  if (!playAgain) {
    const quitOption = confirm("Do you prefer to quit the game?");

    if (quitOption) {
      alert("Goodbye and good luck!");
      heads = 0;
      tails = 0;
      updateStats();
    } else {
    }
  }
}

window.addEventListener("load", () => {
  const welcomeMessage = "Welcome to Tails and Heads! Would you like to play?";
  const playOption = confirm(welcomeMessage);

  if (playOption) {
  } else {
    const quitMessage = "Would you prefer to quit the game?";
    const quitOption = confirm(quitMessage);

    if (quitOption) {
      alert("Goodbye and good luck!");
      heads = 0;
      tails = 0;
      updateStats();
    } else {
    }
  }
});