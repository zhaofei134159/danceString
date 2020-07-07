import BackGround from './runtime/background.js'
import Building from './runtime/building.js'

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
      // databus.frame++;
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
    this.build.draw(ctx)

  }


  update(){

  }

}
