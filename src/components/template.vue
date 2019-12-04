<template>
  <div :class="['main']">
    <header>
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
const compMenu = () => import(/* webpackChunkName: "components/menu" */'@/components/menu')
const compFooter = () => import(/* webpackChunkName: "components/footer" */'@/components/footer')
export default {
  data () {
    return {
      
    }
  },
  components:{
    compMenu,
    compFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "~@/css/style";

</style>
