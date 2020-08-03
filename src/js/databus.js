import Pool from './base/pool.js'

let instance

export default class DataBus {
  constructor() {
    if ( instance )
      return instance

    instance = this

    this.pool = new Pool()

    this.reset()
  }

  reset() {
    this.frame      = 0
    this.score      = 0
    this.bullets    = []
    this.buildings  = []
    this.animations = []
    this.gameOver   = false
  }


  /**
   * 从添加到绘制的障碍物列表中回收不显示的用于新障碍物的显示
   */
  recycleBarrier(building) {
    if (building != null) {


      building.visible = false
      let temp = this.buildings.shift()
      temp.visible = false
      this.buildings[0].left -= this.speed
      this.pool.put('building', temp)
    }
  }
  

}

window.databus = new DataBus()