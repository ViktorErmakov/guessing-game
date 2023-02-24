class GuessingGame {
    constructor() {
        this.max = 0;
        this.min = 0;
        this.middle = 0;
    }

    setRange(min, max) {
        this.max = max;
        this.min = min;
    }

    guess() {
        // this.middle = Math.round(((this.max - this.min) / 2) + this.min);
        this.middle = Math.round((this.max + this.min) / 2);
        return this.middle;
    }

    lower() {
        this.max = this.middle;
    }

    greater() {
        this.min = this.middle;
    }
}

module.exports = GuessingGame;

const number = 279;
const game = new GuessingGame();
game.setRange(0, 3445)

let result = game.guess();
game.lower();
result = game.guess();
game.lower();
result = game.guess();
game.lower();
result = game.guess();
game.greater();
result = game.guess();
game.lower();
result = game.guess();
game.greater();
result = game.guess();
game.lower();
result = game.guess();
game.lower();
result = game.guess();
game.greater();
result = game.guess();
game.lower();
result = game.guess();
