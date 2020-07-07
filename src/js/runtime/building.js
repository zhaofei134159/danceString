import Sprite from '../base/sprite.js'
import databus from '../base/databus.js'


const BG_IMG_SRC = 'images/building.png'
const BG_IMG_WIDTH = 200
const BG_IMG_HEIGHT = 300

export default class Building extends Sprite {

  constructor() {
    super(BG_IMG_SRC, -40, 190, BG_IMG_WIDTH, BG_IMG_HEIGHT)

    this.left = 0
  }
  
  draw(ctx) {

    ctx.drawImage(
      this.img,
      this.x + this.left,
      this.y,
      this.width,
      this.height
    )
  }


  update() {
    
  }

}