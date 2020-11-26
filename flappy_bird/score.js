class Score {

  constructor() {
    this.x = width / 2;
    this.y = 30;

    this.scoreX = 110;
    this.scoreY = 128;
    this.hiscoreX = 110;
    this.hiscoreY = 150;

    this.score = 0;
    this.hiscore = 0;
    this.bigImages = this.getImages(bigNumberModels, this.score);
    this.mediumImagesScore = this.getImages(mediumNumberModels, this.score);
    this.mediumImagesHiscore = this.getImages(mediumNumberModels, this.hiscore);

    this.newHighScore = false;
  }

  update() {
    this.score += 1;
    if (this.score > this.hiscore) {
      this.hiscore = this.score;
      this.newHighScore = true;
    }
    this.bigImages = this.getImages(bigNumberModels, this.score);
    this.mediumImagesScore = this.getImages(mediumNumberModels, this.score);
    this.mediumImagesHiscore = this.getImages(mediumNumberModels, this.hiscore);
  }

  restart() {
    this.score = 0;
    this.newHighScore = false;
    this.bigImages = this.getImages(bigNumberModels, this.score);
    this.mediumImagesScore = this.getImages(mediumNumberModels, this.score);
  }

  getImages(models, value) {
    let imagesArray = [];
    let stringArray = value.toString().split('')
    for (var i = 0; i < stringArray.length; i++) {
      let number = parseInt(stringArray[i]);
      imagesArray.push(models[number])
    }
    return imagesArray;
  }

  show(mode) {
    let scoreWidthOne = 0;
    let scoreWidthTwo = 0;
    let xOne = 0;
    let xTwo = 0;
    if (mode === 1) {
      for(var i = 0; i < this.bigImages.length; i++) {
        scoreWidthOne += this.bigImages[i].width - 1
      }
      for(var i = 0; i < this.bigImages.length; i++) {
        image(this.bigImages[i], this.x - scoreWidthOne/2 + xOne, this.y)
        xOne += this.bigImages[i].width - 1
      }
    } else {
      for(var i = 0; i < this.mediumImagesScore.length; i++) {
        scoreWidthOne += this.mediumImagesScore[i].width - 1
      }
      for(var i = 0; i < this.mediumImagesHiscore.length; i++) {
        scoreWidthTwo += this.mediumImagesHiscore[i].width - 1
      }
      for(var i = 0; i < this.mediumImagesScore.length; i++) {
        image(this.mediumImagesScore[i], this.scoreX - scoreWidthOne/2 + xOne, this.scoreY)
        xOne += this.mediumImagesScore[i].width - 1
      }
      for(var i = 0; i < this.mediumImagesHiscore.length; i++) {
        image(this.mediumImagesHiscore[i], this.hiscoreX - scoreWidthTwo/2 + xTwo, this.hiscoreY)
        xTwo += this.mediumImagesHiscore[i].width - 1
      }
    }
  }
}