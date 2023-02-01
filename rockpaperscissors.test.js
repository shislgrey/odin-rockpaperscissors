const RockPaperScissors = require('./rockpaperscissors');


test('Check the computer choice is valid', () => {
  expect(RockPaperScissors.choices).toContain(RockPaperScissors.getComputerChoice());
});