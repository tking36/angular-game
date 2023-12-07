import { Component } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css'],
})
export class TictactoeComponent {
  one = '';
  two = '';
  three = '';
  four = '';
  five = '';
  six = '';
  seven = '';
  eight = '';
  nine = '';

  player = 'X';
  winner = '';
  turn = 0;
  gameOver = false;

  xWins = 0;
  oWins = 0;

  flash = false;

  resetState() {
    this.one = '';
    this.two = '';
    this.three = '';
    this.four = '';
    this.five = '';
    this.six = '';
    this.seven = '';
    this.eight = '';
    this.nine = '';
    this.player = 'X';
    this.winner = '';
    this.turn = 0;
    this.gameOver = false;
  }

  handleClick(num: number) {
    if (num === 1) {
      this.one = this.player;
    } else if (num === 2) {
      this.two = this.player;
    } else if (num === 3) {
      this.three = this.player;
    } else if (num === 4) {
      this.four = this.player;
    } else if (num === 5) {
      this.five = this.player;
    } else if (num === 6) {
      this.six = this.player;
    } else if (num === 7) {
      this.seven = this.player;
    } else if (num === 8) {
      this.eight = this.player;
    } else if (num === 9) {
      this.nine = this.player;
    }
    this.turn++;
    if (this.player === 'X') {
      this.player = 'O';
    } else {
      this.player = 'X';
    }

    console.log(num);
    console.log(this.player);
    this.checkGameStatus();
  }

  checkForWinner = () => {
    // Check rows
    if (this.one && this.one === this.two && this.one === this.three) {
      return this.one;
    }
    if (this.four && this.four === this.five && this.four === this.six) {
      return this.four;
    }
    if (this.seven && this.seven === this.eight && this.seven === this.nine) {
      return this.seven;
    }

    // Check columns
    if (this.one && this.one === this.four && this.one === this.seven) {
      return this.one;
    }
    if (this.two && this.two === this.five && this.two === this.eight) {
      return this.two;
    }
    if (this.three && this.three === this.six && this.three === this.nine) {
      return this.three;
    }

    // Check diagonals
    if (this.one && this.one === this.five && this.one === this.nine) {
      return this.one;
    }
    if (this.three && this.three === this.five && this.three === this.seven) {
      return this.three;
    }

    // If no winner yet
    return null;
  };

  handleFlash = () => {
    this.flash = true;
    setTimeout(() => {
      this.flash = false;
    }, 1000);
  };

  checkGameStatus() {
    const winner = this.checkForWinner();
    if (winner) {
      this.winner = winner;
      this.gameOver = true;

      // Update win count
      if (winner === 'X') {
        this.xWins++;
      } else if (winner === 'O') {
        this.oWins++;
      }

      // Reset the game after a delay
      setTimeout(() => {
        this.resetState();
      }, 2000); // Delay for 2 seconds before resetting
    } else if (this.turn === 9) {
      this.gameOver = true;

      // Reset the game after a delay if it's a draw
      setTimeout(() => {
        this.resetState();
      }, 2000); // Delay for 2 seconds before resetting
    }
  }
}
