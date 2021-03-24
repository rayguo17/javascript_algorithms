//
// This is only a SKELETON file for the 'Spiral Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class SpiralMatrix {
  static ofSize(size) {
    let res = new Array(size).fill(0).map(() => new Array(size).fill(0));
    let row = 0, col = 0, directionIndex = 0;
    let rowIncre = [0, 1, 0, -1], colIncre = [1, 0, -1, 0];
    let nextRow = 0, nextCol = 0;
    for (let i = 0; i < size * size; i++){
      res[row][col] = i + 1;
      nextRow = row + rowIncre[directionIndex];
      nextCol = col + colIncre[directionIndex];
      if (nextCol < 0 || nextRow < 0 || nextCol >= size || nextRow >= size || res[nextRow][nextCol] != 0) {
        directionIndex = (directionIndex + 1) % 4;
      }
      row = row + rowIncre[directionIndex];
      col = col + colIncre[directionIndex];
    }
    return res;

  }
}
module.exports = { SpiralMatrix };
