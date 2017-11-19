const board = [];
// const words = ['APPLE', 'SIT', 'TRIP', 'TURN', 'SUPER'];
const words = ['AKA', 'BOBO', 'JOB', 'GET', 'ZEBRA'];
// const words = ['XYZ'];
let coorFirstChar = [];
const matchedWords = [];

const boggle = (grid) => {
  shake(grid);
  findAll();
  return matchedWords;
}

const shake = (num) => {
  /* for (let i = 0; i < num; i++) {
    board.push([]);
    for (let j = 0; j < num; j++) {
      board[i].push(randomCharacter());
    }
  } */
  board.push(
    /* ['D', 'G', 'H', 'I'],
    ['K', 'L', 'P', 'S'],
    ['Y', 'E', 'U', 'T'],
    ['E', 'O', 'R', 'N'] */
    ['A', 'K', 'J', 'D'],
    ['Z', 'A', 'O', 'H'],
    ['G', 'E', 'B', 'R'],
    ['T', 'F', 'J', 'V']
  )
}

const randomCharacter = () => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const random = Math.floor(Math.random() * 26);
  return alphabet[random];
}

const findAll = () => {
  for (let i = 0; i < words.length; i++) {
    coorFirstChar = [findFirstCharacter(words[i])];
    // return [1, 1]

    if (coorFirstChar[0] !== null) {
      for (let j = 1; j < words[i].length; j++) {
        if (findPreviousRow(coorFirstChar[j - 1][0], coorFirstChar[j - 1][1], words[i][j]) &&
            findCurrentRow(coorFirstChar[j - 1][0], coorFirstChar[j - 1][1], words[i][j]) &&
            findNextRow(coorFirstChar[j - 1][0], coorFirstChar[j - 1][1], words[i][j])) {
          j = words[i].length;
        }
      }
    }

    if (coorFirstChar.length === words[i].length) {
      matchedWords.push(words[i]);
    }
  }
}

const findFirstCharacter = (word) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === word[0]) {
        return [i, j];
      }
    }
  }

  return null;
}

const findPreviousRow = (row, index, char) => {
  if (board[row - 1] === undefined) {
    return 1;
  } else if (coorFirstChar.indexOf([row - 1, index])) {
    return 1;
  } else if (board[row - 1].indexOf(char) !== -1) {
    coorFirstChar.push([row - 1, index]);
    return 0
  } else {
    return 1;
  }
}

const findCurrentRow = (row, index, char) => {
  if (coorFirstChar.indexOf([row - 1, index])) {
    return 1;
  } else if (board[row].indexOf(char) !== -1) {
    coorFirstChar.push([row, index]);
    return 0
  } else {
    return 1;
  }
}

const findNextRow = (row, index, char) => {
  if (board[row + 1] === undefined) {
    return 1;
  } else if (coorFirstChar.indexOf([row - 1, index])) {
    return 1;
  } else if (board[row + 1].indexOf(char) !== -1) {
    coorFirstChar.push([row + 1, index]);
    return 0
  } else {
    return 1;
  }
}

console.log(boggle());