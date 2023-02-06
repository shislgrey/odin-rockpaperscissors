// Handy template: https://gist.github.com/ShurakaiSoft/9402599

const RockPaperScissors = require('./rockpaperscissors');


describe("getComputerChoice", () => {
  it('should return a valid choice', () => {
    expect(RockPaperScissors.choices).toContain(RockPaperScissors.getComputerChoice());
  });
  it('should return one choice', () => {
    expect(typeof RockPaperScissors.getComputerChoice()).toBe('string');
  });
  it('should return choice in lowercase', () => {
    var computerChoice = RockPaperScissors.getComputerChoice();
    expect(computerChoice).toEqual(computerChoice.toLowerCase());
  });
  it('should be fairly random', () => {
    // This will take some extra work.
    // Hint: collect a bunch of computer choices, then process them
    throw newError('TODO: write test code');
  });
})


describe("getPlayerChoice", () => {
  // TODO: Rewrite getPlayerChoice and decouple it from the prompting
  it("should accept valid choices", () => {
    //TODO: WORK ON REWRITING THIS TOMORROW
    expect(RockPaperScissors.choices).toContain(RockPaperScissors.getPlayerChoice());
  });
  it("should reject invalid choices", () => {
    throw new Error('TODO: write test code');
  });
  it("should re-prompt on invalid choice", () => {
    throw new Error('TODO: write test code');
  });
})

describe("determineWinner", () => {
  it('should determine if you lost', () => {
    throw new Error('TODO: write test code');
  });
  it('should determine if you won', () => {
    throw new Error('TODO: write test code');
  });
  it('should determine if the round is a tie', () => {
    throw new Error('TODO: write test code');
  });
})

// Move the scoring part of playGame() into its own function
describe("scoreGame", () => {
  it('should determine if you won', () => {
    throw new Error('TODO: write test code');
  });
  it('should determine if computer won', () => {
    throw new Error('TODO: write test code');
  });
  it('should determine if the game is a tie', () => {
    throw new Error('TODO: write test code');
  });
  it('should output the final score', () => {
    throw new Error('TODO: write test code');
  });
})