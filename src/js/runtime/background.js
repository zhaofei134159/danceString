
import Sprite from '../base/sprite.js'


const BG_IMG_SRC = 'images/bg.jpg'
const BG_IMG_WIDTH = 512
const BG_IMG_HEIGHT = 512

export default class Background extends Sprite {

  constructor() {
    super(BG_IMG_SRC, 0, 0, BG_IMG_WIDTH, BG_IMG_HEIGHT)

    this.left = 0
  }

  draw(ctx) {

    ctx.drawImage(
      this.img,
      this.x + this.left,
      this.y,
      window.innerWidth,
      window.innerHeight
    )
  }

  update() {
    
  }

}