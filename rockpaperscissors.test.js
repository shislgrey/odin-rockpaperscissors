// Handy template: https://gist.github.com/ShurakaiSoft/9402599

const RockPaperScissors = require('./rockpaperscissors');


describe("getComputerChoice", () => {
  it('should return a valid choice', () => {
    expect(RockPaperScissors.choices).toContain(RockPaperScissors.getComputerChoice());
  });
  it('should return one choice', () => {
    throw Error('TODO: write test code');
  });
  it('should return choice in lowercase', () => {
    throw Error('TODO: write test code');
  });
  it('should be fairly random', () => {
    // This will take some extra work.
    // Hint: collect a bunch of computer choices, then process them
    throw Error('TODO: write test code');
  });
})


describe("getPlayerChoice", () => {
// TODO: Rewrite getPlayerChoice and decouple it from the prompting
  it("should accept valid choices", () => {
    throw Error('TODO: write test code');
  });
  it("should reject invalid choices", () => {
    throw Error('TODO: write test code');
  });
  it("should re-prompt on invalid choice", () => {
    throw Error('TODO: write test code');
  });
})

describe("determineWinner", () => {
  it('should determine if you lost', () => {
    throw Error('TODO: write test code');
  });
  it('should determine if you won', () => {
    throw Error('TODO: write test code');
  });
  it('should determine if the round is a tie', () => {
    throw Error('TODO: write test code');
  });
})

// Move the scoring part of playGame() into its own function
describe("scoreGame", () => {
  it('should determine if you won', () => {
    throw Error('TODO: write test code');
  });
  it('should determine if computer won', () => {
    throw Error('TODO: write test code');
  });
  it('should determine if the game is a tie', () => {
    throw Error('TODO: write test code');
  });
  it('should output the final score', () => {
    throw Error('TODO: write test code');
  });
})