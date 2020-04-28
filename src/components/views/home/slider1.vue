<template>
  <div id="banner-container">
    <div class="wrapper" @mouseover="stop" @mouseleave="play">
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sliders',
  props: {
    initialSpeed: {
      type: Number,
      default: 30
    },
    initialInterval: {
      type: Number,
      default: 4
    }
  },
  data () {
    return {
      sliders:[
        { 
          clazz:'ROUTER_BLOG',
          img:'/static/images/banner/1.jpg'
        },
        {
          clazz:'ROUTER_BLOG',
          img:'/static/images/banner/2.jpg'
        },
        {
          clazz:'ROUTER_BLOG',
          img:'/static/images/banner/3.jpg'
        },
        {
          clazz:'ROUTER_BLOG',
          img:'/static/images/banner/4.jpg'
        }
      ],
      currentIndex:1,
      distance:-504,
      transitionEnd: true,
      speed: this.initialSpeed,
      slidersLen: 1,
    }
  },
  computed:{
    containerStyle() {
      return {
        transform:`translate3d(${this.distance}px, 0, 0)`,
        transition: `transform 800ms ease 0s`
      }
    },
    interval() {
      return this.initialInterval * 1000
    }
  },
  mounted() {
    this.init()
  },
  methods:{
    init() {
      this.play()
      window.onblur = function() { this.stop() }.bind(this)
      window.onfocus = function() { this.play() }.bind(this)
      this.slidersLen = this.sliders.length;
    },
    move(offset, direction, speed) {
      if (!this.transitionEnd) return
      this.transitionEnd = false
      direction === -1 ? this.currentIndex += offset/504 : this.currentIndex -= offset/504
      if (this.currentIndex > this.slidersLen) this.currentIndex = 1
      if (this.currentIndex < 1) this.currentIndex = this.slidersLen

      const destination = this.distance + offset * direction
      this.animate(destination, direction, speed)
    },
    animate(des, direc, speed) {
      if (this.temp) { 
        window.clearInterval(this.temp)
        this.temp = null 
      }
      this.temp = window.setInterval(() => {
        if ((direc === -1 && des < this.distance) || (direc === 1 && des > this.distance)) {
          this.distance += speed * direc
        } else {
          this.transitionEnd = true
          window.clearInterval(this.temp)
          this.distance = des
          if (des < -504*(this.slidersLen)) this.distance = -504
          if (des > -504) this.distance = -504*(this.slidersLen)
        }
      }, 20)
    },
    jump(index) {
      const direction = index - this.currentIndex >= 0 ? -1 : 1
      const offset = Math.abs(index - this.currentIndex) * 504
      const jumpSpeed = Math.abs(index - this.currentIndex) === 0 ? this.speed : Math.abs(index - this.currentIndex) * this.speed 
      this.move(offset, direction, jumpSpeed)
    },
    play() {
      if (this.timer) {
        window.clearInterval(this.timer)
        this.timer = null
      }
      this.timer = window.setInterval(() => {
        this.move(504, -1, this.speed)
      }, this.interval)
    },
    stop() {
      window.clearInterval(this.timer)
      this.timer = null
    }
  }
}
</script>

<style scoped>

</style>
