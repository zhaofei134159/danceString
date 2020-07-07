import BackGround from './runtime/background.js'
import Building from './runtime/building.js'
import databus from './runtime/databus.js'

let ctx   = canvas.getContext('2d')
// let databus = new DataBus()

wx.cloud.init({
  env: 'dance-134zf',
  traceUser: true,
})
const db = wx.cloud.database()
const screenWidth  = window.innerWidth
const screenHeight = window.innerHeight

/**
 * 游戏主函数
 */ 
export default class Main {
  constructor() {
    this.restart()
    this.login()
  }

  login() {
    // 获取 openid
    wx.cloud.callFunction({
      name: 'login',
      success: res => {
        window.openid = res.result.openid
      },
      fail: err => {
        console.error('get openid failed with error', err)
      }
    })
  }

  restart() {
    // databus.reset()

    this.bg = new BackGround();
    this.build = new Building();

    // 为了实现帧动画
    this.bindLoop = this.loop.bind(this)
    window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )
  }


  loop() {
      databus.frame++;
      // 更新
      this.update()

      // 绘制
      this.render()
      window.requestAnimationFrame(
        this.bindLoop,
        canvas
      )
  }

  render() {
    this.bg.draw(ctx)
    databus.bullets.concat(databus.enemys).forEach((item) => {
              item.drawToCanvas(ctx)
            })

  }


  update(){
    this.buildGenerate()
  }



  buildGenerate() {
    if ( databus.frame % 30 === 0 ) {
      let build = databus.pool.getItemByClass('build', build)
      build.init(6)
      databus.buildings.push(build)
    }
  }


  init(frame){
    if (frame % databus.barrierGenFrame !== 0) {
        this.x = x
        this.y = y
        this.start = x
        this.width = width
        this.height = height
     
      let build = databus.generateBarrier('images/pipe_down.png', 'images/pipe_up.png',
        window.innerWidth, px2dp(-130) + Math.random() * px2dp(100), px2dp(130))
      let build = super(BG_IMG_SRC, -40, 190, BG_IMG_WIDTH, BG_IMG_HEIGHT)

      databus.buildings.push(build)
    }
  }

}
