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


describe("validatePlayerChoice", () => {
  it("should accept valid choices", () => {
    expect(RockPaperScissors.validatePlayerChoice(RockPaperScissors.choices, 'ROCK')).toBe(true);
  });
  it("should reject invalid choices", () => {
    expect(RockPaperScissors.validatePlayerChoice(RockPaperScissors.choices, 'asjf')).toBe(false);
  });
  it("should re-prompt on invalid choice", () => {

  });
})

describe("determineWinner", () => {
  it('should determine if you lost', () => {
    expect(RockPaperScissors.determineWinner("rock", "scissors")).toEqual("computer");
  });
  it('should determine if you won', () => {
    expect(RockPaperScissors.determineWinner("rock", "paper")).toEqual("player");
  });
  it('should determine if the round is a tie', () => {
    expect(RockPaperScissors.determineWinner("rock", "rock")).toEqual("tie");
  });
})

// Move the scoring part of playGame() into its own function
describe("scoreGame", () => {
  it('should determine if you won', () => {
    expect(RockPaperScissors.scoreGame(5)).toEqual("Player wins!");
  });
  it('should determine if computer won', () => {
    expect(RockPaperScissors.scoreGame(-5)).toEqual("Computer wins!");
  });
  it('should determine if the game is a tie', () => {
    expect(RockPaperScissors.scoreGame(0)).toEqual("It's a tie!");
  });
  it('should output the final score', () => {
    expect(typeof RockPaperScissors.scoreGame()).toEqual('string');
  });
})