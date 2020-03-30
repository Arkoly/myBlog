<template>
  <div :class="['main']">
    <header>
      <div id="navBox" @click="addMenu">
        <span class="navIcon"></span>
      </div>
      <com-headerTip></com-headerTip>
      <span id="logo" class="ROUTER_HOME"></span>
      <nav class="menu"  @click="addMenu">
         <comp-menu></comp-menu>
      </nav>
    </header>
    <div class="router-view">
      <transition  name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <footer>
      <comp-footer></comp-footer>
    </footer>
  </div>
</template>

<script>
import $ from 'jquery'

const comHeaderTip = () => import(/* webpackChunkName: "components/headerTip" */'@/components/headerTip')
const compMenu = () => import(/* webpackChunkName: "components/menu" */'@/components/menu')
const compFooter = () => import(/* webpackChunkName: "components/footer" */'@/components/footer')
export default {
  data () {
    return {
      isMenuList: true
    }
  },
  components:{
    comHeaderTip,
    compMenu,
    compFooter
  },

  methods:{
    addMenu(){
      // this.isMenuList = !this.isMenuList
      if(this.isMenuList){
        $('.menu').css("display","block")
        this.isMenuList = false

      }else if(!this.isMenuList){
        $('.menu').css("display","none")
        this.isMenuList = true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "~@/css/style";

</style>
