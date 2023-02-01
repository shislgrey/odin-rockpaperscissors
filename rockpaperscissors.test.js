const RockPaperScissors = require('./rockpaperscissors');

test('computer selects a valid choice', () => {
  expect(RockPaperScissors.getComputerChoice().includes(['rock', 'paper', 'scissors'])).toBeTruthy;
});