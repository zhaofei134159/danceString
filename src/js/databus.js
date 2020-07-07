import Pool from './base/pool.js'

window.RATIO = window.innerWidth / 288

window.px2dp = function(px) {
  return px * RATIO
}

let instance

export default class DataBus {

  constructor() {
    if (instance == null) {
      instance = this
    } else {
      return instance
    }

    // 从开始到现在的帧数
    this.frame = 0
    // 游戏是否在运行，是否需要更新
    this.running = true
    // 游戏是否结束
    this.gameOver = false
    // 障碍物显示队列
    this.buildings = []
    // 缓存对象池
    this.pool = new Pool()

    // 全局难度参数
    this.speed = 2 // 速度
    this.barrierGenFrame = 80 // 生成障碍物间隔帧数
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