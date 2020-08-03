import Animation from '../base/animation.js'
import DataBus from '../databus.js'


const BUILD_IMG_SRC = 'images/building.png'
const BUILD_IMG_WIDTH = 200
const BUILD_IMG_HEIGHT = 300

const __ = {
  speed: Symbol('speed')
}

let databus = new DataBus()

function rnd(start, end){
  return Math.floor(Math.random() * (end - start) + start)
}

export default class Building extends Animation {

  constructor() {
    super(BUILD_IMG_SRC, BUILD_IMG_WIDTH, BUILD_IMG_HEIGHT)

    // this.initExplosionAnimation()
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

  init(speed){
    this.x = rnd(0, window.innerWidth - BUILD_IMG_WIDTH)
    this.y = BUILD_IMG_HEIGHT
    this[__.speed] = speed
    this.visible = true
  }


  update() {
    
  }

}