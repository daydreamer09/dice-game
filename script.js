let numberOfTries = 0;
let guess = 0;

let diceValue = document.getElementById('value');
let rollDice = document.getElementById('roll-dice');
let reset = document.getElementById('reset');
let resultDisplay = document.getElementById('result-message');
let total = document.getElementById('value-total');
let image = document.getElementById('image');
let totalScore = 0;


const numberGenerator = () =>{
    return Math.floor(Math.random()* 6) + 1;
     
}

const resetEverything = () =>{
    numberOfTries = 0;
    diceValue.innerHTML = 0;
    result = 0;
    resultDisplay.innerHTML = 0;
    total.innerHTML = 0;
    totalScore = 0;
    rollDice.style.visibility = 'visible';
    resultDisplay.style.visibility = 'hidden';
    image.src = '';
    image.style.visibility = 'hidden';
};

const imagepicker = (imgNumber) =>{
    switch(imgNumber){
        case 1:
            image.src = './images/dice-1.png';
            break;
        case 2:
            image.src = './images/dice-2.png';
            break;
        case 3:
            image.src = './images/dice-3.png';
            break;
        case 4:
            image.src = './images/dice-4.png';
            break;
        case 5:
            image.src = './images/dice-5.png';
            break;
        case 6:
            image.src = './images/dice-6.png';
            break;
        default:
            break;
    }
};

const displayResult = () =>{
    if (totalScore >= 25){
        resultDisplay.style.visibility = 'visible';
        resultDisplay.innerHTML = 'YOU WIN!';
    }else if(totalScore < 25){
        resultDisplay.style.visibility = 'visible';
        resultDisplay.innerHTML = 'YOU LOSE';
    };
};

rollDice.onclick = () =>{
    guess = numberGenerator();
    diceValue.innerHTML = guess;
    numberOfTries++;
    totalScore += guess;
    total.innerHTML = totalScore;
    imagepicker(guess);
    image.style.visibility = 'visible';
    if(numberOfTries === 5){
        rollDice.style.visibility = 'hidden';
        displayResult();
    };
};

reset.onclick = () =>{
   resetEverything();
};



