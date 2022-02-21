const number_guess = document.querySelector(".no_guessed");
const guess_btn = document.querySelector(".g_btn");
const msg = document.querySelector(".popup_msg");

let randomNumber = Math.ceil((Math.random() * 100))

function clickGuessBtn() {
    let guessedNo = Number(number_guess.value)

    if (guessedNo < randomNumber) {
        msg.innerHTML = "Your guess is too low"
    } else if (guessedNo > randomNumber) {
        msg.innerHTML = "Your guess is too high";
    } else {
        msg.innerHTML = `Correct, the secret number is ${guessedNo}`;
    }
    setTimeout(function () {
        msg.innerHTML = "";
    }, 3000);
}

guess_btn.addEventListener('click', clickGuessBtn)