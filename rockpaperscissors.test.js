const RockPaperScissors = require('./rockpaperscissors');


describe("getComputerChoice", () => {
  test('it should return a valid choice', () => {
    expect(RockPaperScissors.choices).toContain(RockPaperScissors.getComputerChoice());
  });
  test('it should return one choice', () => {
    throw Error('TODO: write test code');
  });
  test('returned choice should be lowercase', () => {
    throw Error('TODO: write test code');
  });
})


describe("getPlayerChoice", () => {
  test("it should reject invalid choices", () => {
    throw Error('TODO: write test code');
  });
  test("it should re-prompt on invalid choice", () => {
    throw Error('TODO: write test code');
  });
})

describe("determineWinner", () => {
  test('it should determine if you lost', () => {
    throw Error('TODO: write test code');
  });
  test('it should determine if you won', () => {
    throw Error('TODO: write test code');
  });
  test('it should determine if the round is a tie', () => {
    throw Error('TODO: write test code');
  });
})