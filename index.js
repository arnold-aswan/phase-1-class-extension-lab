// Your code here
class Polygon {
  constructor(numbers) {
    this.numbers = numbers;
  }
  get countSides() {
    return this.numbers.length;
  }
  get perimeter() {
    let sum = 0;
    for (let i = 0; i < this.numbers.length; i++) {
      sum = sum += this.numbers[i];
    }
    return sum;
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.numbers.length !== 3) {
      return false;
    }

    const [side1, side2, side3] = this.numbers;

    return (
      side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2
    );
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.numbers.length !== 4) {
      return false;
    }

    const [side1, side2, side3, side4] = this.numbers;

    return side1 === side2 && side1 === side3 && side1 === side4;
  }

  get area() {
    const [side1, side2, side3, side4] = this.numbers;
    return side1 * side2;
  }
}
