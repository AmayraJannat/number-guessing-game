 let playerOne = document.querySelector('#playerOne');
 let playerTwo = document.querySelector('#playerTwo');
 let inputOne = document.querySelector('#inputOne');
 let inputTwo = document.querySelector('#inputTwo');
 let result = document.querySelector('#result');


 let secretNumber;
 let guessNumber;
 let chances = 5

 function playerOneNumber(){
    secretNumber = inputOne.value
    playerOne.style.display = "none"
    playerTwo.style.display = "block"
    inputOne.value = ''
 }

 function playerTwoNumber (){
    guessNumber = inputTwo.value
    if(secretNumber == guessNumber){
        result.innerHTML ='Congratulations! You guessed right! Player Two Wins!!!'
    }
    else{
        chances--
        if(chances > 0){
            result.innerHTML =`Wrong guess! you have ${chances} chances left!!`
        }
        else{
            result.innerHTML = "You lost the game! better luck next time!"
        }
    }

    inputTwo.value = ''

 }