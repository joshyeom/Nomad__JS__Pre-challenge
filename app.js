const calculator = {
  add: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  time: function (a, b) {
    console.log(a * b);
  },
  devide: function (a, b) {
    console.log(a / b);
  },
};

calculator.add(5, 1); //6
calculator.minus(5, 1); //4
calculator.time(5, 1); //5
calculator.devide(1, 5); //0.2
