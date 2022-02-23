const number_guess = document.querySelector(".no_guessed");
const guess_btn = document.querySelector(".g_btn");
const msg = document.querySelector(".popup_msg");
const flashMsg = document.querySelector(".flash_msg")

let randomNumber = Math.ceil((Math.random() * 100))

function clickGuessBtn() {
    let guessedNo = Number(number_guess.value)
    console.log(randomNumber);
    if(guessedNo <= 0 || guessedNo >= 100){
        msg.innerHTML = "Your guess is out of range";
    }
    else if (guessedNo < randomNumber) {
        msg.innerHTML = "Your guess is too low";
    } else if (guessedNo > randomNumber) {
        msg.innerHTML = "Your guess is too high";
    } else {
        setTimeout(function (){
            randomNumber = Math.ceil((Math.random() * 100));
            flashMsg.innerHTML = flashMessage();
        }, 5000)
        msg.innerHTML = `Correct, the secret number is ${guessedNo}`;
       
    }
    setTimeout(function () {
        msg.innerHTML = "";
    }, 5000);
   ;
}
function flashMessage(){
    setTimeout(function () {
        flashMsg.innerHTML = "";
    }, 5000)
        return "New game started!!!";  
}

guess_btn.addEventListener('click', clickGuessBtn)

    
