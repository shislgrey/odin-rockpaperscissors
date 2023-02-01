const RockPaperScissors = require('./rockpaperscissors');


test('Check the computer choice is valid', () => {
  expect(RockPaperScissors.choices).toContain(RockPaperScissors.getComputerChoice());
});

test('Verify player choice is normalized', () => {
  // getPlayerChoice() processes the user's input. How do we test it?
  fail('TODO: write test code')
});

test('Verify winner selection', () => {
  // Test the different branches of determineWinner
  fail('TODO: write test code')
});