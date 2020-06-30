import BackGround from './runtime/background'
import GameInfo   from './runtime/gameinfo'
import Music      from './runtime/music'
import DataBus    from './databus'

let ctx   = canvas.getContext('2d')
let databus = new DataBus()


wx.cloud.init({
  env: 'dance-134zf',
  traceUser: true,
})
const db = wx.cloud.database()

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
    databus.reset()

    // 设置背景色为白色
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="#000000";
    ctx.fillText("打砖块",10,50);
    

  }


}
