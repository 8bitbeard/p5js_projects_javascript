class Score {

  constructor() {
    this.x = width / 2;
    this.y = 70;

    this.value = 0;
    this.images = this.getImages();
  }

  update() {
    this.value += 1;
    this.images = this.getImages();
  }

  getImages() {
    let imagesArray = [];
    let stringArray = this.value.toString().split('')
    for (var i = 0; i < stringArray.length; i++) {
      let number = parseInt(stringArray[i]);
      imagesArray.push(bigNumberModels[number])
    }
    return imagesArray;
  }

  show() {
    let scoreWidth = 0;
    let x = 0;
    for(var i = 0; i < this.images.length; i++) {
      scoreWidth += this.images[i].width - 1
    }
    for(var i = 0; i < this.images.length; i++) {
      image(this.images[i], this.x - scoreWidth/2 + x, this.y)
      x += this.images[i].width - 1
    }
  }
}