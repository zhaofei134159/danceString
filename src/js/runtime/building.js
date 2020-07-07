import Sprite from '../base/sprite.js'


const BG_IMG_SRC = 'images/building.png'
const BG_IMG_WIDTH = 200
const BG_IMG_HEIGHT = 100

export default class Building extends Sprite {

  constructor() {
    super(BG_IMG_SRC, 0, 412, BG_IMG_WIDTH, BG_IMG_HEIGHT)

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