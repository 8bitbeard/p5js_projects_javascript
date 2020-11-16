class Display {

  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.value = 0
  }

  setValue(value) {
    this.value = constrain(value, -99, 999);
  }

  convertValue() {
    var string;
    var num = this.value;
    if (this.value < 0) {
      num *= -1;
      string = '-' + '0'.repeat(2 - num.toString().length) + num
    } else {
      string = '0'.repeat(3 - num.toString().length) + num
    }
    return string.split('')
  }

  show() {
    var array = this.convertValue();
    for (var i = 0; i < array.length; i++) {
      var number;
      if (array[i] === '-') {
        number = 10;
      } else {
        number = parseInt(array[i]);
      }
      image(displayNumbers[number], this.x + (this.w * i), this.y, this.w, this.h)
    }
  }
}
