import Sprite from '../base/sprite'
const BGIMGPATH = [
  'resource/images/bj0.jpg',
  'resource/images/bj1.jpg',
  'resource/images/bj2.jpg',
]

const screenWidth  = window.innerWidth
const screenHeight = window.innerHeight

const BGRAND = Math.floor(Math.random()*3)
const BG_IMG_SRC   = BGIMGPATH[BGRAND]
const BG_WIDTH     = 512
const BG_HEIGHT    = 512

/**
 * 游戏背景类
 * 提供update和render函数实现无限滚动的背景功能
 */
export default class BackGround extends Sprite {
  constructor(ctx) {
    super(BG_IMG_SRC, BG_WIDTH, BG_HEIGHT)
    this.render(ctx)
  }

  /**
   * 背景图重绘函数
   * 绘制两张图片，两张图片大小和屏幕一致
   */
  render(ctx) {
    ctx.drawImage(
      this.img,
      0,
      0,
      this.width,
      this.height,
      0,
      0,
      screenWidth,
      screenHeight
    )
  }
}
