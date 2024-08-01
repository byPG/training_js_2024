'use strict';

const btn = document.querySelector('.check');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//Function which is setting message
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
};

const eventHandler = function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //When there is no input
    if(!guess){
        displayMessage('No number!');

    //When player wins
    } else if (guess === secretNumber ){
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = `${30}rem`;

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    //When guess is wrong
    }else if (guess !== secretNumber){
        if(score > 1){
            // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!' : 'Too low';
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else{
            displayMessage('You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
};

//     //When guess is too high
//     } else if(guess > secretNumber){
//         if(score > 1){
//             document.querySelector('.message').textContent = 'Too high!';
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else{
//                 document.querySelector('.message').textContent = 'You lost the game!';
//                 document.querySelector('.score').textContent = 0;
//         }

//        //When guess is too low    
//     } else if(guess < secretNumber){
//         if(score > 1){
//             document.querySelector('.message').textContent = 'Too low!';
//             score--;
//             document.querySelector('.score').textContent = score;
//             }else{
//                 document.querySelector('.message').textContent = 'You lost the game!';
//                 document.querySelector('.score').textContent = 0;
//             }
//     }


btn.addEventListener('click', eventHandler);

const resetBtn = document.querySelector('.again');
const resetGame = function(){
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = `${15}rem`;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
};
resetBtn.addEventListener('click', resetGame);