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

const compSlider = () => import(/* webpackChunkName: "home-index" */'./slider')
const compContentBox = () => import(/* webpackChunkName: "home-index" */'./contentBox')
const compCard = () => import(/* webpackChunkName: "home-index" */'../../card')
const compLinkBox = () => import(/* webpackChunkName: "home-index" */'../../linkBox')
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
