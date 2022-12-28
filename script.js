const playBtnEl = document.getElementById('play');
const userGuessEl = document.getElementById('guess');
const message1El = document.getElementById('message1');
const message2El = document.getElementById('message2');
const message3El = document.getElementById('message3');
const message4El = document.getElementById('message4');

// const computerGuess =  Math.

function getComputerGuess(){
    const possibleGuesses = [];
    for(let i = 1; i <= 100; i++){
        possibleGuesses.push(i)
    }  
    return possibleGuesses[Math.floor(Math.random() * possibleGuesses.length)]
}

let numberOfGuesses = 0;
const guessedNumber = [];
const computerGuess = getComputerGuess();
console.log(computerGuess);

 if(computerGuess % 2 == '0'){
        message4El.textContent = 'The number is even'
    }

function playGame(){ 
    const userGuess = userGuessEl.value.trim();
    
    if(userGuess < 1 || userGuess > 100){
        alert('Enter a valid number between 1 and 100')
        return
    }

    guessedNumber.push(userGuess);
    numberOfGuesses++;
   

    if(numberOfGuesses <= 5){
        if(userGuess == computerGuess){
            message1El.textContent = `You guessed it in ${numberOfGuesses} guesses`
            message3El.textContent = 'Congrats!, Your Guess is correct';
            message3El.style.color = 'green';
            message2El.textContent += `${userGuess} `;
            message2El.textContent = `The number was ${computerGuess}`;
            message2El.textContent = `Guessed numbers are: ${guessedNumber}`;
        }else if(userGuess < computerGuess){
            message3El.textContent = 'You guessed a smaller number';
            message2El.textContent += ` ${userGuess},`;
            message2El.textContent = guessedNumber;
            message2El.textContent = `Guessed numbers are: ${guessedNumber}`;
            message1El.textContent = `No of Guesses: ${numberOfGuesses}`
        }else{
            message2El.textContent += `${userGuess} `;
            message2El.textContent = `Guessed numbers are: ${guessedNumber}`;
            message1El.textContent = `No of Guesses: ${numberOfGuesses}`
            message3El.textContent = 'You guessed a bigger number';
        }
    }else{        
        message1El.textContent = 'Sorry, you are out of guesses';
        message1El.style.color = 'red';
        // message2El.textContent = `Guessed numbers are: ${guessedNumber}`;
        // message2El.textContent += `${userGuess} `;
        return
        
    }   
}

playBtnEl.addEventListener('click', playGame)