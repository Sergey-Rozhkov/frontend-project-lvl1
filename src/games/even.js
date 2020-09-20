import readlineSync from 'readline-sync';
import askName from '../cli.js';

const RULES = 'Answer "yes" if the number is even, otherwise answer "no"';
const CORRECT_QUESTIONS_COUNT = 3;
const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');
const getRandomNumber = (minNumber = 0, maxNumber = 100) => {
  const randomNumber = minNumber + Math.random() * (maxNumber + 1 - minNumber);
  return Math.floor(randomNumber);
};

export default () => {
  const name = askName();
  let correctAnswerCount = 0;
  console.log(RULES);
  while (correctAnswerCount < CORRECT_QUESTIONS_COUNT) {
    const randomNumber = getRandomNumber();
    const answer = readlineSync.question(`Question: ${randomNumber} `);
    const correct = isEven(randomNumber);
    if (answer === correct) {
      console.log('Correct!');
      correctAnswerCount += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correct}".\nLet's try again, ${name}!`);
      correctAnswerCount = 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
