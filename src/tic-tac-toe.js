class TicTacToe {
    constructor() {
        this.currentSymbol = 'x';
        this.matrix = [];
        for (let i = 0; i < 3; i++){
          this.matrix.push([null, null, null]);
        }
    }

    getCurrentPlayerSymbol() {
      return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
      if (this.matrix[rowIndex][columnIndex] == null){
          this.matrix[rowIndex][columnIndex] = this.currentSymbol;
          this.currentSymbol = (this.currentSymbol == 'x') ? 'o' : 'x';
      }
    }

    isFinished() {
      return this.getWinner() != null || this.isDraw();
    }

    getWinner() {
      for(let i = 0; i < 3; i++)
        if (this.matrix[i][0] == this.matrix[i][1] && this.matrix[i][0] == this.matrix[i][2])
          return this.matrix[i][0];
      for (let i = 0; i < 3; i++)
        if (this.matrix[0][i] == this.matrix[1][i] && this.matrix[0][i] == this.matrix[2][i])
          return this.matrix[0][i];
      if (this.matrix[0][0] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[2][2])
          return this.matrix[0][0];
      if (this.matrix[0][2] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[2][0])
          return this.matrix[0][2];
      return null;
    }

    noMoreTurns() {
      let count = 0;
      for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++)
          if (this.matrix[i][j] != null)
            count++;
      return count === 9;
    }

    isDraw() {
      return this.noMoreTurns() && this.getWinner() == null;
    }

    getFieldValue(rowIndex, colIndex) {
      return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
