<template>
  <div class="home-page">
     <div class="left-box">
       <comp-slider></comp-slider>
       <comp-linkBox></comp-linkBox>
       <comp-contentBox></comp-contentBox>
     </div>
     <div class="right-box">
       <comp-card></comp-card>
     </div>
  </div>
</template>

<script>

const compSlider = () => import(/* webpackChunkName: "./slider" */'./slider')
const compContentBox = () => import(/* webpackChunkName: "./contentBox" */'./contentBox')
const compCard = () => import(/* webpackChunkName: "../../card" */'../../card')
const compLinkBox = () => import(/* webpackChunkName: "../../linkBox" */'../../linkBox')
export default {
  name: 'home',
  components:{
    compSlider,
    compCard,
    compLinkBox,
    compContentBox
  },
  data () {
    return {
      msg: 'Welcome to home page'
    }
  },
   created(){
    import(/* webpackChunkName: "[request]" */ `../../../skins/index.js`).then(mod => {
      // let data = mod.solarTerm;
      this.$nextTick(()=>{
        // this.solarTerm = data;
      });
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
