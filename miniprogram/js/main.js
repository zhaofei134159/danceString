import BackGround from './runtime/background'
import Music      from './runtime/music'
import DataBus    from './databus'

let ctx   = canvas.getContext('2d')
let databus = new DataBus()

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
    // 维护当前requestAnimationFrame的id
    this.aniId    = 0
    this.personalHighScore = null

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

    this.bg = new BackGround(ctx);

    this.startButton();
    
    // 为了实现帧动画
    this.bindLoop = this.loop.bind(this)
    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )
  }

  /**
   * canvas重绘函数
   * 每一帧重新绘制所有的需要展示的元素
   */
  render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    this.bg.render(ctx)
  }

  // 实现游戏帧循环
  loop() {
    databus.frame++

    this.render()
    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )
  }

  startButton(){
    let button = wx.createUserInfoButton({
        type: 'text',
        text: '开始游戏',
        style: {
            left:screenWidth/3,
            top:screenHeight/1.3,
            width: screenWidth/3,
            height: 40,
            lineHeight: 40,
            backgroundColor: '#D3AE70',
            color: '#ffffff',
            textAlign: 'center',
            fontSize: 16,
            borderRadius: 4
        }
    });
    button.show();
    button.onTap((res) => {
        wx.login({
          success (res) {
            if (res.code) {
              //发起网络请求
              wx.request({
                url: 'https://test.com/onLogin',
                data: {
                  code: res.code
                }
              })
            } else {
              console.log('登录失败！' + res.errMsg)
            }
          }
        })
    });
  }

}
