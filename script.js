// Create another class that extends the Animal class and includes a method that the class can only use.

class Animal {
  constructor(name, height, weight) {
    this.name = name;
    this.height = height;
    this.weight = weight;
  }
  printName() {
    console.log(`The name of this animal is ${this.name}.`);
  }

  showHeight() {
    console.log(`The height of this animal is ${this.height} ft.`);
  }
  showWeight() {
    console.log(`The weight of this animal is ${this.weight}.`);
  }
}

const ringedSeal = new Animal("seal", 5, 120);


class Dog extends Animal {
  constructor(name, height, weight, color) {
    super(name, height, weight);
    this.color = color;
  }
showColor() {
  console.log(`The color of this dog is ${this.color}.`);
  }
}

const dachsund = new Dog("Dachsund", 1, 15, "brown");

ringedSeal.printName();
dachsund.showColor();