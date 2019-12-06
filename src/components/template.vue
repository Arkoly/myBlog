<template>
  <div :class="['main']">
    <header>
      <com-headerTip></com-headerTip>
      <nav class="menu">
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

const comHeaderTip = () => import(/* webpackChunkName: "components/headerTip" */'@/components/headerTip')
const compMenu = () => import(/* webpackChunkName: "components/menu" */'@/components/menu')
const compFooter = () => import(/* webpackChunkName: "components/footer" */'@/components/footer')
export default {
  data () {
    return {
      
    }
  },
  components:{
    comHeaderTip,
    compMenu,
    compFooter
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "~@/css/style";

</style>
