const RockPaperScissors = require('./rockpaperscissors');


// TODO: fix this failing test
// TODO: use an exported variable here, maybe
test('Check the computer choice is valid', () => {
  expect(['rock', 'papier', 'scissors']).toContain(RockPaperScissors.getComputerChoice());
});