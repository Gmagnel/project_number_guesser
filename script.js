let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
return Math.floor(Math.random()*10);
};
const getAbsoluteDistance = (num1, num2) => {
  return Math.abs(num1 - num2);
};

const compareGuesses = (you, computer, target) =>{
  if(you < 0 || you > 9){
    alert('Your number is out of range');
  };
 let compareGuessesYou = getAbsoluteDistance(target, you);
 let compareGuessesComputer = getAbsoluteDistance(target, computer);

  if(compareGuessesYou <= compareGuessesComputer){
    return true;
  }else if(compareGuessesYou > compareGuessesComputer){
    return false;
  }
};

let updateScore = winner => {
 if(compareGuesses === true){
   winner = 'human';
   humanScore += 1;
 }else{
   winner = 'computer';
   computerScore += 1;
 }
};

let advanceRound = () => {
  return currentRoundNumber += 1;
};